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
            <el-select v-model="cForm.questionName" placeholder="请选择题目"  style="margin-right: 400px;width: 220px; ">
              <el-option
                v-for="question in questionlist"
                 :key="question.questionId"
                 :label="question.questionName"
                 :value="question.questionName"
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
    
            <el-button round @click="viewTeamDocument">查看文档</el-button>
            <el-button round @click="showfile">下载文件</el-button>
        </el-table-column>
      </el-table>
		  	<p v-else>你还未组队</p>
		</div>
		<!--文档列表相关-->
		<el-drawer :visible="showDocumentDrawer"  :size="300" @close="closeDocumentDrawer">
      <el-row>
        <el-col :span="24">
          <!-- 文档列表内容 -->
          <ul style="list-style-type: none;">
            <li style="height: 50px;" v-for="file in fileList" :key="file">
							<>
							{{ file }}
							<i class="delete-button" @click="deleteDocument(file)">删除</i></li>
          </ul>
         </el-col>
      </el-row>
    </el-drawer>
		<!--文档下载相关-->
		<el-dialog  :visible.sync="dialogVisible" title="请输入文件名" width="30%">
      <el-input v-model="fileName" placeholder="请输入文件名"></el-input>
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
      activeIndex2: '1', // 默认选中的菜单项索引
      currentView: 'teams', // 当前显示的内容，可选值为 'teams' 和 'createTeam'
      teams: [{
			"questionId": "1",
			"questionName": "养影议速程压象",
			"state": 0,
			"teamId": "1",
			"teamName": "选题组队"
		},
		{
			"filePath": "D:/xt/file11111",
			"questionId": "11",
			"questionName": "着我严通",
			"state": 0,
			"teamId": "9",
			"teamName": "问置对增最"
		},
		{
			"filePath": "D:/xt/file11111",
			"questionId": "7657938590491685000",
			"questionName": "着我严通",
			"state": 0,
			"teamId": "10",
			"teamName": "问置对增最"
		},
		{
			"filePath": "D:/xt/file/11111",
			"questionId": "3817617017305497600",
			"questionName": "外真明次派",
			"state": 0,
			"teamId": "11",
			"teamName": "年较电每"
		},
		{
			"filePath": "D:/xt/file/年较电每",
			"questionId": "3817617017305497600",
			"questionName": "外真明次派",
			"state": 0,
			"teamId": "13",
			"teamName": "年较电每"
		},
		{
			"filePath": "D:/xt/file/年较电每",
			"questionId": "3817617017305497600",
			"questionName": "外真明次派",
			"state": 0,
			"teamId": "14",
			"teamName": "年较电每"
		},
		{
			"filePath": "D:/xt/file/才象前张义元",
			"questionId": "-3942554567855505400",
			"questionName": "整志技样圆会身",
			"state": 0,
			"teamId": "15",
			"teamName": "才象前张义元"
		  }], // 队伍数据 
		  questionlist:[
		{
			"questionDescription": "ea Duis cupidatat",
			"questionId": "1",
			"questionName": "养影议速程压象",
			"teacherId": "5835610719323599000",
			"teacherName": "5835610719323599000"
		},
		{
			"filePath": "2word.docx",
			"questionDescription": "ea Duis cupidatat",
			"questionId": "2",
			"questionName": "养影议速程压象",
			"teacherId": "5835610719323599000",
			"teacherName": "5835610719323599000"
		},
		{
			"questionDescription": "ea Duis cupidatat",
			"questionId": "3",
			"questionName": "养影议速程压象",
			"teacherId": "11111",
			"teacherName": "11111"
		},
		{
			"questionDescription": "ea Duis cupidatat",
			"questionId": "4",
			"questionName": "养影议速程压象",
			"teacherId": "11111",
			"teacherName": "11111"
		},
		{
			"questionDescription": "esse eu enim",
			"questionId": "5",
			"questionName": "量你头被分容",
			"teacherId": "11111",
			"teacherName": "11111"
		},
		{
			"filePath": "64.png",
			"questionDescription": "ea Duis cupidatat",
			"questionId": "6",
			"questionName": "养影议速程压象",
			"teacherId": "11111",
			"teacherName": "11111"
		},
		{
			"questionDescription": "ea Duis cupidatat",
			"questionId": "7",
			"questionName": "养影议速程压象",
			"teacherId": "11111",
			"teacherName": "11111"
		},
		{
			"questionDescription": "ea Duis cupidatat",
			"questionId": "8",
			"questionName": "养影议速程压象",
			"teacherId": "11111",
			"teacherName": "11111"
		},
		{
			"questionDescription": "ea Duis cupidatat",
			"questionId": "9",
			"questionName": "养影议速程压象",
			"teacherId": "11111",
			"teacherName": "11111"
		},
		{
			"questionDescription": "ea Duis cupidatat",
			"questionId": "10",
			"questionName": "养影议速程压象",
			"teacherId": "11111",
			"teacherName": "11111"
		},
		{
			"questionDescription": "ea Duis cupidatat",
			"questionId": "11",
			"questionName": "养影议速程压象",
			"teacherId": "11111",
			"teacherName": "11111"
		},
		{
			"filePath": "124.png",
			"questionDescription": "ea Duis cupidatat",
			"questionId": "12",
			"questionName": "养影议速程压象",
			"teacherId": "11111",
			"teacherName": "11111"
		},
		{
			"filePath": "12p2.jpg",
			"questionDescription": "ea Duis cupidatat",
			"questionId": "13",
			"questionName": "养影议速程压象",
			"teacherId": "11111",
			"teacherName": "11111"
		},
		{
			"filePath": "14p2.jpg",
			"questionDescription": "ea Duis cupidatat",
			"questionId": "14",
			"questionName": "养影议速程压象",
			"teacherId": "11111",
			"teacherName": "11111"
		},
		{
			"questionDescription": "ea Duis cupidatat",
			"questionId": "15",
			"questionName": "养影议速程压象",
			"teacherId": "11111",
			"teacherName": "11111"
		},
		{
			"questionDescription": "ea Duis cupidatat",
			"questionId": "16",
			"questionName": "养影议速程压象",
			"teacherId": "11111",
			"teacherName": "11111"
		},
		{
			"questionDescription": "ea Duis cupidatat",
			"questionId": "17",
			"questionName": "养影议速程压象",
			"teacherId": "11111",
			"teacherName": "11111"
		},
		{
			"filePath": "18p3.jpg",
			"questionDescription": "ea Duis cupidatat",
			"questionId": "18",
			"questionName": "养影议速程压象",
			"teacherId": "11111",
			"teacherName": "11111"
		},
		{
			"questionDescription": "ea Duis cupidatat",
			"questionId": "19",
			"questionName": "养影议速程压象",
			"teacherId": "11111",
			"teacherName": "11111"
		},
		{
			"questionDescription": "ea Duis cupidatat",
			"questionId": "20",
			"questionName": "养影议速程压象",
			"teacherId": "11111",
			"teacherName": "11111"
		},
		{
			"questionDescription": "ea Duis cupidatat",
			"questionId": "21",
			"questionName": "养影议速程压象",
			"teacherId": "11111",
			"teacherName": "11111"
		},
		{
			"questionDescription": "ea Duis cupidatat",
			"questionId": "22",
			"questionName": "养影议速程压象",
			"teacherId": "11111",
			"teacherName": "11111"
		},
		{
			"questionDescription": "ea Duis cupidatat",
			"questionId": "23",
			"questionName": "养影议速程压象",
			"teacherId": "11111",
			"teacherName": "11111"
		},
		{
			"questionDescription": "ea Duis cupidatat",
			"questionId": "24",
			"questionName": "养影议速程压象",
			"teacherId": "11111",
			"teacherName": "11111"
		},
		{
			"questionDescription": "ea Duis cupidatat",
			"questionId": "25",
			"questionName": "养影议速程压象",
			"teacherId": "11111",
			"teacherName": "11111"
		},
		{
			"questionDescription": "ea Duis cupidatat",
			"questionId": "26",
			"questionName": "养影议速程压象",
			"teacherId": "11111",
			"teacherName": "11111"
		},
		{
			"questionDescription": "ea Duis cupidatat",
			"questionId": "28",
			"questionName": "养影议速程压象",
			"teacherId": "11111",
			"teacherName": "11111"
		},
		{
			"questionDescription": "ea Duis cupidatat",
			"questionId": "29",
			"questionName": "养影议速程压象",
			"teacherId": "11111",
			"teacherName": "11111"
		},
		{
			"questionDescription": "ea Duis cupidatat",
			"questionId": "30",
			"questionName": "养影议速程压象",
			"teacherId": "11111",
			"teacherName": "11111"
		},
		{
			"questionDescription": "ea Duis cupidatat",
			"questionId": "31",
			"questionName": "养影议速程压象",
			"teacherId": "11111",
			"teacherName": "11111"
		},
		{
			"questionDescription": "in cupidatat magna quis",
			"questionId": "32",
			"questionName": "能导国领过",
			"teacherId": "11111",
			"teacherName": "11111"
		},
		{
			"questionDescription": "in cupidatat magna quis",
			"questionId": "33",
			"questionName": "能导国领过",
			"teacherId": "11111",
			"teacherName": "11111"
		},
		{
			"questionDescription": "cupidatat ut laboris nisi",
			"questionId": "34",
			"questionName": "加具变过处号主",
			"teacherId": "11111",
			"teacherName": "11111"
		},
		{
			"questionDescription": "cupidatat ut laboris nisi",
			"questionId": "35",
			"questionName": "加具变过处号主",
			"teacherId": "11111",
			"teacherName": "11111"
		},
		{
			"questionDescription": "cupidatat ut laboris nisi",
			"questionId": "36",
			"questionName": "加具变过处号主",
			"teacherId": "11111",
			"teacherName": "11111"
		}
		  ],
			myteam:[{
				"filePath": "D:/xt/file/年较电每",
        "questionName": "外真明次派",
        "state": 0,
        "teamName": "年较电每"
			}],
		  Tmessage:'你加入成功了',
		  showSuccessDialog: false,
		  cForm: {
			  teamName: '',
			  questionName: '',
			},
			fileList: [
            1,2,3,4,56,7
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
    handleSelect(index) {
      this.activeIndex2 = index;
    },
		getquestionlist(){
			/* this.$axios({
			 method:'get',
			 url:'./api/question',
			 headers:{
           'token':localStorage.getItem("token")
          }
		 }).then(request=>{
			  this.questionlist=request.data
		 })*/
		},
		getteamlist(){
			//获得队伍列表
			/*this.$axios({
			 method:'get',
			 url:'./api/team/list',
			 headers:{
           'token':localStorage.getItem("token")
          }
		   }).then(request=>{
			  this.team=request.data
	  	 })*/
		},
		getmyteam(){
			/*this.$axios({
			 method:'get',
			 url:'./api/team/me',
			 headers:{
           'token':localStorage.getItem("token")
          }
		 }).then(request=>{
			  this.team=request.data
		 })
		 */
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
			/*this.$axios(get('/api/team/join'),{
				headers:{
              'token':localStorage.getItem("token")
            },
				 params:{
					teamId:teamId
				}}).then(request=>{
					 this.Tmessage=request.message
				})*/
				this.showSuccessDialog = true
			},
    //处理查看队伍文档的逻辑
    viewTeamDocument() {
			/*this.$axios({
				method:'get',
			  url:'/api/team/fileList',
				headers:{
              'token':localStorage.getItem("token")
            }
			}).then(res=>{
				 this.fileList=res.data.fileList
			})*/
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
			this.dialogVisible = false;
			this.$axios({
				method:'get',
				url:'api/team/download',
			  headers:{
              'token':localStorage.getItem("token")
            },
				params:{
					filename:this.fileName
				}
			}).then(res=>{
				if(res.code==1011){
					alert('文件不存在')
				}else{
          // 假设后端返回的响应数据中有一个名为 "base64File" 的字段，存储了 base64 字符串
       const base64File = "..." // 后端返回的 base64 字符串

     // 将 base64 字符串转换为 Blob 对象
      const byteCharacters = atob(base64File);
      const byteArrays = [];
      for (let i = 0; i < byteCharacters.length; i++) {
        byteArrays.push(byteCharacters.charCodeAt(i));
     }
     const byteArray = new Uint8Array(byteArrays);
     const blob = new Blob([byteArray], { type: "application/octet-stream" });

    // 创建临时链接并下载文件
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "filename.ext"; // 设置文件名，可根据实际情况修改
    document.body.appendChild(link);
    link.click();

   // 清理临时链接
    URL.revokeObjectURL(url);
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
			 console.log(this.cForm.teamName);
			 console.log('question',this.cForm.questionName)
       /*this.$axios({
				 method:'post',
				 url:'./api/team/create',
				 headers:{
           'token':localStorage.getItem("token")
          },
				 data:{
					 teacherName:this.cForm.teamName,
					 questionName:this.cForm.questionName
				 },
			 }).then(request=>{
				   if(request.code==200){
						 alert("创建成功了")
					 }
			 })*/
      }
  },
};
</script>
<style>
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