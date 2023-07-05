<template>
  <div>
    <el-button type="middle" @click="fetchAttendanceData">获取考勤数据</el-button>

    <div v-if="attendanceData">
      <ul>
        <li v-for="record in attendanceData" :key="record.id">
          {{ record.name }} - {{ record.status }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AttendancePage',
  data() {
    return {
      attendanceData: null
    };
  },
  mounted() {
    this.fetchAttendanceData();
  },
  methods: {
    fetchAttendanceData() {
      // 向后端发送请求获取考勤数据
      this.$axios
        .get('43/sign')
        .then(response => {
          // 获取考勤数据成功，保存到组件的数据属性中
          this.attendanceData = response.data;
        })
        .catch(error => {
          console.error('获取考勤数据时出错', error);
        });
    }
  }
}
</script>
