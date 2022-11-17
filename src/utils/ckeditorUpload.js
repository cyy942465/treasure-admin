/*
 * @Author: CYY 767516226@qq.com
 * @Date: 2022-11-17 15:03:44
 * @LastEditors: CYY 767516226@qq.com
 * @LastEditTime: 2022-11-17 15:19:35
 */
import { Axios } from "../axios/axiosPlugin";
import { baseUrl } from "../config";

class MyUploadAdaptor {
  constructor(loader) {
    this.loader = loader;
  }

  // 启动上载过程
  async upload() {
    const data = new FormData();
    data.append("file", await this.loader.file);

    const response = await Axios({
      url: baseUrl + '/essay/upload',
      method: 'post',
      data
    });

    // 后台返回数据
    console.log(response.data);


    // 返回数据
    return {
      default: response.data.data
    }
  }

  // 中止上载过程
  abort() {
    if (this.xhr) {
      this.xhr.abort();
    }
  }
}

function MyCustomUploadAdapterPlugin(editor) {
  editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
    // 将url配置为后端上载脚本
    return new MyUploadAdaptor(loader);
  }
}

export {
  MyCustomUploadAdapterPlugin,
  MyUploadAdaptor
}

