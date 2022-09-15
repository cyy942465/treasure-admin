<template>
  <div class="background">
    <Login v-if="isLogin" @toggle-register="changeState"></Login>
    <Register v-else @toggle-login="changeState"></Register>
  </div>
</template>

<script>
import Login from '../components/auth/Login.vue';
import Register from '../components/auth/Register.vue';
export default {
  data() {
    return {
      state: 'login' // 用于进行登录和注册组件的转换
    }
  },
  methods: {
    changeState(state) {
      this.state = state;
    }
  },
  computed: {
    isLogin() {
      return this.state === 'login';
    }
  },
  components: { 
    Login,
    Register 
  }
}
</script>

<style scoped>
.background {
  width: 100%;
  height: calc(100vh);
  background-image: url('../assets/auth-background.jpg');
  background-size: cover;
  z-index: -1;
}

.background::after {
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: inherit;
  filter: blur(5px);
  z-index: 0;
}
</style>

