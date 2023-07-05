<template>
  <div>
    <el-card clas="">

    </el-card>>
    <el-table :data="teams" style="width: 100%">
      <el-table-column prop="teamName" label="队伍名称"></el-table-column>
      <el-table-column prop="questionName" label="选题名称"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button @click="joinTeam(scope.row.teamId)">加入组队</el-button>
          <el-button @click="viewTeamDocument(scope.row.teamId)">查看队伍文档</el-button>
          <el-button @click="downloadFile(scope.row.filePath)">下载文件</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<!-- 省略script部分 -->

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
