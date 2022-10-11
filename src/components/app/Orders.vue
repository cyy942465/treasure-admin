<template>
  <div class="container">
    <div class="controller">
      <el-input 
        v-model="search" 
        placeholder="搜索订单编号" 
        prefix-icon="el-icon-search"
      ></el-input>
    </div>
    <el-tabs v-model="activeName" type="card">
      <el-tab-pane label="全部" name="first">
        <orders-list :viewData="getAll" :search="search"></orders-list>
      </el-tab-pane>
      <el-tab-pane label="未发货" name="second">
        <orders-list :viewData="getUnSend" :search="search"></orders-list>
      </el-tab-pane>
      <el-tab-pane label="已发货" name="third">
        <orders-list :viewData="getSended" :search="search"></orders-list>
      </el-tab-pane>
      <el-tab-pane label="已收货" name="fourth">
        <orders-list :viewData="getArrived" :search="search"></orders-list>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import OrdersList from './OrdersList.vue';
export default {
  components: { OrdersList },
  data() {
    return {
      activeName: 'first',
      ordersList: [],
      search: ''
    }
  },
  computed: {
    getAll() {
      return this.ordersList;
    },
    getUnSend() {
      return this.ordersList.filter( order => {
        return order.status === 0;
      });
    },
    getSended() {
      return this.ordersList.filter( order => {
        return order.status === 1;
      })
    },
    getArrived() {
      return this.ordersList.filter( order => {
        return order.status === 2;
      })
    }
  },
  async mounted() {
    // 获取token
    const token = this.$store.getters['token'];
    // 发送请求获取订单列表
    await this.$store.dispatch('orders/getOrdersList', token);
    //console.log(this.$store.getters['orders/getOrders']);
    this.ordersList = this.$store.getters['orders/getOrders'].slice();
  }
}
</script>

<style scoped>
.container {
  margin-left: 1em;
  margin-top: 1.5em;
}

.controller {
  width: 10em;
  margin-bottom: 1em;
}
</style>