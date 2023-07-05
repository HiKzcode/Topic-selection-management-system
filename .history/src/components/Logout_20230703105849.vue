<template>
  <div>
    <el-button  @click="logout" type="primary" plain>退出登录</el-button>
    <button @click="logout"></button>
  </div>
</template>

<script>
export default {
  name: 'LogoutButton',
  methods: {
    logout() {
      // 向后端发送请求注销用户
      /*this.$axios
        .post('/api/logout', null, {
          headers: {
            headers:{
              'token':localStorage.getItem("token")
            }
          }
        })
        .then(() => {
          // 注销成功，清除本地存储的令牌信息
          localStorage.removeItem('token');

          // 导航到登录页
          this.$router.push('/login');
        })
        .catch(error => {
          console.error('注销用户时出错', error);
        });*/
        this.$router.push('/');
    }
  }
}
</script>
