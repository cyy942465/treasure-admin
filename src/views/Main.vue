<template>
  <el-container>
    <el-header class="header">
      <the-header></the-header>
    </el-header>
    <el-container>
      <el-aside class="aside">
        <the-aside></the-aside>
      </el-aside>
      <el-main>
        <page-header></page-header>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import TheHeader from '../components/layout/TheHeader.vue';
import TheAside from '../components/layout/TheAside.vue';
import PageHeader from '../components/layout/PageHeader.vue';

export default {
  components: { 
    TheHeader,
    TheAside,
    PageHeader
  }

} 
</script>

<style scoped>
.header {
  height: 9vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #CFD8DC;
  box-shadow: 0 1px 2px #CFD8DC;
}

</style>