<template>
  <div class="container">
    <el-tabs v-model="activeName" type="card">
      <el-tab-pane label="全部" name="first">
        <photo-list></photo-list>
      </el-tab-pane>
      <el-tab-pane label="好评" name="second">
        <photo-list></photo-list>
      </el-tab-pane>
      <el-tab-pane label="差评" name="third">
        <photo-list></photo-list>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import PhotoList from './PhotoList.vue';

export default {
  components: {
    PhotoList
  },
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