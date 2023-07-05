<template>
  <div class="search-component">
    <el-input
      v-model="searchQuery"
      placeholder="请输入关键词进行搜索"
      clearable
      class="left"
      :style="{ width: '400px', height: '40px' }"
    ></el-input>
    <el-button class="right" 
    @click="handleSearch"
    :style="{ width: '100px', height: '40px' }" >搜索</el-button>
  </div>
</template>

<script>
export default {
  name: "SearchComponent",
  props: {
    questions: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      searchQuery: ""
    };
  },
  methods: {
    handleSearch() {
      // 发送搜索请求到后端，获取题目列表
      this.$axios({
			 method:'get',
			 url:'/question',
			 headers:{
           'token':localStorage.getItem("token")
          },
          params: {
            searchQuery: this.searchQuery
          },
		   }).then(request=>{
        if(request.data.code==403)
        {
           alert("无权访问")
        }
        else if(request.data.code==200){
          console.log(request.data)
          console.log(request.data.data)
          const requestList=request.data.data
			    this.questionlist=requestList.map(question=>({
            questionName:question.questionName,
            questionId:question.questionId
          }))
          console.log(this.questionlist)
        }
	  	 })

          params: {
            searchQuery: this.searchQuery
          },
          headers:{
          'token':localStorage.getItem("token")
          }
        })
        .then((res) => {
          console.log(res.data.data)
          const results = res.data.data;
          this.$emit("search", results);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }
};
</script>

<style>
.search-component {
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  width: 600px;
  padding-left :200px ;
} 
.left {
  margin-right: 10px;
  flex: 1;
  width: 100px;
}
.right{
  flex: 1;
  width: 100px;

}
</style>
