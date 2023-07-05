<template>
  <div class="search-component">
    <el-input
      v-model="searchQuery"
      placeholder="请输入搜索关键字"
      @keyup.enter="handleSearch"
    />
    <el-button type="primary" @click="handleSearch">搜索</el-button>
  </div>
</template>

<script>
export default {
  name: "SearchComponent",
  data() {
    return {
      searchQuery: "",
    };
  },
  methods: {
    handleSearch() {
      // 执行搜索操作，将搜索结果传递给父组件
      // 这里仅作为示例，你可以根据实际需求进行修改
      const results = this.filterSearchResults(this.searchQuery);
      this.$emit("search", results);
    },
    filterSearchResults(query) {
      // 这里是模拟的搜索过滤逻辑，你需要根据实际需求进行修改
      // 这里仅返回包含搜索关键字的题目名称，你可以根据需要修改成其他的过滤逻辑
      return this.questions.filter(question =>
        question.questionName.includes(query)
      );
    },
  },
  props: {
    questions: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.search-component {
  display: flex;
  align-items: center;
  width: 300px;
}
.search-component > * {
  margin-right: 10px;
}
</style>
