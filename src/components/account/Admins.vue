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
            type="primary" icon="el-icon-edit" circle
            @click="handleEdit(scope.$index, scope.row)"></el-button>
          <el-button
            type="danger" icon="el-icon-delete" circle
            @click="handleDelete(scope.$index, scope.row)"></el-button>
        </template>
      </el-table-column>
    </el-table> 
    <!-- 修改表单 -->
    <el-dialog title="修改密码" :visible.sync="updatedFormVisible" >
      <el-form :model="updateData" label-position="left">
        <el-form-item label="新密码" prop="newPassword">
          <el-input 
          v-model="updateData.newPassword" 
          placeholder="请输入新密码"
          ></el-input>
        </el-form-item>
        <el-form-item label="确认新密码" prop="confirmPassword">
          <el-input 
          v-model="updateData.confirmPassword" 
          placeholder="请再次输入新密码"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="updatedFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="updatedFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 添加表单 -->
    <el-dialog title="添加管理员账号" :visible.sync="addedFormVisible">
      <el-form :model="addData" label-position="left">
        <el-form-item label="所有者" prop="owner">
          <el-input 
          v-model="addData.owner" 
          placeholder="请输入所有者"
          ></el-input>
        </el-form-item>
        <el-form-item label="账号邮箱" prop="email">
          <el-input 
          v-model="addData.email" 
          placeholder="请输入账号邮箱"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input 
          v-model="addData.password" 
          placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="confirmPassword">
          <el-input 
          v-model="addData.confirmPassword" 
          placeholder="请再次输入密码"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addedFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="addedFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [{ // 用于接收vuex中的数据
        index: 1,
        name: 'admin',
        email: '123456',
        password: '123456'
      }],
      updateData: {
        newPassword: '',
        confirmPassword: ''
      },
      addData: {
        owner: '',
        email: '',
        password: '',
        confirmPassword: ''
      },
      search: '',
      updatedFormVisible: false,
      addedFormVisible: false
    }
  },
  methods: {
    handleEdit(index, row) {
      console.log(index,row);
      this.updatedFormVisible = true;
      // 获取表单中的数据

      // 发送请求修改数据库中的数据
    },
    handleDelete(index, row) {
      console.log(index, row);
      // 发送del请求从数据库中删除账号
      // vuex中删除并更新tableData
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