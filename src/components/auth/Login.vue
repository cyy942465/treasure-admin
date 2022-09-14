<template>
  <div class="container">
    <el-form  label-width="80px" label-position="left">
      <div class="title-container">
        <h2>Treasure后台管理系统</h2>
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
      <div class="button-container"> 
        <el-button type="primary" class="submit-button">登录</el-button>
        <el-button type="primary" plain class="submit-button" @click="toggleRegister">注册</el-button>
      </div>
    </el-form>
  </div> 
</template>

<script>
export default {
  emits: ['toggleRegister'],
  data() {
    return {
      formLabelAlign: {
        userEmail: '',
        password: ''
      }
    }
  },
  methods: {
    toggleRegister() {
      this.$emit('toggle-register', 'register');
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

.submit-button {
  width: 6em;
  margin: 0 3em;
}

.button-container {
  display: flex;
  justify-content: space-between;
}

</style>