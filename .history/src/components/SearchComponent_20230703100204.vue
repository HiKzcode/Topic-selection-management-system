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
      this.$axios
        .get("/api/questions", {
          params: {
            searchQuery: this.searchQuery
          }
        })
        .then((response) => {
          const results = response.data.data;
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
  width: 100px;
}
.right{
  width: 100px;

}
</style>
