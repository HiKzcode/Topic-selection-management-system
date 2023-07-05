<template>
  <div>
    <el-button @click="handleCheckIn">在线签到</el-button>
    <el-dialog v-if="showSuccessDialog" title="签到成功" @close="handleDialogClose">
      <p>恭喜您，签到成功！</p>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showSuccessDialog: false, // 控制签到成功弹窗的显示
    };
  },
  methods: {
    handleCheckIn() {
      // 执行打卡逻辑，例如与后端通信获取打卡凭证
      // 假设后端返回的数据中有一个字段 success 表示是否签到成功
      const success = true; // 假设打卡成功
      // 根据后端返回的结果显示签到成功弹窗
      if (success) {
        this.showSuccessDialog = true;
      }
      console.log('success'),
      console.log('show')
    },
    handleDialogClose() {
      // 关闭签到成功弹窗时的逻辑
      this.showSuccessDialog = false;
    },
  },
};
</script>
