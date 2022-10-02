<template>
  <div class="container">
    <div class="logo-container" @click="toHome()">
      <img src="../../assets/logo.png">
      <p>Treasure</p>
    </div>
    <div class="selection-container">
      <el-dropdown trigger="hover" @command="handleCommand">
        <span class="el-dropdown-link">
          我的账号<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="0">账号信息</el-dropdown-item>
          <el-dropdown-item command="1">退出登录</el-dropdown-item>
          <el-dropdown-item command="2">注销账号</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleCommand(command) {
      if (command === '0') {
        this.$router.push("/Main/Home");
      } else if (command === '1') {
        this.logout();
      } else if (command === '2') {
        this.$message("还未完成，但是我们强烈建议你别这么做！");
      }
    },
    logout() {
      this.$store.dispatch('userLogout');
      // console.log(this.$store.getters.token);
      this.$router.replace('/');
    },
    toHome() {
      this.$router.push('/Main/Home');
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
}
.container {
  position: fixed;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3em;
  border-bottom: 1px solid #CFD8DC;
  box-shadow: 0 1px 2px #CFD8DC;
  background-color: white;
  z-index: 3;
}

.logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.el-dropdown-link {
    cursor: pointer;
}

img {
  width: 4em;
  height: 4em;
}

p {
  display: inline;
  font-family: "PingFang SC";
  font-size: 20px;
}

</style>