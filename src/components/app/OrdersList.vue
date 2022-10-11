<template>
  <div class="form_container">
    <el-table :data="filterData" border max-height="500">
      <el-table-column label="订单编号" align="center" prop="id" width="80" fixed="left"></el-table-column>
      <el-table-column label="商品名" align="center" prop="goodsName" width="150"></el-table-column>
      <el-table-column label="下单邮箱" align="center" prop="email" width="180"></el-table-column>
      <el-table-column label="性名" align="center" prop="name" width="100"></el-table-column>
      <el-table-column label="电话" align="center" prop="phone" width="150"></el-table-column>
      <el-table-column label="省" align="center" prop="province" width="80"></el-table-column>
      <el-table-column label="市" align="center" prop="city" width="80"></el-table-column>
      <el-table-column label="具体地址" align="center" prop="addr" width="150"></el-table-column>
      <el-table-column label="状态" align="center" prop="status" width="100">
        <template slot-scope="scope">
          <el-tag v-if="scope.row.status === 0" type="info">未发货</el-tag>
          <el-tag v-else-if="scope.row.status === 1" type="">已发货</el-tag>
          <el-tag v-else type="success">已收货</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="发货时间" align="center" prop="exchangeTime" width="120"></el-table-column>
      <el-table-column label="操作" align="center" fixed="right" width="80"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  props: ['viewData','search'],
  data() {
    return {
      filterData: []
    }
  },
  watch: {
    search(value) {
      if (value === '') {
        this.filterData = this.viewData;
      } else {
        // console.log(value);
        this.filterData = this.viewData.filter( data => {
          return !value || data.id == value;
        })
      }
    }
  },
  mounted() {
    this.filterData = this.viewData;
  }
}
</script>

<style scoped>

</style>