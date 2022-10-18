<template>
  <div class="form_container">
    <el-table :data="viewData" border>
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
          <el-button type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination_container">
      <el-pagination
        layout="prev, pager, next"
        :total="getDataLen"
        :page-size="5"
        @current-change="changePage">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  props: ['tableData'],
  data() {
    return {
      viewData: [],
      srcList: [],
    }
  },
  watch: {
    // 用于初始化视图
    tableData(newValue, oldValue) {
      console.log(newValue,oldValue);
      this.viewData = newValue.slice(0,5);
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
    },
    changePage(event) {
      this.viewData = this.tableData.slice((event - 1) * 5, event * 5 > this.getDataLen ? this.getDataLen + 1 : event * 5);
    },
    handleDelete(index, row) {
      console.log(index,row);
      // 确认删除
      this.$confirm('此操作将永久删除该地点','提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        // vuex中发送del请求删除并更新tableData
        this.$message({
          type: 'success',
          message: '删除成功！'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消删除!'
        });
      });
    }
  },
  computed: {
    getDataLen() {
      // console.log(this.tableData.length);
      return this.tableData.length;
    }
  },
}
</script>

<style scoped>
.pagination_container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>