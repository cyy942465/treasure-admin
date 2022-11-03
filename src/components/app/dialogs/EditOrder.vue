<!--
 * @Author: CYY 767516226@qq.com
 * @LastEditors: CYY 767516226@qq.com
-->
<template>
  <el-dialog
    title="修改订单地址"
    :visible.sync="dialogVisible"
    width="35%"
    center
    @close="closeDialog">
    <el-form :model="form" label-width="120px" label-position="left" :rules="rules" ref="form">
      <el-form-item label="订单编号：" >
        <el-input v-model="form.id" disabled></el-input>
      </el-form-item>
      <el-form-item label="商品名称：">
        <el-input v-model="form.goodsName" disabled></el-input>
      </el-form-item>
      <el-form-item label="性名：" prop="name">
        <el-input v-model="form.name" placeholder="请输入收件人性名"></el-input>
      </el-form-item>
      <el-form-item label="电话：" prop="phone">
        <el-input v-model="form.phone" placeholder="请输入收件人电话"></el-input>
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
      <el-button type="primary" @click="commitForm('form')">提 交</el-button>
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
        name: '',
        phone: '',
        province: '',
        city: '',
        addr: ''
      },
      rules: {
        name: [{ required: true, message: '订单的收件人不能为空！', trigger: 'blur' }],
        phone: [{ required: true, message: '订单的收件人电话不能为空！', trigger: 'blur' }],
        province: [{ required: true, message: '订单所在省份不能为空！', trigger: 'blur'}],
        city: [{ required: true, message: '订单所在城市不能为空！', trigger: 'blur' }],
        addr: [{ required: true, message: '订单所在详细地址不能为空！', trigger: 'blur' }]
      }
    }
  },
  methods: {
    closeDialog() {
      this.$emit('close-editOrder', false);
    },
    commitForm(form) {
      this.$refs[form].validate(async (valid) => {
        if (valid) {
          console.log("commit");
          // 发送数据给后台
          const token = this.$store.getters['token'];
          const id = this.form.id;
          const payload = {
            token,
            id,
            data: {
              name: this.form.name,
              phone: this.form.phone,
              province: this.form.province,
              city: this.form.city,
              addr: this.form.addr
            }
          };
          await this.$store.dispatch('orders/changeOrdersMessage', payload);
          // 关闭对话框
          this.closeDialog();
        } else {
          this.$message.error('提交失败，请重新提交！')
          return;
        }
      })
    }
  },
  watch: {
    editDialogVisible(value) {
      this.dialogVisible = value;
      this.form = this.orderInfo;
      console.log(this.form);
    }
  }
}
</script>