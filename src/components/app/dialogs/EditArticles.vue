<template>
  <el-dialog 
    title="编辑文章信息" 
    :visible.sync="dialogVisible" 
    width="40%" 
    center
    @close="closeDialog">
    <el-form :model="form" label-width="120px" label-position="right" ref="Form" :rules="rules">
      <el-form-item label="文章标题：" prop="title">
        <el-input v-model="form.title" placeholder="请输入修改后的文章出版社"></el-input>
      </el-form-item>
      <el-form-item label="文章出版社" prop="author">
        <el-input v-model="form.author" placeholder="请输入修改后的文章出版社"></el-input>
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
  props: ['editDialogVisible','editMessage'],
  emits: ['close-editArticles'],
  data() {
    return {
      dialogVisible: false,
      form: {
        id: null,
        title: '',
        author: ''
      },
      rules: {
        title: [{ required: true, message: '文章标题不能为空', trigger: 'blur'}],
        author: [{ required: true, message: '文章出版社不能为空', trigger: 'blur' }]
      }
    }
  },
  watch: {
    editDialogVisible(value) {
      this.dialogVisible = value;
      this.form = this.editMessage;
    }
  },
  methods: {
    closeDialog() {
      this.$emit('close-editArticles', false);
    }
  }
}
</script>