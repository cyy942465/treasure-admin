<template>
  <div class="container">
    <!-- 控制栏 -->
    <div class="controller">
      <!-- 添加 -->
      <el-button icon="el-icon-plus">添加文章</el-button>
      <!-- 搜索框 -->
      <el-input 
        v-model="search" 
        placeholder="搜索文章标题"
        prefix-icon="el-icon-search"
        class="search_input"
      ></el-input>
    </div>
    <!-- 表格 -->
    <el-table :data="searchResult" border>
      <el-table-column label="序号" width="50" align="center" prop="id"></el-table-column>
      <el-table-column label="标题" align="center" prop="title"></el-table-column>
      <el-table-column label="出版社" width="160" align="center" prop="author"></el-table-column>
      <el-table-column label="喜欢" width="110" align="center" prop="likeNum"></el-table-column>
      <el-table-column label="不喜欢" width="110" align="center" prop="dislikeNum"></el-table-column>
      <el-table-column label="发表时间" width="250" align="center" prop="createTime"></el-table-column>
      <el-table-column label="操作" width="152" align="center">
        <template slot-scope="scope">
          <el-button
            type="danger" icon="el-icon-delete" circle size="small"
            @click="handleDelete(scope.$index,scope.row)"
          ></el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      search: ''
    }
  },
  methods: {
    handleDelete(index,row) {
      console.log(index,row);
    }
  },
  computed: {
    searchResult() {
      if (this.search === '') {
        return this.tableData;
      } else {
        return this.tableData.filter( data => {
          return !this.search || data.title.includes(this.search);
        })
      }
    }
  },
  async mounted() {
    // 获取token
    const token = this.$store.getters['token'];
    // 发送请求获取文章列表
    await this.$store.dispatch('articles/getArticlesMessage', token);
    // console.log(this.$store.getters['articles/getArticlesList']);
    // 更新视图
    this.tableData = this.$store.getters['articles/getArticlesList'];
  }
}
</script>

<style scoped>
.container {
  margin-left: 1em;
  margin-top: 1.5em;
}
.controller {
  margin: 1em 0;
  display: flex;
  justify-content: space-between;
}
.search_input {
  width: 20em;
}
</style>