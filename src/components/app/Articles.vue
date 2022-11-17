<template>
  <div class="container">
    <!-- 控制栏 -->
    <div class="controller">
      <!-- 添加 -->
      <el-button icon="el-icon-plus" @click="addArticle">添加文章</el-button>
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
            type="primary" icon="el-icon-edit" circle size="small"
            @click="handleEdit(scope.$index,scope.row)"
          ></el-button>
          <el-button
            type="danger" icon="el-icon-delete" circle size="small"
            @click="handleDelete(scope.$index,scope.row)"
          ></el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <div class="pagination">
      <el-pagination
        layout="prev, pager, next"
        :page-size="10"
        :total="totalArticles"
        @current-change="changePage"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: '',
      curPage: 1, // 当前页面
    }
  },
  methods: {
    addArticle() {
      this.$store.dispatch('articles/changeArticleType', 1);
      this.$router.push('/Main/AddArticles');
    },
    handleDelete(index,row) {
      console.log(index,row);
      // 确认删除
      this.$confirm('此操作将永久删除该文章','提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        // vuex中发送del请求删除并更新tableData
        const token = this.$store.getters['token'];
        const id = row.id;
        const payload = {
          token,
          id
        }
        this.$store.dispatch('articles/deleteArticle', payload);
        this.$message({
          type: 'success',
          message: '删除成功！'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消删除!'
        });
      });
    },
    handleEdit(index, row) {
      console.log(index, row);
      this.$store.dispatch('articles/setEditingId', row.id);
      this.$store.dispatch('articles/changeArticleType', 0);
      this.$router.push('/Main/EditArticles');
    },  
    changePage(event) {
      // this.tableData = this.$store.getters['articles/getArticlesList']
      //   .slice((event - 1) * 10, event * 10);
      this.curPage = event;
    },
    closeAddArticles(value) {
      this.addDialogVisible = value;
    },
    closeEditArticles(value) {
      this.editDialogVisible = value;
    }
  },
  computed: {
    searchResult() {
      if (this.search === '') {
        return this.$store.getters['articles/getArticlesList'].slice((this.curPage - 1) * 5, this.curPage * 5);
      } else {
        return this.$store.getters['articles/getArticlesList'].filter( data => {
          return !this.search || data.title.includes(this.search);
        })
      }
    },
    totalArticles() {
      return this.search === '' ? this.$store.getters['articles/getArticlesList'].length : this.searchResult.length;
    }
  },
  async mounted() {
    // 获取token
    const token = this.$store.getters['token'];
    // 发送请求获取文章列表
    await this.$store.dispatch('articles/getArticlesMessage', token);
    // console.log(this.$store.getters['articles/getArticlesList']);
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

.pagination {
  margin-top: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
}

.form_container {
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>