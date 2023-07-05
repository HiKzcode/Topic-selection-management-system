<template>
  <div class="question-wrapper">
    <el-card class="question-card">
      <div class="question-header">
        <!-- 题目名称 -->
        <div class="question-title">{{ questionName }}</div>
      </div>
      <div class="question-actions">
        <div>
          <input type="file" @change="handleFileChange" class="fi" />
          <button @click="uploadFile" class="fb">上传文件</button>
          <button @click="deleteFile" class="fb">删除文件</button>
        </div>
        <!-- 查看详情按钮 -->
        <el-button type="primary" size="small" @click="openDrawer">查看详情</el-button>

        <!-- 删除按钮 -->
        <el-button type="danger" size="small" @click="deleteQuestion">删除</el-button>
      </div>
    </el-card>
    <!-- 抽屉组件 -->
    <el-drawer :visible="drawerVisible" direction="rtl" title="题目详情" :with-header="false" @close="closeDrawer">
      <div class="box1">
        <div class="box2">
          <p>团队名称：</p>
          {{ questionName }}
        </div>
        <div class="box2">
          <p>指导教师:</p>{{ teacherName }}
        </div>
      </div>
      <div class="box3">
        <p class="box3-label">详情信息：</p>
        <div class="box3-content">{{ questionDescription }}</div>
      </div>
    </el-drawer>
  </div>
</template>

<script>
export default {
  name: 'Cquestion',
  props: {
    questionName: {
      type: String,
      required: true,
    },
    questionId: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      labelPosition: 'right',
      drawerVisible: false,
      teacherName: '',
      questionDescription: '',
      selectedFile: null,
    };
  },
  methods: {
    handleFileChange(event) {
      // 获取用户选择的文件
      this.selectedFile = event.target.files[0];
    },
    uploadFile() {
      if (!this.selectedFile) {
        alert('请先选择文件');
        return;
      }
      // 创建 FormData 对象
      const formData = new FormData();
      formData.append('file', this.selectedFile);

      // 发送文件到后端
      this.$axios
        .post(`/api/file`, formData, {
          headers: {
            'token': localStorage.getItem('token'),
          },
          params: {
            questionId: this.questionId,
          },
        })
        .then(response => {
          // 处理上传成功的逻辑
          console.log('文件上传成功');
        })
        .catch(error => {
          // 处理上传失败的逻辑
          console.error('文件上传失败', error);
        });
    },
    deleteQuestion() {
      // 处理删除题目的逻辑
      // 替换为实际的问题ID
      /* axios
        .delete(`/api/question/${this.questionId}`,{
          headers:{
              'token':localStorage.getItem("token")
            }
        })
        .then(response => {
          // 删除成功，进行相应的处理
          console.log('问题已删除');
          
        })
        .catch(error => {
          // 处理删除失败的情况
          console.error('删除问题时出错', error);
        });*/
      this.$emit('questionDeleted');
    },
    // 当点击查看内容的时候做的操作
    openDrawer() {
      this.drawerVisible = true;
      /*this.$axios
       .get('api/teacher',
          { data:{
            questionId:this.questionId
          },
            headers:{
              'token':localStorage.getItem("token")
            }}
       ).then(response=>{
         this.teacherName=response.data.data.teacherName,
         this.questionDescription=response.data.data.questionDescription
       })*/
      this.teacherName = 'zhangsan';
    },
    closeDrawer() {
      this.drawerVisible = false;
    },
  },
};
</script>

<style>
.question-wrapper {
  margin-bottom: 10px;
}

.question-card {
  border: none;
  background-color: #f9f9f9;
}

.question-title {
  font-size: 18px;
  font-weight: bold;
  height: 150px;
  line-height: 150px;
}
.question-text {
  font-size: 16px;
  line-height: 1.5;
}

.question-actions {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100px;
}
.element-button {
  margin-right: 20px;
}
.box-card {
  height: 20%;
}
.box2 {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  border: 1px solid #ccc;
  height: 80px;
  display: flex;
  align-items: center;
}
.box3 {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  border: 1px solid #ccc;
  height: auto;
  display: flex;
  text-align: left; /* 文字左对齐 */
}
.box3-label {
  display: flex;
  line-height: 80px;
  height: 80px;
  width: 200px;
  font-size: 13px;
}
.box3-content {
  display: flex;
  word-break: break-word;
  line-height: 1.5; /* 调整行高 */
}
.fi {
  width: 200px;
}
.fb {
  width: 100px;
  height: 50px;
  background-color: rgba(100, 205, 237, 0.471);
  border-radius: 5px;
  margin-right: 5px;
}
</style>
