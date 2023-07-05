<template>
  <div class="about">
    <Layout>
      <template v-slot:aside>
        <el-aside width="200px">
          <!-- 这里是插入到名为 "aside" 的插槽的内容 -->
          <!-- 可以放置导航栏组件或者其他元素 -->
          <p>hi~</p>
          <el-menu class="custom-menu"  @select="handleMenuSelect">
           <el-menu-item index="1" :class="{ 'active': selectedMenu === '1' }">
            <i class="el-icon-edit"></i>选题组队
            </el-menu-item>
           <el-menu-item index="2" :class="{ 'active': selectedMenu === '2' }"><i class="el-icon-view" ></i>在线签到</el-menu-item>
           <el-menu-item index="3" :class="{ 'active': selectedMenu === '3' }" ><i class="el-icon-user-solid"></i>个人中心</el-menu-item>
           <el-menu-item index="4" :class="{ 'active': selectedMenu === '4' }" @click="handleLogout" ><i class="el-icon-circle-close"></i>退出登录</el-menu-item>
          </el-menu>
        </el-aside>
      </template>
      <template v-slot:main>
        <el-main>
          <!-- 这里是插入到名为 "main" 的插槽的内容 -->
          <!-- 可以根据菜单项的索引或标识符判断展示不同的数据 -->
          <div v-if="selectedMenu === '1'">
            
          </div>       
          <div v-else-if="selectedMenu === '2'">
            <!-- 打卡页面 -->
            <Attendace></Attendace>
          </div>
          <div v-else-if="selectedMenu === '3'">
            <!-- 显示个人中心的数据 -->
            <Personal></Personal>
          </div>
          <div v-else-if="selectedMenu === '4'">
            <!-- 显示退出登录的数据 -->
          </div>
        </el-main>
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from "../components/Layout.vue";
import Personal from "../components/Personal.vue";
import Cquestion from "./teacher/Cquestion.vue";
import SearchComponent from "../components/SearchComponent.vue";
import Logout from "../components/Logout.vue";
import Attendace from "./student/Attendace.vue";
i
export default {
  name: "Student",
  components: {
    Layout,
    Personal,
    Cquestion,
    SearchComponent,
    Logout,
    Attendace
  },
  data() {
    return {
      dialogVisible: false, // 弹窗是否可见
      selectedMenu: "1", // 当前选中的菜单项
      questions: [], // 存储生成的题目
      questionName: '',//用于动态获取输入框里的内容
      questionDescription: '',
      questionId:'',
      searchResults: [],//搜索结果列表
      showSearchResults: false ,// 是否展示搜索结果
      hasSearchResults: false
    };
  },
  methods: {
    handleLogout() {
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
    },
    handleSearch(results) {
      if (results.length > 0) {
       this.searchResults = results;
       this.showSearchResults = true;
       } else {
        
       this.showSearchResults = false;
        }
       },

    handleMenuSelect(index) {
      this.selectedMenu = index;
    },
    showCreateQuestionDialog() {
      // 显示弹窗
      this.dialogVisible = true;
    },
    handleDialogClose() {
      // 弹窗关闭时重置输入的内容
      this.questionName = '';
      this.questionDescription = '';
    },
    handleDialogCancel() {
      // 取消按钮点击事件
      this.dialogVisible = false;
    },
    handleDialogConfirm() {
      // 确认按钮点击事件
      // 执行相应的逻辑，例如传递信息
      const questionName = this.questionName;
      const questionDescription = this.questionDescription;
      // 发送网络请求
     /* this.$axios({
           method:'post',
           url:'api//question',
           data:{
            questionName:this. questionName,
            questionDescription:this.questionDescription
           }
           }).then(res=>{
             if(res.data.code==0){
             alert("创建成功")
             this.questionId:res.data.data.questionId
            //在这里要获得后端返回的类型，如果是老师就跳转到老师，如果是学生就跳转到学生
          }
         }).catch(err=>{
            console.log(err)
         })*/
      //扩充题目组件
      const question = {
       questionName: this.questionName,
       questionId: this.questionId
       
     };

     this.questions.push(question);
      //关闭弹窗
      this.dialogVisible = false;
      //重置输入的内容
      this.questionName = '';
      this.questionDescription = '';
    },
    deleteQuestion(index) {
      this.questions.splice(index, 1);
    },
  }
};
</script>

<style>
.cs {
  display: flex;
  height: 100px;
}

.left {
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.right {
  flex: none;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}


.el-button {
  height: 50px;
  width: 100px;
}
.about {
  height: 100%;
  width: 100%;
}.el-menu-item.active {
  background-color: red; /* 设置选中菜单项的背景颜色为红色 */
}.el-menu-item.active {
  background-color: red; /* 设置选中菜单项的背景颜色为红色 */
}
.custom-menu {
  background-color: #DAFFFB; /* 自定义菜单的背景颜色 */
}
.el-menu-item.active {
  background-color: #FFFEC4; /* 设置选中菜单项的背景颜色为红色 */
}
.el-menu-item:hover {
  background-color: #EAB2A0; /* 自定义悬停时的背景颜色 */
}
.el-main {
  padding: 0;
  margin: 0;
}
.el-form-item {
  width:600px;
  height: 100px;
}
form.el-form {
    width: 600px;
    height: auto;
  }
  .el-dialog__header {
    height: 60px; /* 修改为你想要的高度值 */
  }
</style>
