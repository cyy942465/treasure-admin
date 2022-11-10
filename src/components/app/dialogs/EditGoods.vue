<!--
 * @Author: CYY 767516226@qq.com
 * @LastEditors: CYY 767516226@qq.com
-->
<template>
  <el-dialog 
    title="修改商品信息"
    :visible.sync="dialogVisible"
    width="40%"
    center
    @close="closeDialog">
    <el-form :model="form" label-width="120px" label-position="left" :rules="rules" ref="form">
      <el-form-item label="商品名称：">
        <el-input v-model="form.name" disabled></el-input>
      </el-form-item>
      <el-form-item label="商品数量：" prop="number">
        <el-input v-model.number="form.number" placeholder="请输入修改后的商品数量"></el-input>
      </el-form-item>
      <el-form-item label="商品积分：" prop="price">
        <el-input v-model.number="form.price" placeholder="请输入修改后的商品积分"></el-input>
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
  props: ['editDialogVisible','editGood'],
  emits: ['close-editGoods'],
  data() {
    return {
      dialogVisible: false,
      form: {
        id: null,
        name: '',
        number: null,
        price: null
      },
      rules: {
        number: [
          { required: true, message: "商品数目不能为空！", trigger: 'blur' },
          { type: 'number', message: "数目必须为数字！" }
        ],
        price: [
          { required: true, message: "商品积分不能为空！", trigger: 'blur' },
          { type: 'number', message: "积分必须为数字！" }
        ]
      }
    }
  },
  methods: {
    closeDialog() {
      this.$emit('close-editGoods', false);
    },
    commitForm(form) {
      this.$refs[form].validate(async (valid) => {
        if (valid) {
          // 发送请求修改vuex中数据
          const token = this.$store.getters['token'];
          const payload = {
            token,
            data: {
              id: this.form.id,
              name: this.form.name,
              number: this.form.number,
              price: this.form.price
            }
          };
          await this.$store.dispatch('goods/changeGoodInfo', payload);
          this.closeDialog();
          this.$message.success('提交成功！');
        } else {
          this.$message.error('提交失败，请重新提交!');
          return;
        }
      })
    }
  },
  watch: {
    editDialogVisible(value) {
      this.dialogVisible = value;
      this.form.name = this.editGood.name;
      this.form.id = this.editGood.id;
      this.form.number = this.editGood.number;
      this.form.price = this.editGood.price;
    }
  }
}
</script>