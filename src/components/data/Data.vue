<!--
 * @Author: CYY 767516226@qq.com
 * @LastEditors: CYY 767516226@qq.com
-->
<template>
  <div class="container">
    <el-tabs v-model="activeName" type="card">
      <el-tab-pane label="全部" name="first">
        <photo-list :view-data="getAllPhoto"></photo-list>
      </el-tab-pane>
      <el-tab-pane label="好评" name="second">
        <photo-list :view-data="getRightPhoto"></photo-list>
      </el-tab-pane>
      <el-tab-pane label="差评" name="third">
        <photo-list :view-data="getWrongPhoto"></photo-list>
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
  },
  computed: {
    getAllPhoto() {
      return this.$store.getters['data/getPhotoList'];
    },
    getRightPhoto() {
      return this.$store.getters['data/getPhotoList']
        .filter( photo => photo.accept === 'IS_RIGHT');
    },
    getWrongPhoto() {
      return this.$store.getters['data/getPhotoList']
        .filter( photo => photo.accept === 'IS_ERROR');
    }
  },
  async mounted() {
    // 获取token
    const token = this.$store.getters['token'];
    // 发送请求获取照片列表
    await this.$store.dispatch('data/getPhotosMessage', token);
    // 获取照片列表
    // console.log(this.$store.getters['data/getPhotoList']);
  }
}
</script>

<style scoped>
.container {
  margin-left: 1em;
  margin-top: 1.5em;
}
</style>