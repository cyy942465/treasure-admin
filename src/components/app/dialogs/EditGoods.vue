<template>
  <el-dialog 
    title="修改商品信息"
    :visible.sync="dialogVisible"
    width="40%"
    center
    @close="closeDialog">
    <el-form :model="form" label-width="120px" label-position="left" :rules="rules">
      <el-form-item label="商品名称：">
        <el-input v-model="form.name" disabled></el-input>
      </el-form-item>
      <el-form-item label="商品数量：" prop="number">
        <el-input v-model.number="form.number" placeholder="请输入修改后的商品数量"></el-input>
      </el-form-item>
      <el-form-item label="商品积分：" prop="scores">
        <el-input v-model.number="form.scores" placeholder="请输入修改后的商品积分"></el-input>
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
  props: ['editDialogVisible','editGood'],
  emits: ['close-editGoods'],
  data() {
    return {
      dialogVisible: false,
      form: {
        id: null,
        name: '',
        number: null,
        scores: null
      },
      rules: {
        number: [
          { required: true, message: "商品数目不能为空！", trigger: 'blur' },
          { type: 'number', message: "数目必须为数字！" }
        ],
        scores: [
          { required: true, message: "商品积分不能为空！", trigger: 'blur' },
          { type: 'number', message: "积分必须为数字！" }
        ]
      }
    }
  },
  methods: {
    closeDialog() {
      this.$emit('close-editGoods', false);
    }
  },
  watch: {
    editDialogVisible(value) {
      this.dialogVisible = value;
      this.form.name = this.editGood;
    }
  }
}
</script>