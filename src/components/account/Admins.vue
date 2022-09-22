<template>
  <div class="container">
    <div class="add_button">
      <el-button icon="el-icon-plus" @click="addedFormVisible = true"> 添加管理员账号</el-button>
    </div>
    <el-table style="width: 100%" :data="tableData">
      <el-table-column label="-" prop="index" align="center" width="20"></el-table-column>
      <el-table-column label="所有者" prop="name" align="center"></el-table-column>
      <el-table-column label="账号邮箱" prop="email" align="center"></el-table-column>
      <el-table-column label="密码" prop="password" align="center"></el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button
            type="primary" icon="el-icon-edit" circle size="mini"
            @click="handleEdit(scope.$index, scope.row)"></el-button>
          <el-button
            type="danger" icon="el-icon-delete" circle size="mini"
            @click="handleDelete(scope.$index, scope.row)"></el-button>
        </template>
      </el-table-column>
    </el-table> 
    <!-- 修改表单 -->
    <update-dialog
      v-if="updatedFormVisible"
      :updatedFormVisible="updatedFormVisible"
      :index="index"
      :row="row"
      @close-updateDialog="closeUpdate"
    ></update-dialog>
    <!-- 添加表单 -->
    <add-dialog
      v-if="addedFormVisible"
      :addedFormVisible="addedFormVisible"
      @close-addDialog="closeAdd"
    ></add-dialog>
  </div>
</template>

<script>
import UpdateDialog from './dialogs/UpdateDialog.vue';
import AddDialog from './dialogs/AddDialog.vue';
export default {
  components: {
    UpdateDialog,
    AddDialog
  },
  data() {
    return {
      tableData: [{ // 用于接收vuex中的数据
        index: 1,
        name: 'admin',
        email: '123456',
        password: '123456'
      }],
      search: '',
      updatedFormVisible: false,
      addedFormVisible: false,
      index: '',
      row: null
    }
  },
  methods: {
    handleEdit(index, row) {
      console.log(index,row);
      this.updatedFormVisible = true;
      this.index = index;
      this.row = row;
    },
    handleDelete(index, row) {
      console.log(index, row);
      // 发送del请求从数据库中删除账号
      // vuex中删除并更新tableData
    },
    closeUpdate(value) {
      this.updatedFormVisible = value;
    },
    closeAdd(value) {
      this.addedFormVisible = value;
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