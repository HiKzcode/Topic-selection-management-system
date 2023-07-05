<template>
  <div>
    <i class="el-icon-thumb"></i>
    <el-button type="text" @click="handleCheckIn">点击签到</el-button>
   <el-dialog
    title="签到结果"
    :visible.sync="dialogVisible"
    width="50%"
    :before-close="handleClose">
    <span>签到成功</span>
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
     // 控制签到成功弹窗的显示
      dialogVisible: false,
      message:''
    };
  },
  methods: {

    handleCheckIn() {
      // 执行打卡逻辑，例如与后端通信获取打卡凭证
      // 假设后端返回的数据中有一个字段 success 表示是否签到成功
      const success = true; // 假设打卡成功
      this.$axios.post('api/sign',{
         Headers:{'token':}
      }
         
      )
      // 根据后端返回的结果显示签到成功弹窗
      if (success) {
        this.dialogVisible = true;
      }
    },
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
