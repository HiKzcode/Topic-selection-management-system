<template>
    
  <div class="container">
      <form action="">
           <div class="title">Login</div>
           <div class="item">
              <label>学工账号：</label>
              <input type="text"  v-model="userId" placeholder="请输入学工账号">
              <!-- v-model把输入的值传输给name变量 -->
            </div>
            <div class="item">
              <label >密码:</label>
              <input type="password" v-model="password" placeholder="请输入密码">
            </div>   <!-- v-on点击按钮触发Admin方法 -->
          <div class="item">
             <button @click="Admin" type="button">登录</button>
          </div>  
      </form>      
  </div>
</template>
 
<script>
export default{
  name:'login',
  data(){
    return{
       userId:'',
       password:'',
    }
  },
  created(){   
       },           
 methods:{
    //点击登录
    
    /*Admin(){
      this.$axios({
           method:'post',
           url:'http://43.142.234.223:8080/login',
           data:{
             userId:this.userId,
             password:this.password
           }
           }).then(res=>{
             if(res.data.code==200){
             alert("登录成功")
             console.log(res.data.data)
             localStorage.setItem("token",res.data.token)
             //在这里要获得后端返回的类型，如果是老师就跳转到老师，如果是学生就跳转到学生*/ 
              /* if(res.data.data.role=="1")
               this.$router.push('/studentview')
             else this.$router.push('/teacherview')  
            }else if(res.data.code==406){
              alert("用户不存在")
           }else if(res.data.code==407){
              alert("密码错误")
           }
       }).catch(err=>{
            console.log(err)
       })
    }*/
   
  }
 }
 
</script>

<style>
   .container{
     display: flex;
      width: 100%;
      height: 650px;
      background-image:url(../assets/img/login.png);
      background-size: cover;
     background-repeat: no-repeat;
     /*align-items: center;*/
     justify-content: center;
   }

   form{
    width: 400px;
    height: 300px;
    background-color: rgba(247,247,247,.3);
    border:1px solid #e4e4e4;
    color: #000;
    text-align: center;
    margin-top: 100px;
    border-radius: 50px;
   }
   .title{
    font-size: 30px;
   }
   .item {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 35px;
  line-height: 35px;
  margin-top: 40px;
}
.item label {
  flex: 1;
  text-align: right;
  padding-right: 10px;
  font-size: 13px;
  margin-left: 10px; /* 调整左边距 */
}
   .item input{
    width: 60%;
    height: 35px;
    line-height: 35px;
    border: 1px solid #DADADA;
    color: #888;
    font-size: 12px;
    box-shadow: inset 0px 1px 4px #ECECEC;
    border-radius: 5px;
    margin-right: 15px;
    
   }
   .item button{
      width: 50%;
      height: 50px;
      background-color: rgba(100, 205, 237, 0.471);
      border-radius: 5px;
   }
 
   
</style>