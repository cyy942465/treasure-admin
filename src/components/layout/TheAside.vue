<template>
  <div class="container">
    <el-menu default-active="0" class="el-menu-vertical-demo">

      <el-menu-item index="0">
        <i class="el-icon-menu"></i>
        <span slot="title">流量监控</span>
      </el-menu-item>

      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-user-solid"></i>
          <span>账号管理</span>
        </template>
        <router-link to="/Home/Admins">
          <el-menu-item index="1-1">管理账号</el-menu-item>
        </router-link>
        <router-link to="/Home/Users">
          <el-menu-item index="1-2">用户账号</el-menu-item>
        </router-link>
      </el-submenu>

      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-s-help"></i>
          <span>应用管理</span>
        </template>
        <router-link to="/Home/Orders">
          <el-menu-item index="2-1">订单管理</el-menu-item>
        </router-link>
        <router-link to="/Home/Goods">
          <el-menu-item index="2-2">商品管理</el-menu-item>
        </router-link>
        <router-link to="/Home/Articles">
          <el-menu-item index="2-3">文章管理</el-menu-item>
        </router-link>
      </el-submenu>

      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-s-promotion"></i>
          <span>地图管理</span>
        </template>
        <router-link to="/Home/Map">
          <el-menu-item index="3-1">地图查看</el-menu-item>
        </router-link>
        <router-link to="/Home/Points">
          <el-menu-item index="3-2">标点管理</el-menu-item>
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
}
.el-menu-vertical-demo {
  min-height: 91vh;
}
</style>