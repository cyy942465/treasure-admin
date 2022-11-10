<!--
 * @Author: CYY 767516226@qq.com
 * @LastEditors: CYY 767516226@qq.com
-->
<template>
  <el-dialog
    title="添加新的商品"
    :visible.sync="dialogVisible" 
    width="40%"
    center
    @close="closeDialog" 
  >
    <el-form :model="form" label-width="120px" label-position="left" :rules="rules" ref="form">
      <el-form-item label="商品名称：" prop="name">
        <el-input v-model="form.name" placeholder="请输入要添加商品的名称"></el-input>
      </el-form-item>
      <el-form-item label="商品图片：" prop="img">
        <!-- 图片提交 -->
        <el-upload 
          action="#" 
          list-type="picture"
          :on-change="changeImg"
          :limit="1"
          :auto-upload="false">
          <i  slot="default" class="el-icon-plus"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="商品数目：" prop="number">
        <el-input v-model="form.number" placeholder="请输入要添加商品的数量"></el-input>
      </el-form-item>
      <el-form-item label="商品积分：" prop="scores">
        <el-input v-model="form.scores" placeholder="请输入要添加商品的所需积分"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="closeDialog">取 消</el-button>
      <el-button type="primary" @click="commitDialog('form')">提 交</el-button>
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
        img: null,
        number: '',
        scores: ''
      },
      rules: {
        name: [{ required: true, message: '商品名称不能为空！', trigger: 'blur' }],
        number: [{ required: true, message: '商品数目不能为空！', trigger: 'blur' }],
        scores: [{ required: true, message: '商品积分不能为空！', trigger: 'blur' }]
      }
    }
  },
  methods: {
    closeDialog() {
      this.$emit('close-addGoods', false);
    },
    commitDialog(form) {
      this.$refs[form].validate(async (valid) => {
        if (valid) {
          // console.log(this.form);
          // 获取token
          const token = this.$store.getters['token'];
          // 构造form-data
          let data = new FormData();
          data.append('file', this.form.img);
          data.append('name', this.form.name);
          data.append('number', this.form.number);
          data.append('price', this.form.scores);
          const payload = {
            token,
            data,
          }
          // 发送请求修改本地数据
          await this.$store.dispatch('goods/addGood', payload);
          // 获取全部商品更新本地列表，可优化需要接口获取图片url
          await this.$store.dispatch('goods/getGoodsList', token);
          this.$message.success('提交成功！');
          this.closeDialog();
        } else {
          this.$message.error('提交失败，请重新提交！');
          return;
        }
      })
    },
    changeImg(file) {
      console.log(file.raw);
      this.form.img = file.raw;
    }
  },
  watch: {
    addDialogVisible(value) {
      this.dialogVisible = value;
    }
  }
}
</script>
