<template>
  <div class="form_container">
    <el-table :data="viewData" border >
      <el-table-column label="订单编号" align="center"></el-table-column>
      <el-table-column label="商品名" align="center"></el-table-column>
      <el-table-column label="下单邮箱" align="center"></el-table-column>
      <el-table-column label="性名" align="center"></el-table-column>
      <el-table-column label="电话" align="center"></el-table-column>
      <el-table-column label="省" align="center"></el-table-column>
      <el-table-column label="市" align="center"></el-table-column>
      <el-table-column label="具体地址" align="center"></el-table-column>
      <el-table-column label="状态" align="center"></el-table-column>
      <el-table-column label="发货时间" align="center"></el-table-column>
      <el-table-column label="操作" align="center" fixed></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      viewData: []
    }
  }
}
</script>

<style scoped>

</style>