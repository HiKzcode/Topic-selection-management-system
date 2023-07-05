<template>
   
  <div class="container1">
       <form action="">
            <div class="title">
              个人中心
            </div>
              <div class="item">
               <label> 学工号：  </label>
               <input type="text" v-model="userId" :disabled="isActive">
             </div> 
              <div class="item"> 
               <label>用户名：</label>
               <input type="text"  v-model="userName" :disabled="isActive">
               <!-- v-model把输入的值传输给name变量 -->
             </div>     
             <div class="item">
               <label style="color: azure; margin-right:20px  ma;">详情:</label>
               <textarea v-model="description" :disabled="isActive"></textarea>
             </div>   
             <div class="button-container">
                 <button @click="change" type="button">修改</button>
                 <button @click="Put" type="button">保存</button>
</div>
       </form>      
   </div>  

</template>

<script>

 export default{
  name:'user',
  data(){
    
     return{ 
        isActive: true,
        userId:'',
        userName:'',
        description:''

     }
  },
  created(){
      this.getinfo()
    },

  methods:{
     getinfo(){
      this.$axios({
          url:'/user/info',
          methods:'get',
          headers:{
              'token':localStorage.getItem("token")
            },
        }).then(res=>{
            console.log(res)
            
               this.userName=res.data.data.userName
               this.userId=res.data.data.userId
               this.description=res.data.data.description
              console.log('cheng')
              })
     },
      change(){
          this.isActive= false,
          alert("点击修改后，请输入要改的内容，修改后需要点击保存按钮")
      },  
      Put (){
        this.isActive= true,
         this.$axios({
           method:'put',
           url:'/user',
           headers:{
              'token':localStorage.getItem("token")
            },
           data:{
              userId:this.userId,
              userName:this.userName,
              description:this.description
           }
         }).then(res=>{
            if(res.data.code==200){
              alert('已经修改成功了')
            }
         }) 
      }
  },
 
}
</script>

<style>
  .container1{
      display: flex;
       width:100%;

      /*align-items: center;*/
      justify-content: center;
      height: 650px;
      background-image:url(../assets/img/login.png);
      background-size: cover;
     background-repeat: no-repeat;
    }
   
    form{
     width: 50%;
     height: 600px;
     border:1px solid #e4e4e4;
     color: #000;
     text-align: center;
     margin-top: 20px;
     border-radius: 5px;
    }
    .title{
     font-size: 30px;
    }
   .item
    {
     width: 100%;
     height: 45px;
     line-height: 35px;
     margin-top: 20px;
    }
    .item input{
     font-size: 14px;
     width: 60%;
     height: 35;
     line-height: 25px;
     border: 1px solid #DADADA;
     color: #3c3737;
     font-size: 15px;
     box-shadow: inset 0px 1px 4px #ECECEC;
     
    }
    .item textarea {
     font-size: 14px; 
      width: 60%;
      min-height: 95px;
      max-height: 300px;
      line-height: 25px;
      border: 1px solid #DADADA;
     color: #3c3737;
     font-size: 15px;
     box-shadow: inset 0px 1px 4px #ECECEC;
     resize: vertical; /* 允许垂直调整高度 */
      overflow: auto;
      margin-right: 2%;
      margin-top: 25px;
    }



    .button-container {
      display: flex;
      justify-content: center; /* 水平居中对齐 */
      align-items: center; /* 垂直居中对齐 */
      margin-top: 25%;
      height: 50px;
      width: 280px;
      margin-left: auto;
      margin-right: auto;
   }
   .button-container button {
  width: 25%;
  height: 50px;
  background-color: rgb(186, 225, 225);
  border-radius: 5px;
  margin: 0 5px; /* 创建按钮之间的间距 */
}

.button-container button:hover {
  background-color: rgba(100, 205, 237, 0.71);
}
  
</style>