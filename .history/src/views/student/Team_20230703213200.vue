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
					<div>创建我的队伍</div>
					<div class="create-box">
						 
					</div>
					
		   </div>
    </div>
		<div v-else-if="currentView === 'showTeam'">
		   我的团队你好呀
		</div>
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
		Tmessage:'你加入成功了',
		showSuccessDialog: false,
		sizeForm: {
          name: '',
          region: '',
				}
      // 其他数据...
    };
  },
  methods: {
    handleSelect(index) {
      this.activeIndex2 = index;
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
		
    viewTeamDocument(teamId) {
      // 处理查看队伍文档的逻辑
       
    },
    downloadFile(filePath) {
      // 处理下载文件的逻辑
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
        console.log('submit!');
      }
    // 其他方法...
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
  margin-left:20px ;
}
</style>