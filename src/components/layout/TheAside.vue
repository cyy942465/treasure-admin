<template>
  <div class="container">
    <el-menu default-active="0" class="el-menu-vertical-demo">
      <router-link to="/Main/Home">
        <el-menu-item index="0">
            <i class="el-icon-s-home"></i>
            <span slot="title">主页</span>
        </el-menu-item>
      </router-link>

      <router-link to="/Main/Data">
        <el-menu-item index="1">
            <i class="el-icon-s-data"></i>
            <span slot="title">流量监控</span>
        </el-menu-item>
      </router-link>

      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-user-solid"></i>
          <span>账号管理</span>
        </template>
        <router-link to="/Main/Admins">
          <el-menu-item index="2-1">管理账号</el-menu-item>
        </router-link>
        <router-link to="/Main/Users">
          <el-menu-item index="2-2">用户账号</el-menu-item>
        </router-link>
      </el-submenu>

      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-s-help"></i>
          <span>应用管理</span>
        </template>
        <router-link to="/Main/Orders">
          <el-menu-item index="3-1">订单管理</el-menu-item>
        </router-link>
        <router-link to="/Main/Goods">
          <el-menu-item index="3-2">商品管理</el-menu-item>
        </router-link>
        <router-link to="/Main/Articles">
          <el-menu-item index="3-3">文章管理</el-menu-item>
        </router-link>
      </el-submenu>

      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-s-promotion"></i>
          <span>地图管理</span>
        </template>
        <router-link to="/Main/Map">
          <el-menu-item index="4-1">地图查看</el-menu-item>
        </router-link>
        <router-link to="/Main/Points">
          <el-menu-item index="4-2">标点管理</el-menu-item>
        </router-link>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  
}  
</script>

<style scoped>
a {
  text-decoration: none;
}
.container {
  margin-top: 2px;
  text-align: center;
}
.el-menu-vertical-demo {
  min-height: 91vh;
}
</style>