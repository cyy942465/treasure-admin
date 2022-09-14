<template>
  <div class="container">
    <el-form  label-width="80px" label-position="left">
      <div class="title-container">
        <h2>注册管理员账号</h2>
      </div>
      <el-form-item label="邮箱">
        <el-input 
          v-model="formLabelAlign.userEmail"
          placeholder="请输入邮箱账号"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input 
          v-model="formLabelAlign.password" 
          placeholder="请输入密码" 
          show-password
        ></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input 
          v-model="formLabelAlign.confirmPassword" 
          placeholder="请再次输入密码" 
          show-password
        ></el-input>
      </el-form-item>
      <div class="button-container"> 
        <el-button type="primary" @click="toggleLogin"> 完成注册 </el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  emits: ['toggleLogin'],
  data() {
    return {
      formLabelAlign: {
        userEmail: '',
        password: '',
        confirmPassword: ''
      }
    }
  },
  methods: {
    toggleLogin() {
      // 表单验证
      // 发送请求
      this.$emit('toggle-login','login');
    }
  }
}
</script>

<style scoped>
.container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  padding: 2em;
  width: 25em;
  background-color: white;
  border: 1px;
  border-radius: 1em;
  box-shadow: 4px 8px 4px #B0BEC5;
}
.title-container {
  margin-bottom: 2em;
}
.button-container {
  display: flex;
  justify-content: center;
  align-content: center;
}

.submit-button {
  width: 6em;
}

</style>