<template>
  <div>
    <div v-for="team in teams" :key="team.teamId">
      <h3>队伍名称{{ team.teamName }}</h3>
      <p>选题名称{{ team.questionName }}</p>

      <!-- 加入组队按钮 -->
      <el-button @click="joinTeam(team.teamId)">加入组队</el-button>

      <!-- 查看队伍文档按钮 -->
      <el-button @click="viewTeamDocument(team.teamId)">查看队伍文档</el-button>

      <!-- 下载文件按钮 -->
      <el-button @click="downloadFile(team.filePath)">下载文件</el-button>
    </div>
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
