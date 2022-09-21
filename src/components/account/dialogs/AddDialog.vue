<template>
  <div class="container">
    <el-dialog title="添加管理员账号" :visible.sync="visible" :close-on-click-modal="false" :show-close="false">
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
        <el-button @click="handleCommit">取 消</el-button>
        <el-button type="primary" @click="handleCommit">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: ['addedFormVisible'],
  emits: ['close-addDialog'],
  data() {
    return {
      addData: {
        owner: '',
        email: '',
        password: '',
        confirmPassword: ''
      },
      visible: false
    }
  },
  methods: {
    handleCommit(event) {
      this.visible = false;
      this.$emit('close-addDialog', this.visible);

      // 发送数据到后台
      if (event.target.innerHTML === '确 定') {
        console.log('commit!');
      }
    }
  },
  created() {
    this.visible = this.addedFormVisible;
  }
}
</script>