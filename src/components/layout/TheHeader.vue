<template>
  <div class="container">
    <div class="logo-container">
      <img src="../../assets/logo.png">
      <p>Treasure</p>
    </div>
    <div class="selection-container">
      <el-dropdown trigger="hover">
        <span class="el-dropdown-link">
          我的账号<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>账号信息</el-dropdown-item>
          <el-dropdown-item>退出登录</el-dropdown-item>
          <el-dropdown-item>注销账号</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3em
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