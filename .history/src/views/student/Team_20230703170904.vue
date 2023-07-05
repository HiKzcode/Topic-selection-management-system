<template>
  <div>
		<el-menu
     :default-active="activeIndex2"
     class="el-menu-demo"
     mode="horizontal"
     @select="handleSelect"
     background-color="#545c64"
     text-color="#fff"
     active-text-color="#ffd04b">
    <el-menu-item index="1">查看所有队伍</el-menu-item>
    <el-submenu index="2">
    <template slot="title">创建队伍</template>
    <el-menu-item index="2-1">选项1</el-menu-item>
    <el-menu-item index="2-2">选项2</el-menu-item>
    <el-menu-item index="2-3">选项3</el-menu-item>
    <el-submenu index="2-4">
      <template slot="title">选项4</template>
      <el-menu-item index="2-4-1">选项1</el-menu-item>
      <el-menu-item index="2-4-2">选项2</el-menu-item>
      <el-menu-item index="2-4-3">选项3</el-menu-item>
    </el-submenu>
  </el-submenu>
  <el-menu-item index="3" disabled>消息中心</el-menu-item>
  <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
</el-menu>
    <el-table :data="teams" style="width: 100%" row-height="60px">
      <el-table-column prop="teamName" label="队伍名称"  style="height: 50px;"> </el-table-column>
      <el-table-column prop="questionName" label="选题名称"  class="custom-column"> </el-table-column>
      <el-table-column label="组队">
        <template slot-scope="scope">
          <el-button round @click="joinTeam(scope.row.teamId)">加入组队</el-button>
          <el-button round @click="viewTeamDocument(scope.row.teamId)">查看文档</el-button>
          <el-button round @click="downloadFile(scope.row.filePath)">下载文件</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
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
    };
  },
  methods: {
    joinTeam(teamId) {
      // 处理加入组队的逻辑
      console.log("加入组队，队伍ID：" + teamId);
    },
    viewTeamDocument(teamId) {
      // 处理查看队伍文档的逻辑
      console.log("查看队伍文档，队伍ID：" + teamId);
    },
    downloadFile(filePath) {
      // 处理下载文件的逻辑
      console.log("下载文件，文件路径：" + filePath);
    },
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
	background-color: rgba(194, 239, 253, 0.295);
}
</style>