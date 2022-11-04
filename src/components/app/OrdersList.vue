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
      <el-table-column label="操作" align="center" fixed="right" width="150">
        <template slot-scope="scope">
          <el-button
            type="primary" icon="el-icon-edit" circle size="small"
            @click="handleEdit(scope.$index,scope.row)"
          ></el-button>
          <el-button type="success" icon="el-icon-sell" circle size="small"
            @click="handleSend(scope.$index,scope.row)"
            v-if="scope.row.status === 0"
          ></el-button>
          <el-button
            type="danger" icon="el-icon-delete" circle size="small"
            @click="handleDelete(scope.$index,scope.row)"
          ></el-button>
        </template>
      </el-table-column>
    </el-table>
    <edit-order
      :editDialogVisible="editDialogVisible"
      @close-editOrder="closeEditOrder"
      :orderInfo="orderInfo"
    ></edit-order>
  </div>
</template>

<script>
import EditOrder from './dialogs/EditOrder.vue';
export default {
  components: {
    EditOrder
  },
  props: ['viewData','search'],
  data() {
    return {
      filterData: [],
      editDialogVisible: false,
      orderInfo: {
        id: '',
        goodsName: '',
        name: '',
        phone: '',
        province: '',
        city: '',
        addr: ''
      }
    }
  },
  watch: {
    viewData(value) {
      console.log('change');
      this.filterData = value;
    },
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
  methods: {
    handleDelete(index,row) {
      console.log(index,row);
      // 确认删除
      this.$confirm('此操作将永久删除该订单','提示', {
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
    handleEdit(index, row) {
      console.log(index,row);
      this.orderInfo.id = row.id;
      this.orderInfo.goodsName = row.goodsName;
      this.orderInfo.name = row.name;
      this.orderInfo.phone = row.phone;
      this.orderInfo.province = row.province;
      this.orderInfo.city = row.city;
      this.orderInfo.addr = row.addr;
      this.editDialogVisible = true;
    },
    handleSend(index, row) {
      console.log(index, row);
      // 确认
      this.$confirm('确认发货吗？','提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async () => {
        // vuex中发送post请求删除并更新tableData
        const token = this.$store.getters['token'];
        const id = row.id;
        const payload = {
          token,
          id
        };
        await this.$store.dispatch('orders/changeOrdersStatus', payload);
        this.$message({
          type: 'success',
          message: '发货成功！'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消发货!'
        });
      });
    },
    closeEditOrder(value) {
      this.editDialogVisible = value;
    }
  }
}
</script>

<style scoped>

</style>