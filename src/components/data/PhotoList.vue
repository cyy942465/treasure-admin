<!--
 * @Author: CYY 767516226@qq.com
 * @LastEditors: CYY 767516226@qq.com
-->
<template>
  <div class="form_container">
    <el-table :data="viewData" border>
      <el-table-column label="序号" align="center" width="80" prop="id"></el-table-column>
      <el-table-column label="上传照片" align="center" width="220" prop="image">
        <template slot-scope="scope">
          <el-image
            style="width: 120px; height: 120px;"
            :src="scope.row.image"
            @click="scaleImage(scope.row.image)"
            fit="fill"
            :preview-src-list="srcList"
          ></el-image>
        </template>
      </el-table-column>
      <el-table-column label="账号邮箱" align="center" prop="email"></el-table-column>
      <el-table-column label="评价" align="center" width="120" prop="accept">
        <template slot-scope="scope">
          <el-tag v-if="scope.row.accept === 'IS_RIGHT'" type="success"> 识别准确 </el-tag>
          <el-tag v-else-if="scope.row.accept === 'IS_ERROR'" type="danger"> 识别有误 </el-tag>
          <el-tag v-else type="info"> 未评价 </el-tag>
        </template>
      </el-table-column>
      <el-table-column label="准确率" align="center" width="120" prop="accuracy"></el-table-column>
      <el-table-column label="垃圾类别" align="center" width="200" prop="category"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  props: ['viewData'],
  data() {
    return {
      srcList: []
    }
  },
  methods: {
    scaleImage(image) {
      this.srcList.pop();
      this.srcList.push(image);
    }
  }
}
</script>

<style scoped>

</style>