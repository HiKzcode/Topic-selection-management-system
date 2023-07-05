<template>
  <div class="search-component">
    <el-input
      v-model="searchQuery"
      placeholder="请输入关键词进行搜索"
      @keyup.enter="handleSearch"
      clearable
    ></el-input>
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
      const results = this.questions.filter((question) =>
        question.questionName.includes(this.searchQuery)
      );
      this.$emit("search", results);
    }
  }
};
</script>

<style scoped>
.search-component {
  margin-bottom: 20px;
}
</style>
