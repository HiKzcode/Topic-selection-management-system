<template>
  <div>
    <!--<el-button @click="handleCheckIn">在线签到</el-button>
    <el-dialog v-if="showSuccessDialog" title="签到成功" @close="handleDialogClose">
      <p>恭喜您，签到成功！</p>
    </el-dialog>-->
    <el-button type="text" @click="handleCheckIn">点击签到</el-button>

<el-dialog
  title="提示"
  :visible.sync="dialogVisible"
  width="30%"
  :before-close="handleClose">
  <span>这是一段信息</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
</el-dialog>

  </div>
</template>

<script>
export default {
  data() {
    return {
      showSuccessDialog: false, // 控制签到成功弹窗的显示
      dialogVisible: false
    };
  },
  methods: {
    /*handleCheckIn() {
      // 执行打卡逻辑，例如与后端通信获取打卡凭证
      // 假设后端返回的数据中有一个字段 success 表示是否签到成功
      const success = true; // 假设打卡成功
      // 根据后端返回的结果显示签到成功弹窗
      if (success) {
        this.showSuccessDialog = true;
      }
      console.log(success);
      console.log(this.showSuccessDialog)
    },
    handleDialogClose() {
      // 关闭签到成功弹窗时的逻辑
      this.showSuccessDialog = false;
    },*/
    handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
  }
};
</script>
