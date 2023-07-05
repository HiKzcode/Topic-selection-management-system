<template>
  <div>
    <!-- 显示所有队伍和题目 -->
    <div v-for="team in teams" :key="team.id">
      <h3>{{ team.name }}</h3>
      <p>{{ team.topic }}</p>
      
      <!-- 加入组队按钮 -->
      <button @click="joinTeam(team.id)">加入组队</button>
      
      <!-- 查看队伍文档按钮 -->
      <button @click="viewTeamDocument(team.id)">查看队伍文档</button>
      
      <!-- 下载文件按钮 -->
      <button @click="downloadFile(team.fileId)">下载文件</button>
    </div>
    
    <!-- 创建队伍表单 -->
    <h3>创建队伍</h3>
    <form @submit.prevent="createTeam">
      <input type="text" v-model="newTeamName" placeholder="队伍名称" required>
      <input type="text" v-model="newTeamTopic" placeholder="选题名称" required>
      <button type="submit">创建</button>
    </form>
    
    <!-- 提交文档表单 -->
    <h3>提交文档</h3>
    <form @submit.prevent="submitDocument">
      <input type="file" v-model="documentFile" required>
      <button type="submit">提交</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      teams: [], // 存储所有队伍的数据
      newTeamName: '', // 创建队伍时的队伍名称
      newTeamTopic: '', // 创建队伍时的选题名称
      documentFile: null, // 提交文档时的文件对象
    };
  },
  mounted() {
    // 获取所有队伍的数据
    this.fetchTeams();
  },
  methods: {
    fetchTeams() {
      // 从后端获取所有队伍的数据，并赋值给 teams
      // 可以使用适合您的网络请求库发送请求
      // 示例代码:
      // this.$axios.get('/api/teams')
      //   .then(response => {
      //     this.teams = response.data;
      //   })
      //   .catch(error => {
      //     console.error(error);
      //   });
    },
    joinTeam(teamId) {
      // 执行加入组队逻辑
      // 可以向后端发送加入队伍的请求，并根据后端返回的结果进行相应操作
    },
    viewTeamDocument(teamId) {
      // 执行查看队伍文档逻辑
      // 可以在前端弹出模态框或导航到另一个页面来展示队伍文档的内容
    },
    downloadFile(fileId) {
      // 执行下载文件逻辑
      // 可以通过前端下载文件的方式，向后端发送下载文件的请求，并根据后端返回的文件数据进行下载操作
    },
    createTeam() {
      // 执行创建队伍逻辑
      // 可以向后端发送创建队伍的请求，并根据后端返回的结果进行相应操作
    },
    submitDocument() {
      // 执行提交文档逻辑
      // 可以向后端发送提交文档的请求，并根据后端返回的结果进行相应操作
    },
  },
};
</script>
