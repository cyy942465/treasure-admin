<template>
  <div class="container">
    <!-- 控制 -->
    <div class="controller">
      <!-- 添加 -->
      <el-button icon="el-icon-plus">添加商品</el-button>
      <!-- 搜索框 -->
      <el-input 
        v-model="search" 
        placeholder="搜索商品名称"
        prefix-icon="el-icon-search"
        class="search_input"
      ></el-input>
    </div>
    <!-- 表格 -->
    <div class="table">
      <el-table :data="dataResult" border>
        <el-table-column label="商品编号" align="center" width="100" prop="id"></el-table-column>
        <el-table-column label="商品名称" align="center" prop="name"></el-table-column>
        <el-table-column label="商品图片" align="center" prop="image">
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
        <el-table-column label="数量" align="center" prop="number"></el-table-column>
        <el-table-column label="积分数" align="center" prop="price" sortable></el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-button
              type="primary" icon="el-icon-edit" circle size="small"
              @click="handleEdit(scope.$index,scope.row)"
            ></el-button>
            <el-button
              type="danger" icon="el-icon-delete" circle size="small"
              @click="handleDelete(scope.$index,scope.row)"
            ></el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 分页 -->
    <div class="pagination">
      <el-pagination
        layout="prev,pager,next"
        :page-size="5"
        :total="totalGoods"
        @current-change="changePage"
      ></el-pagination>
    </div>
    <edit-goods
      :editDialogVisible="editDialogVisible"
      :editGood="editGood"
      @close-editGoods="closeEditGoods"
    ></edit-goods>
  </div>
</template>

<script>
import EditGoods from './dialogs/EditGoods.vue';
export default {
  components: { EditGoods },
  data() {
    return {
      tableData: [],
      srcList: [],
      search: '',
      editDialogVisible: false,
      editGood: '',
    }
  },
  methods: {
    scaleImage(image) {
      this.srcList.pop();
      this.srcList.push(image);
    },
    handleDelete(index,row) {
      console.log(index,row);
      // 确认删除
      this.$confirm('此操作将永久删除该商品','提示', {
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
    },
    handleEdit(index,row) {
      console.log(index,row);
      this.editDialogVisible = true;
      this.editGood = row.name;
    },
    closeEditGoods(value) {
      this.editDialogVisible = value;
    },
    changePage(event) {
      // console.log(event);
      this.tableData = this.$store.getters['goods/getGoods'].slice((event - 1) * 5, event * 5);
    }
  },
  computed: {
    dataResult() {
      if (this.search === '') {
        return this.tableData;
      } else {
        return this.tableData.filter( value => {
          return !this.search || value.name.includes(this.search);
        } )
      }
    },
    totalGoods() {
      return this.$store.getters['goods/getTotal'];
    }
  },
  async mounted() {
    // 获取token
    const token = this.$store.getters['token'];
    // 获取商品列表
    await this.$store.dispatch('goods/getGoodsList', token);
    // 设置列表
    // console.log(this.$store.getters['goods/getGoods']);
    this.tableData = this.$store.getters['goods/getGoods'].slice(0,5);
  }
}
</script>

<style scoped>
.container {
  margin-left: 1em;
  margin-top: 1.5em;
}

.controller {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1em;
}

.search_input {
  width: 20em;
}

.pagination {
  margin-top: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>