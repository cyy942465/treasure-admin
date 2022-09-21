<template>
  <div class="container">
    <el-dialog title="修改密码" :visible.sync="visible" :close-on-click-modal="false" :show-close="false">
      <el-form :model="updateData" label-position="left">
        <el-form-item label="新密码" prop="newPassword">
          <el-input 
          v-model="updateData.newPassword" 
          placeholder="请输入新密码"
          ></el-input>
        </el-form-item>
        <el-form-item label="确认新密码" prop="confirmPassword">
          <el-input 
          v-model="updateData.confirmPassword" 
          placeholder="请再次输入新密码"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="handleCommit">取 消</el-button>
        <el-button type="primary" @click="handleCommit">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: ['updatedFormVisible', 'index', 'row'],
  emits: ['close-updateDialog'],
  data() {
    return {
      updateData: {
        newPassword: '',
        confirmPassword: ''
      },
      visible: false,
      selectedIndex: '',
      selectedRow: null
    }
  },
  methods: {
    handleCommit(event) {
      // console.log(event);
      this.visible = false;
      this.$emit('close-updateDialog',this.visible);
      // 发送数据给后台
      if (event.target.innerHTML === '确 定') {
        console.log('commit!')
      }
    }
  },
  created() {
    this.visible = this.updatedFormVisible;
    this.selectedIndex = this.index;
    this.selectedRow = this.row;
    console.log(this.selectedRow);
  }
}
</script>