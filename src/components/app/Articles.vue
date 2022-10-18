<template>
  <div class="container">
    <!-- 控制栏 -->
    <div class="controller">
      <!-- 添加 -->
      <el-button icon="el-icon-plus" @click="dialogVisible = true">添加文章</el-button>
      <!-- 对话框（添加） -->
      <el-dialog title="添加文章信息" :visible.sync="dialogVisible" width="50%" center>
        <div class="form_container">
          <el-form :model="addData">
            <el-form-item label="文章编号" prop="id">
              <el-input placeholder="请输入文章编号" v-model="addData.id"></el-input>
            </el-form-item>
          </el-form>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary">确 定</el-button>
        </span>
      </el-dialog>
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
    <!-- 分页 -->
    <div class="pagination">
      <el-pagination
        layout="prev, pager, next"
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
      tableData: [],
      search: '',
      dialogVisible: false,
      addData: {
        id: '',
        title: '',
        author: ''
      }
    }
  },
  methods: {
    handleDelete(index,row) {
      console.log(index,row);
      // 确认删除
      this.$confirm('此操作将永久删除该文章','提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        // vuex中发送del请求删除并更新tableData
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
    changePage(event) {
      this.tableData = this.$store.getters['articles/getArticlesList']
        .slice((event - 1) * 10, event * 10);
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
    },
    totalArticles() {
      return this.tableData.length;
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