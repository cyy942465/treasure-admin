<template>
  <div class="container">
    <el-dialog title="添加管理员账号" :visible.sync="visible" @close="closeDialog" center width="40%">
      <el-form :model="addData" label-position="left" :rules="rules" ref="addForm" label-width="120px">
        <el-form-item label="所有者：" prop="owner">
          <el-input 
          v-model="addData.owner" 
          placeholder="请输入所有者"
          ></el-input>
        </el-form-item>
        <el-form-item label="账号邮箱：" prop="email">
          <el-input 
          v-model="addData.email" 
          placeholder="请输入账号邮箱"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码：" prop="password">
          <el-input 
          v-model="addData.password" 
          placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item label="确认密码：" prop="confirmPassword">
          <el-input 
          v-model="addData.confirmPassword" 
          placeholder="请再次输入密码"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="closeDialog">取 消</el-button>
        <el-button type="primary" @click="handleCommit('addForm')">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: ['addedFormVisible'],
  emits: ['close-addDialog'],
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.addData.password) {
        callback(new Error('两次输入的密码不一致'));
      } else {
        callback();
      }
    };
    return {
      addData: {
        owner: '',
        email: '',
        password: '',
        confirmPassword: ''
      },
      visible: false,
      rules: {
        owner: [
          { required: true, message: '所有者不能为空', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '账号邮箱不能为空', trigger: 'blur' },
          { type: 'email', message: '请输入正确格式的邮箱', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入账号密码', trigger: 'blur' },
          { min: 6, max: 15, message: '密码长度6-15位', trigger: 'blur' }
        ],
        confirmPassword: [
          { required: true, message: '请再次输入账号密码', trigger: 'blur' },
          { validator: validatePass, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleCommit(form) {
      // 校验器
      this.$refs[form].validate((valid) => {
        if (valid) {
          console.log('commit!');
          // 发送数据给后台
          
          // 关闭对话框
          this.closeDialog();
        } else {
          return;
        }
      })
    },
    closeDialog() {
      this.$emit('close-addDialog', false);
    }
  },
  watch: {
    addedFormVisible(value) {
      this.visible = value;
    }
  }
}
</script>

<style scoped>
.el-dialog__body {
  padding: 30px 50px;
}
</style>