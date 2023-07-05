<template>
  <div>
    <div>考勤情况</div>
    <el-table :data="list" style="width: 100%">
      <el-table-column prop="userId" label="学号"></el-table-column>
      <el-table-column prop="userName" label="学生名"></el-table-column>
      <el-table-column label="签到时间">
        <template slot-scope="{ row }">
          {{ row.dateTime || '缺勤' }}
        </template>
      </el-table-column>
    </el-table>
    <el-table :data="summaryData" :show-header="true" :footer-row-class-name="['summary-row']">
      <el-table-column label="应到人数">
        <template slot-scope="{ row }">
          {{ row.total }}
        </template>
      </el-table-column>
      <el-table-column label="实到人数">
        <template slot-scope="{ row }">
          {{ row.present }}
        </template>
      </el-table-column>
      <el-table-column label="未到人数">
        <template slot-scope="{ row }">
          {{ row.absent }}
        </template>
      </el-table-column>
    </el-table>
  
  </div>
</template>

<script>
export default {
  name: 'AttendancePage',
  data() {
    return {
      list:[{
         "userId":1,
         "userName":'diid',
         "dateTime":'2019-08-24T14:15:22Z'
      },{
        "userId":2,
         "userName":'diid',
         "dateTime":'2019-08-24T14:15:22Z'
      },{
        "userId":3,
         "userName":'diid',
         "dateTime":''
      }
    ],
    };
  },
  computed: {
    summaryData() {
      const total = this.attendanceData.length;
      const present = this.attendanceData.filter(item => item.dateTime !== '').length;
      const absent = total - present;

      return [
        {
          total,
          present,
          absent
        }
      ];
    }
  }
  mounted() {
    this.fetchAttendanceData();
  },
  methods: {
    fetchAttendanceData() {
      // 向后端发送请求获取考勤数据
      /*this.$axios
        .get('http://43.142.234.223:8080/sign',{
          headers:{
              'token':localStorage.getItem("token")
            }
        })
        .then(response => {
          // 获取考勤数据成功，保存到组件的数据属性中
          this.list= response.data;
        })
        .catch(error => {
          console.error('获取考勤数据时出错', error);
        });*/
    }
  }
}
</script>
<style scoped>
.low-header-row {
  height: 30px; /* 调整表格头部行的高度为 30px */
}
.summary-row {
  background-color: #f5f7fa; /* 设置底部行的背景色 */
  font-weight: bold; /* 设置底部行的字体加粗 */
  height: 10px
}
</style>