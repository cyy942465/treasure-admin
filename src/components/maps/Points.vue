<!--
 * @Author: CYY 767516226@qq.com
 * @LastEditors: CYY 767516226@qq.com
-->
<template>
  <div class="container">
    <el-tabs v-model="activeName" type="card">
      <el-tab-pane label="全部" name="first">
        <map-form :tableData="getAll"></map-form>
      </el-tab-pane>
      <el-tab-pane label="未审核" name="second">
        <map-form :tableData="getUnverified"></map-form>
      </el-tab-pane>
      <el-tab-pane label="已通过" name="third">
        <map-form :tableData="getVerified"></map-form>
      </el-tab-pane>
      <el-tab-pane label="未通过" name="fourth">
        <map-form :tableData="getPassed"></map-form>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import MapForm from './MapForm.vue';
export default {
  components: { MapForm },
  comments: {
    MapForm
  },
  data() {
    return {
      activeName: 'first'
    }
  },
  computed: {
    // 获取全部标点
    getAll() {
      return this.$store.getters['points/getPointsList'].slice();
    },
    // 获取未审核的点，status为0
    getUnverified() {
      return this.$store.getters['points/getPointsList'].filter( value => {
        return value.status === 0;
      })
    },
    // 获取已通过的点，status为1
    getVerified() {
      return this.$store.getters['points/getPointsList'].filter( value => {
        return value.status === 1;
      })
    },
    // 获取未通过的点，status为2
    getPassed() {
      return this.$store.getters['points/getPointsList'].filter( value => {
        return value.status === 2;
      })
    }
  },
  async mounted() {
    // 获取token
    const token = this.$store.getters['token'];
    // 发送请求
    await this.$store.dispatch('points/getPointsMessage',token);
    // 检验是否成功
    // console.log(this.$store.getters['points/getPointsList']);
  }
}
</script>

<style scoped>
.container {
  margin-top: 2em;
  padding-left: 1em;
}
</style>