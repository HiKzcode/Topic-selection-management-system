<template>
  <div>
    <div v-for="team in teams" :key="team.teamId">
      <h3>{{ team.teamName }}</h3>
      <p>{{ team.questionName }}</p>

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
      teams: [], // 队伍数据
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
