<template>
  <el-dialog
    title="添加新的商品"
    :visible.sync="dialogVisible" 
    width="40%"
    center
    @close="closeDialog" 
  >
    <el-form :model="form" label-width="120px" label-position="left" :rules="rules">
      <el-form-item label="商品名称：" prop="name">
        <el-input v-model="form.name" placeholder="请输入要添加商品的名称"></el-input>
      </el-form-item>
      <el-form-item label="商品图片：" prop="img">
        <!-- 留白 -->
        
      </el-form-item>
      <el-form-item label="商品数目：" prop="number">
        <el-input v-model.number="form.number" placeholder="请输入要添加商品的数量"></el-input>
      </el-form-item>
      <el-form-item label="商品积分：" prop="scores">
        <el-input v-model.number="form.scores" placeholder="请输入要添加商品的所需积分"></el-input>
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
  props: ['addDialogVisible'],
  emits: ['close-addGoods'],
  data() {
    return {
      dialogVisible: false,
      form: {
        name: '',
        img: '',
        number: null,
        scores: null
      },
      rules: {
        name: [{ required: true, message: '商品名称不能为空！', trigger: 'blur' }],
        number: [
          { required: true, message: '商品数目不能为空！', trigger: 'blur' },
          { type: 'number', message: '数目必须为数字！' }
        ],
        scores: [
          { required: true, message: '商品积分不能为空！', trigger: 'blur' },
          { type: 'number', message: '积分必须为数字！' }
        ]
      }
    }
  },
  methods: {
    closeDialog() {
      this.$emit('close-addGoods', false);
    }
  },
  watch: {
    addDialogVisible(value) {
      this.dialogVisible = value;
    }
  }
}
</script>