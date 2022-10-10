<template>
  <div class="container">
    <el-tabs v-model="activeName" type="card">
      <el-tab-pane label="全部" name="first">
        <orders-list></orders-list>
      </el-tab-pane>
      <el-tab-pane label="未发货" name="second">
        <orders-list></orders-list>
      </el-tab-pane>
      <el-tab-pane label="已发货" name="third">
        <orders-list></orders-list>
      </el-tab-pane>
      <el-tab-pane label="已收获" name="fourth">
        <orders-list></orders-list>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import OrdersList from './OrdersList.vue';
export default {
  components: { OrdersList },
  comments: ['OrdersList'],
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