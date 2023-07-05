<template>
  <div>
	  <!--头部菜单-->
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#D8D9CF"
      text-color="#0F3D3E"
      active-text-color="#472D2D"
    >
      <el-menu-item index="1" @click="showTeams">查看所有队伍</el-menu-item>
      <el-menu-item index="2" @click="showCreateTeam">创建新队伍选题</el-menu-item>
			<el-menu-item index="3" @click="showTeam">我的队伍</el-menu-item>
    </el-menu>
		<!--加入队伍的页面-->
    <div v-if="currentView === 'teams'">
			<!--加入队伍的弹窗-->
		<el-dialog
     title="Team Result"
     :visible.sync="showSuccessDialog"
     width="40%"
    :before-close="handleClose">
     <span>{{ Tmessage }}</span>
     <span slot="footer" class="dialog-footer">
     <el-button @click="showSuccessDialog = false">取 消</el-button>
     <el-button type="primary" @click="showSuccessDialog = false">确 定</el-button>
     </span>
    </el-dialog>	
		 <!--所有队伍列表-->
      <el-table :data="teams" style="width: 100%" row-height="60px">
        <el-table-column prop="teamName" label="队伍名称" style="height: 50px;"></el-table-column>
        <el-table-column prop="questionName" label="选题名称" class="custom-column"></el-table-column>
        <el-table-column label="组队">
          <template slot-scope="scope">
            <el-button round @click="joinTeam(scope.row.teamId)">加入组队</el-button>
           <!--<el-button round @click="viewTeamDocument(scope.row.teamId)">查看文档</el-button>-->
            <!--<el-button round @click="downloadFile(scope.row.filePath)">下载文件</el-button>-->
          </template>
        </el-table-column>
      </el-table>
    </div>
		
    <div v-else-if="currentView === 'createTeam'">
      <!-- 在这里放置创建队伍选题的相关内容 -->
        <div class="createc">
					<div class="create-box" >	
						<div style="height: 50px;" class="ctext">创建我的队伍</div>
						<el-form ref="form" label-width="80px" size="mini" style="width: 397px; background-color: aliceblue; border-color:aliceblue ;">
             <el-form-item label="团队名称" style="width: 300px; height: 70px;">
             <el-input v-model="cForm.teamName"></el-input>
            </el-form-item>
            <el-form-item label="题目选择" style="height: 70px;">
            <el-select v-model="cForm.questionName" placeholder="请选择题目" @change="updateQuestionId" style="margin-right: 400px;width: 220px; ">
              <el-option
                v-for="question in questionlist"
                 :key="question.questionId"
                 :label="question.questionName"
                 :value="question.question"
               ></el-option>
            </el-select>
        </el-form-item>
       <el-form-item size="large">
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
      </el-form-item>
     </el-form>
					</div>
					
		   </div>
    </div>
		<div v-else-if="currentView === 'showTeam'">
		   我的团队
			 <el-table v-if="myteam.length > 0" :data="myteam" style="width: 100%" row-height="60px">
        <el-table-column prop="teamName" label="队伍名称" style="height: 50px;"></el-table-column>
        <el-table-column prop="questionName" label="选题名称" class="custom-column"></el-table-column>
        <el-table-column label="组队">
       <template slot-scope="scope">
				<input type="file" @change="handleFileChange" class="fi" />
        <el-button round @click="uploadFile">上传文档</el-button>
        <el-button round @click="viewTeamDocument(scope.row)">查看文档</el-button>
        <el-button round @click="downloadFile(scope.row.filePath)">下载文件</el-button>
      </template>
    </el-table-column>
  </el-table>
		  	<p v-else>你还未组队</p>
		</div>
		<!--文档列表相关-->
		<el-drawer :visible="showDocumentDrawer"  :size="300" @close="closeDocumentDrawer" :modal="false">
      <el-row>
        <el-col :span="24">
          <!-- 文档列表内容 -->
					<el-card v-for="file in fileList" :key="file" class="file-card" >
          <div class="card-content">
          <i class="el-icon-document"></i>
          <span>{{ file }}</span> 
					 <el-button style="width: 45px;height: 40px; margin-left: 20px;"  type="danger" @click="deleteFile(file)" icon="el-icon-delete" circle></el-button>
         </div>
      </el-card>
         </el-col>
      </el-row>
    </el-drawer>
		<!--文档下载相关-->
		<el-dialog  :visible.sync="dialogVisible" title="请输入文件名" width="30%">
      <el-input v-model="fileName" placeholder="请输入文件名" :rules="fileNameRules"></el-input>
        <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取消</el-button>
     <el-button type="primary" @click="downloadFile">确认</el-button>
     </span>
   </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
			fileNameRules: [
        { required: true, message: '文件名不能为空', trigger: 'blur' }
      ],
      activeIndex2: '1', // 默认选中的菜单项索引
      currentView: 'teams', // 当前显示的内容，可选值为 'teams' 和 'createTeam'
      teams: [], // 队伍数据 
		  questionlist:[]
,     myteamo:{},
			myteam:[],
		  Tmessage:'',
		  showSuccessDialog: false,
		  cForm: {
			  teamName: '',
			  questionName: '',
				questionId:''
			},
		
			fileList: [
            1,2,3,4,5,6,7
        ],
		  showDocumentDrawer: false, // 是否显示文档抽屉
			dialogVisible: false,//是否展示输入文档名字的对话框
		  fileName: ''
      // 其他数据...
    };

  },
	created(){
		this.getquestionlist(),
		this.getteamlist()
		this.getmyteam()
	},
  methods: {
		handleFileChange(event) {
      // 获取用户选择的文件
      this.selectedFile = event.target.files[0];
    },
    uploadFile() {
      if (!this.selectedFile) {
        alert('请先选择文件');
        return;
      }
      // 创建 FormData 对象
      const formData = new FormData();
      formData.append('file', this.selectedFile);
      // 发送文件到后端
      this.$axios
        .post(`/team/submitFile`, formData, {
          headers: {
            'token': localStorage.getItem('token'),
          }
        })
        .then(res => {
          // 处理上传成功的逻辑
          if(res.data.code==200){
            alert('上传成功')
          }else if(res.data.code==500){
						alert('该文件名已存在，不得重复上传，请修改文件名')
					}
				}).catch(error => {
          // 处理上传失败的逻辑
          console.error('文件上传失败', error);
        });
    },
		updateQuestionId() {
    const selectedQuestion = this.questionlist.find(question => question.questionId === this.cForm.questionId);
    this.cForm.questionId = selectedQuestion ? selectedQuestion.questionId : '';
  },
    handleSelect(index) {
      this.activeIndex2 = index;
    },
		getquestionlist(){
			this.$axios({
			 method:'get',
			 url:'/question',
			 headers:{
           'token':localStorage.getItem("token")
          }
		 }).then(request=>{
			  this.questionlist=request.data.data
		 })
		},
		getteamlist(){
			//获得队伍列表
			this.$axios({
			 method:'get',
			 url:'/team/list',
			 headers:{
           'token':localStorage.getItem("token")
          }
		   }).then(res=>{
			  this.teams=res.data.data
	  	 })
		},
		getmyteam(){
			this.$axios({
			 method:'get',
			 url:'/team/me',
			 headers:{
           'token':localStorage.getItem("token")
          }
		 }).then(res=>{
			  this.myteamo=res.data.data
				this.myteam=[this.myteamo]
				console.log('data',res.data.data)
		 })
		 
		},
    showTeams() {
      this.currentView = 'teams';
      // 可在此处请求并加载队伍数据
    },
    showCreateTeam() {
      this.currentView = 'createTeam';
      // 可在此处加载创建队伍选题的相关内容
    },
		showTeam(){
			this.currentView='showTeam'
		},
		//加入队伍
    joinTeam(teamId) {
      // 处理加入组队的逻辑
			this.$axios({
				method:'post',
				url:'/team/join',
				headers:{
              'token':localStorage.getItem("token")
            },
				data:{
					teamId:teamId
				}
			}).then(res=>{
					console.log(res)
					 this.Tmessage=res.data.message
				})
				this.showSuccessDialog = true
			},
    //处理查看队伍文档的逻辑
    viewTeamDocument() {
			this.$axios({
				method:'get',
			  url:'/team/fileList',
				headers:{
              'token':localStorage.getItem("token")
            }
			}).then(res=>{
				console.log('file',res.data.data)
				 this.fileList=res.data.data
			})
			this.showDocumentDrawer = true;
    },
		closeDocumentDrawer() {
      // 关闭文档抽屉逻辑
        this.showDocumentDrawer = false;
    },
		showfile(){
					this.dialogVisible = true;
		},
    downloadFile() {
      // 处理下载文件的逻辑
			this.dialogVisible = true;
			if(this.fi)
			this.$axios({
				method:'get',
				url:'team/download',
			  headers:{
              'token':localStorage.getItem("token")
            },
				params:{
					filename:this.fileName
				}
			}).then(res=>{
				if(res.code != 5001){
					console.log('文件结果',res.data)
					// 假设你已经通过Ajax或Fetch API获取到了res.data
        // 创建Blob对象
        const blob = new Blob([res.data], { type: 'application/octet-stream' });

       // 创建URL对象
       const url = URL.createObjectURL(blob);
       // 创建链接元素
       const link = document.createElement('a');
       link.href = url;
       link.download = this.fileName; // 设置下载的文件名和扩展名
      // 模拟点击链接，触发文件下载
       link.click();
				}	
    })},
		//删除文件
		deleteFile(file){
     console.log(file)
		 this.$axios({
			 method:'DELETE',
			 url:'/team',
			 headers:{
				'token':localStorage.getItem("token")
			 },
			 params:{
				 fileName:file
			 }
		 }).then(res=>{
			  if(res.code=='500')
				 { 
					 alert('传入的文件名错误')
				 }
				 else if(res.code=='200'){
					 alert('删除成功')
					 //重新获取文件列表
					 co
					 this.getteamlist()
				 }
		 })
		},
		//处理对话框关闭的效果
		handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
    //创建队伍的信息提交
		onSubmit() {
			console.log('id',this.cForm.questionId)
       this.$axios({
				 method:'post',
				 url:'team/create',
				 headers:{
           'token':localStorage.getItem("token")
          },
				 data:{
					 teamName:this.cForm.teamName,
					 questionName:this.cForm.questionName,
					 questionId:this.cForm.questionId
				 },
			 }).then(request=>{
				   if(request.code==200){
						 alert("创建成功了")
						 this.getteamlist();
					 }
			 })
      }
  },
};
</script>
<style>

.file-card{
	height: 100px; 
	display: flex;
	flex-direction: column;
	line-height: 100px;
}
.card-content{

}
.custom-column .cell {
  height: 50px;
}
.el-button{
	font-size: 11px;
	width: 60px;
	height: 80px;
}
.create-box{
	 width:400px;
	 height: 400px;
	 border: 1px solid #ccc;
	 border-radius: 30px;
	 box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
   margin-left:32%;
	 background-color: aliceblue;
	 margin-top: 60px;
}
.ctext {
  height: 50px;
  display: flex;
  justify-content: center; /* Horizontal center alignment */
  align-items: center; /* Vertical center alignment */
}

</style>