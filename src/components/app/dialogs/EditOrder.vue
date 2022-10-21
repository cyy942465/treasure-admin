<template>
  <el-dialog
    title="修改订单地址"
    :visible.sync="dialogVisible"
    width="35%"
    center
    @close="closeDialog">
    <el-form :model="form" label-width="120px" label-position="left" :rules="rules">
      <el-form-item label="订单编号：" >
        <el-input v-model="form.id" disabled></el-input>
      </el-form-item>
      <el-form-item label="商品名称：">
        <el-input v-model="form.goodsName" disabled></el-input>
      </el-form-item>
      <el-form-item label="省份：" prop="province">
        <el-input v-model="form.province" placeholder="请输入修改后的省份"></el-input>
      </el-form-item>
      <el-form-item label="城市：" prop="city">
        <el-input v-model="form.city" placeholder="请输入修改后的城市"></el-input>
      </el-form-item>
      <el-form-item label="详细地址" prop="addr">
        <el-input v-model="form.addr" placeholder="请输入修改后的详细地址"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="closeDialog">取 消</el-button>
      <el-button type="primary" @click="closeDialog">提 交</el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  props: ['editDialogVisible','orderInfo'],
  emits: ['close-editOrder'],
  data() {
    return {
      dialogVisible: false,
      form: {
        id: null,
        goodsName: '',
        province: '',
        city: '',
        addr: ''
      },
      rules: {
        province: [{ required: true, message: '订单所在省份不能为空！', trigger: 'blur'}],
        city: [{ required: true, message: '订单所在城市不能为空！', trigger: 'blur' }],
        addr: [{ required: true, message: '订单所在详细地址不能为空！', trigger: 'blur' }]
      }
    }
  },
  methods: {
    closeDialog() {
      this.$emit('close-editOrder', false);
    }
  },
  watch: {
    editDialogVisible(value) {
      this.dialogVisible = value;
      this.form = this.orderInfo;
    }
  }
}
</script>