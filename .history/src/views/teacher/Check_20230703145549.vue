<template>
  <div>
    <el-button type="middle" @click="fetchAttendanceData">获取考勤数据</el-button>
    
    <div v-if="attendanceData">
       {{ attendanceData }}
    </div>

  </div>
</template>

<script>
export default {
  name: 'AttendancePage',
  data() {
    return {
      list:[{
         "userId":1,
         "userName":'diid'
         "dateTime":'2019-08-24T14:15:22Z'
      }] 
    };
  },
  mounted() {
    this.fetchAttendanceData();
  },
  methods: {
    fetchAttendanceData() {
      // 向后端发送请求获取考勤数据
      /*this.$axios
        .get('http://43.142.234.223:8080/sign',{
          headers:{
              'token':
'eyJhbGciOiJIUzUxMiJ9.eyJ1c2VySWQiOjExMTExLCJyb2xlIjoiMSIsImV4cCI6MTY4ODg5MDc1OX0.sTAQjtxauCkT4dgQ967lfApgDnFgS2wjmwUC667s6mmp2quIlUGRc2759GRG4IqtlfuU_orRnAoc4VVTyohNWQ'
            }
        })
        .then(response => {
          // 获取考勤数据成功，保存到组件的数据属性中
          this.attendanceData = response.data;
        })
        .catch(error => {
          console.error('获取考勤数据时出错', error);
        });*/
    }
  }
}
</script>
