<template>
  <div class="form_container">
    <el-table :data="viewData" border>
      <el-table-column label="序号" align="center" width="80"></el-table-column>
      <el-table-column label="上传照片" align="center" width="220"></el-table-column>
      <el-table-column label="账号邮箱" align="center"></el-table-column>
      <el-table-column label="评价" align="center" width="120"></el-table-column>
      <el-table-column label="准确率" align="center" width="120"></el-table-column>
      <el-table-column label="垃圾类别" align="center" width="200"></el-table-column>
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