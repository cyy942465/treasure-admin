<!--
 * @Author: CYY 767516226@qq.com
 * @LastEditors: CYY 767516226@qq.com
-->
<template>
  <div class="info_container">
    <div class="baseInfo">
      <!-- 文章头像 -->
      <div class="baseInfo_file">
        <el-upload
          class="avatar-uploader"
          action="#"
          :show-file-list="false"
          :auto-upload="false"
          :on-change="handleAvatarChange">
          <img v-if="url" :src="url" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </div>
      <!-- 文章标题和作者 -->
      <div class="baseInfo_info">
        <el-input v-model="editInfo.title" placeholder="请输入文章标题" clearable></el-input>
        <el-input v-model="editInfo.author" placeholder="请输入文章作者" clearable></el-input>
      </div>
    </div>
    <!-- 富文本编辑 -->
    <ckeditor :editor="editor" v-model="editorData" :config="editorConfig" @ready="onReady"></ckeditor>
    <!-- 提交按钮 -->
    <div class="controller">
      <el-button type="primary" @click="handleCommit">提 交</el-button>
      <el-button type="" @click="handleCancel">取 消</el-button>
    </div>
  </div>
</template>

<script>
import Editor from '@ckeditor/ckeditor5-build-classic';
import '@ckeditor/ckeditor5-build-classic/build/translations/zh-cn';
const upload = require("../../utils/ckeditorUpload");

export default {
  data() {
    return {
      url: null,
      editInfo: {
        file: null,
        id: null,
        title: '',
        author: '',
      },
      editor: Editor, // 编辑器对象
      editorData: '<p>Content of the editor</p>', // 编辑器内容
      editorConfig: {
        language: 'zh-cn',
        extraPlugins: [
          upload.MyCustomUploadAdapterPlugin
        ]
      }
    }
  },
  methods: {
    handleAvatarChange(file) {
      this.editInfo.file = file.raw;
      this.url =  URL.createObjectURL(file.raw);
    },
    onReady(editor) {
      console.log(editor);
    },
    handleCancel() {
      this.$router.replace('/Main/Articles');
    },
    async handleCommit() {
      // 检验信息完整性
      if (this.editInfo.title === '') {
        this.$message({
          type: 'error',
          message: '文章标题不能为空！'
        });
        return;
      }
      if (this.editInfo.author === '') {
        this.$message({
          type: 'error',
          message: '文章作者不能为空！'
        });
        return;
      }
      // 构造请求数据
      let data = new FormData();
      data.append('file', this.editInfo.file);
      data.append('title', this.editInfo.title);
      data.append('author', this.editInfo.author);
      data.append('content', this.editorData);
      const curType = this.$store.getters['articles/getArticleType'];
      if (curType === 1) {
        await this.$store.dispatch('articles/addArticle', data);
        this.$message({
          type: 'success',
          message: '添加文章成功！'
        });
        this.$router.replace('/Main/Articles');
      } else if (curType === 0) {
        const payload = {
          data,
          id: this.editInfo.id
        }
        await this.$store.dispatch('articles/editArticle', payload);
        this.$message({
          type: 'success',
          message: '修改文章成功！'
        });
        this.$router.replace('/Main/Articles');
      }
    }
  },
  mounted() {
    const t = this.$store.getters['articles/getArticleType'];
    if (t === 1) {
      // 添加文章
    } else if (t === 0) {
      // 编辑文章
      // 获取文章编号
      this.editInfo.id = this.$store.getters['articles/getEditingId'];
      // console.log(this.editInfo.id);
      // 获取文章
      const article = this.$store.getters['articles/getArticleById'](this.editInfo.id);
      // 修改视图数据
      this.editInfo.title = article.title;
      this.editInfo.author = article.author;
      this.url = article.imageUrl;
      this.editorData = article.content;
    }
  }
}
</script>

<style>
.info_container {
  margin-left: 1em;
  margin-top: 1.5em;
}

.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}

.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}

.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 100px;
  height: 100px;
  line-height: 100px;
  text-align: center;
}

.avatar {
  width: 100px;
  height: 100px;
  display: block;
}

.baseInfo {
  display: flex;
}

.baseInfo_info {
  margin-left: 2em;
  display: flex;
  flex-direction: column;
}

.baseInfo_info .el-input {
  margin-bottom: 1.5em;
  width: 30em;
}

.info_container .controller {
  margin-top: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>