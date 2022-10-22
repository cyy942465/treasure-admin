<template>
  <div class="container">
    <el-dialog 
      title="修改密码" 
      :visible.sync="visible" 
      @close="closeDialog"
      width="30%"
      center
    >
      <el-form 
        :model="updateData" 
        label-position="left"
        label-width="120px"
        ref="updateForm"
        :rules="rules"  
      >
        <el-form-item label="新密码：" prop="newPassword">
          <el-input 
          v-model="updateData.newPassword" 
          placeholder="请输入新密码"
          ></el-input>
        </el-form-item>
        <el-form-item label="确认新密码：" prop="confirmPassword">
          <el-input 
          v-model="updateData.confirmPassword" 
          placeholder="请再次输入新密码"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="closeDialog">取 消</el-button>
        <el-button type="primary" @click="handleCommit('updateForm')">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: ['updatedFormVisible', 'index', 'row'],
  emits: ['close-updateDialog'],
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入新密码'));
      } else if (value !== this.updateData.newPassword) {
        callback(new Error('两次输入的密码不一致'));
      } else {
        callback();
      }
    };
    return {
      updateData: {
        newPassword: '',
        confirmPassword: ''
      },
      rules: {
        newPassword: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 15, message: '密码长度6-15位', trigger: 'blur' }
        ],
        confirmPassword: [
          { required: true, message: '请再次输入新密码', trigger: 'blur'},
          { validator: validatePass, trigger: 'blur' }
        ]
      },
      visible: false,
      selectedIndex: '',
      selectedRow: null
    }
  },
  methods: {
    handleCommit(form) {
      // 发送数据给后台
        this.$refs[form].validate((valid) => {
          if (valid) {
            console.log('commit!');
            // 发送数据给后台
            
            // 关闭对话框
            this.closeDialog();
          } else {
            return;
          }
        })
    },
    closeDialog() {
      this.visible = false;
      this.$emit('close-updateDialog', false);
    }
  },
  watch: {
    updatedFormVisible(value) {
      this.visible = value;
      this.selectedIndex = this.index;
      this.selectedRow = this.row;
    }
  }
}
</script>