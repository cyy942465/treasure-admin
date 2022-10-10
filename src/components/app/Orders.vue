<template>
  <div class="container">
    <el-tabs v-model="activeName" type="card">
      <el-tab-pane label="全部" name="first"></el-tab-pane>
      <el-tab-pane label="未发货" name="second"></el-tab-pane>
      <el-tab-pane label="已发货" name="third"></el-tab-pane>
      <el-tab-pane label="已收获" name="fourth"></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: 'first'
    }
  }
}
</script>

<style scoped>
.container {
  margin-left: 1em;
  margin-top: 1.5em;
}
</style>