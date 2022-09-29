<template>
  <div class="container">
    <!-- 搜索框 -->
    <div class="search">
      <el-input 
        v-model="search" 
        placeholder="搜索用户账号"
        prefix-icon="el-icon-search"
      ></el-input>
    </div>
    <!-- 表格 -->
    <el-table
      style="width: 100%"
      :data="searchResult"
    >
      <el-table-column label="-" prop="index" align="center" width="40"></el-table-column>
      <el-table-column label="用户账号" prop="email" align="center"></el-table-column>
      <el-table-column label="用户昵称" prop="username" align="center"></el-table-column>
      <el-table-column 
        label="账号状态" 
        prop="status" 
        align="center"
        :filters="[{ text: '正常', value: '正常' }, { text: '异常', value: '异常' }]" 
        :filter-method="filterTag" 
        filter-placement="bottom-end"
      >
        <template slot-scope="scope">
          <el-tag
            size="mini"
            :type="scope.row.status === '正常' ? 'primary' : 'danger'"
          >{{ scope.row.status }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="积分" prop="scores" align="center"></el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button 
          type="danger" icon="el-icon-delete" circle size="mini"
          @click="handleDelete(scope.$index, scope.row)"
          ></el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页栏 -->
    <div class="pagination">
      <el-pagination
        layout="prev, pager, next"
        :total="totalUser"
        @current-change="changePage"
        >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      search: '',
    }
  },
  methods: {
    handleDelete(index, row) {
      console.log(index,row);
    },
    filterTag(value, row) {
      return row.status === value;
    },
    changePage(event) { 
      // event为当前页面的页数
      console.log(event);
      this.tableData = 
        this.$store.getters['users/getUsers']
        .slice((event - 1) * 10, event * 10 > this.totalUser ? this.totalUser + 1 : event * 10);
    }
  },
  computed: {
    searchResult() {
      if (this.search === '') {
        return this.tableData;
      } else {
        return this.$store.getters['users/getUsers'].filter( data => {
          return !this.search || data.email.includes(this.search);
        })
      }
      // return this.tableData.filter( data => {
      //   return !this.search || data.email.includes(this.search);
      // })
    },
    totalUser() {
      if (this.search === '') {
        return this.$store.getters['users/getUsers'].length;
      } else {
        return this.searchResult.length;
      }
    }
  },
  async mounted() {
    // 获取token
    const token = this.$store.getters['token'];
    // console.log('token：' + token);
    // 发送请求获取用户列表
    await this.$store.dispatch('users/getUsers',token);
    // console.log(this.$store.getters['users/getUsers']);
    // 更新用户列表
    this.tableData = this.$store.getters['users/getUsers'].slice(0,10);
  }
}
</script>

<style scoped>
.container {
  margin-top: 2em;
  padding-left: 1em;
}

.search {
  margin-bottom: 1em;
}

.el-input {
  width: 14em;
}

.pagination {
  margin-top: 1em;
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>