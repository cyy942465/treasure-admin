<template>
  <div class="form_container">
    <el-table :data="tableData" border>
      <el-table-column label="编号" align="center" prop="id" width="100"></el-table-column>
      <el-table-column label="经度" align="center" prop="lng" width="120"></el-table-column>
      <el-table-column label="纬度" align="center" prop="lat" width="120"></el-table-column>
      <el-table-column label="提交时间" align="center" prop="createTime" width="250"></el-table-column>
      <el-table-column label="照片" align="center" prop="image" width="130">
        <template slot-scope="scope">
          <el-image
            style="width: 100px; height: 100px;"
            @click="scaleImage(scope.row.image)"
            :src="scope.row.image"
            fit="fill"
            :preview-src-list="srcList"
          ></el-image>
        </template>
      </el-table-column>
      <el-table-column label="状态" align="center" width="100">
        <template slot-scope="scope">
          <el-tag :type="getStatusType(scope.row.status)">{{ getStatus(scope.row.status) }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button type="success" v-if="scope.row.status === 0">通过</el-button>
          <el-button type="primary" v-if="scope.row.status === 0">不通过</el-button>
          <el-button type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  props: ['tableData'],
  data() {
    return {
      srcList: []
    }
  },
  methods: {
    getStatus(status) {
      if (status === 0) {
        return "未审核";
      } else if (status === 1) {
        return "已通过";
      } else {
        return "未通过";
      }
    },
    getStatusType(status) {
      if (status === 0) {
        return '';
      } else if (status === 1) {
        return 'success';
      } else {
        return 'info';
      }
    },
    scaleImage(img) {
      // 保持srcList中只有一张照片
      this.srcList.pop();
      this.srcList.push(img);
    }
  },
}
</script>

<style scoped>

</style>