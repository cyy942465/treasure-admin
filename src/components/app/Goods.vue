<template>
  <div class="container">
    <!-- 控制 -->
    <div class="controller">
      <!-- 添加 -->
      <el-button icon="el-icon-plus" @click="handleAdd">添加商品</el-button>
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
    <add-goods
      :addDialogVisible="addDialogVisible"
      @close-addGoods="closeAddGoods"
    ></add-goods>
  </div>
</template>

<script>
import EditGoods from './dialogs/EditGoods.vue';
import AddGoods from './dialogs/AddGoods.vue';
export default {
  components: { 
    EditGoods,
    AddGoods 
  },
  data() {
    return {
      srcList: [],
      search: '',
      editDialogVisible: false,
      editGood: {
        name: '',
        id: null,
        price: 0,
        number: 0
      },
      addDialogVisible: false,
      curPage: 1, // 当前页数
    }
  },
  methods: {
    scaleImage(image) {
      this.srcList.pop();
      this.srcList.push(image);
    },
    handleAdd() {
      this.addDialogVisible = true;
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
        const token = this.$store.getters['token'];
        const id = row.id;
        const payload = {
          token,
          id
        }
        this.$store.dispatch('goods/deleteGood',payload);
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
      this.editGood.name = row.name;
      this.editGood.id = row.id;
      this.editGood.price = row.price;
      this.editGood.number = row.number;
    },
    closeEditGoods(value) {
      this.editDialogVisible = value;
    },
    closeAddGoods(value) {
      this.addDialogVisible = value;
    },
    changePage(event) {
      // console.log(event);
      this.curPage = event;
    }
  },
  computed: {
    dataResult() {
      if (this.search === '') {
        return this.$store.getters['goods/getGoods'].slice((this.curPage - 1) * 5, this.curPage * 5);
      } else {
        return this.$store.getters['goods/getGoods'].filter( value => {
          return !this.search || value.name.includes(this.search);
        } )
      }
    },
    totalGoods() {
      return this.search === ''? this.$store.getters['goods/getTotal'] : this.dataResult.length;
    },
  },
  async mounted() {
    // 获取token
    const token = this.$store.getters['token'];
    // 获取商品列表
    await this.$store.dispatch('goods/getGoodsList', token);
    // 设置列表
    // console.log(this.$store.getters['goods/getGoods']);
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