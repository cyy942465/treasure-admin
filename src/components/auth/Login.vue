<template>
  <div class="container">
    <el-form ref="loginForm" label-width="80px" label-position="left" :rules="rules" :model="formLabelAlign">
      <div class="title-container">
        <h2>Treasure后台管理系统</h2>
      </div>
      <el-form-item label="邮箱" prop="userEmail">
        <el-input 
          v-model="formLabelAlign.userEmail"
          placeholder="请输入邮箱账号"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input 
          v-model="formLabelAlign.password" 
          placeholder="请输入密码" 
          show-password
        ></el-input>
      </el-form-item>
      <div class="button-container"> 
        <el-button type="primary" class="submit-button" @click="submitForm('loginForm')">登录</el-button>
        <el-button type="primary" plain class="submit-button" @click="toggleRegister" disabled>注册</el-button>
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
      },
      rules: {
        userEmail: [
          // { type: 'email', required: true, message: '请输入正确的邮箱账号', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur'},
          { min: 6, max: 15 , message: '密码长度6-15位', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    toggleRegister() {
      this.$emit('toggle-register', 'register');
    },
    submitForm(form) {
      this.$refs[form].validate(async (valid) => {
        if (valid) {
          const actionsPayload = {
            username: this.formLabelAlign.userEmail,
            password: this.formLabelAlign.password
          };
          // 提交请求
          await this.$store.dispatch('userLogin', actionsPayload);
          // console.log(this.$store.getters['token']);
          // 页面跳转
          if (this.$store.getters['token']) {
            // 有token登录成功，页面跳转
            this.$router.push('/Main');
          } else {
            // 没有token，登录失败
            this.$message({
              showClose: true,
              type: 'error',
              message: '密码错误或账号不存在，请重新输入'
            })
          }

        } else {
          return ;
        }
      })
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
  box-shadow: 2px 4px 4px #B0BEC5;
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