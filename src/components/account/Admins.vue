<template>
  <div class="container">
    <div class="add_button">
      <el-button icon="el-icon-plus"> 添加管理员账号</el-button>
    </div>
    <el-table style="width: 100%" :data="tableData">
      <el-table-column label="-" prop="index" align="center" width="20"></el-table-column>
      <el-table-column label="所有者" prop="name" align="center"></el-table-column>
      <el-table-column label="账号邮箱" prop="email" align="center"></el-table-column>
      <el-table-column label="密码" prop="password" align="center"></el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button
            type="primary" icon="el-icon-edit" circle
            @click="handleEdit(scope.$index, scope.row)"></el-button>
          <el-button
            type="danger" icon="el-icon-delete" circle
            @click="handleDelete(scope.$index, scope.row)"></el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [{
        index: 1,
        name: 'admin',
        email: '123456',
        password: '123456'
      }],
      search: ''
    }
  },
  methods: {
    handleEdit(index, row) {
      console.log(index,row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
}
</script>

<style scoped>
.container {
  margin-top: 2em;
  padding-left: 1em;
}

.add_button {
  margin-bottom: 1em;
}
</style>