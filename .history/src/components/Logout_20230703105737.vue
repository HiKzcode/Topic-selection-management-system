<template>
  <div>
    <button @click="logout">退出登录</button>
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
          this.$router.push('/');
        })
        .catch(error => {
          console.error('注销用户时出错', error);
        });*/
        this.$router.push('/login');
    }
  }
}
</script>
