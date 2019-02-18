/**
 * axios 封装
 * 请求拦截、响应拦截、错误统一处理
 */
import axios from 'axios';
import { Message, Loading } from 'element-ui';


/**
 * 请求失败后的错误处理
 **/
const error = () => {
  Message({
    type: 'error',
    message: '遇到错误，请刷新重试！',
    duration: 2 * 1000,
    customClass: 'el-custom-message',
  });
};


/**
 * loading加载ui的封装
 **/
let loading;
const startLoading = () => {
  loading = Loading.service({
    lock: true,
    text: '加载中……',
    background: 'rgba(0, 0, 0, 0.7)'
  });
};

const endLoading = () => {
  loading.close();
};


/**
 * 创建 axios 实例
 **/
var instance = axios.create({
  baseURL: 'https://cnodejs.org/api/v1',
  timeout: 5000
});


/**
 * 设置 post 请求头
 **/
instance.defaults.headers.post['content-type'] = 'application/x-www-form-urlencoded';


/**
 * 请求拦截器
 **/
instance.interceptors.request.use(
  config => {
    startLoading();
    return config;
  },
  err => {
    endLoading();
    error();
    Promise.reject(err);
  }
);


/**
 * 响应拦截器
 **/
instance.interceptors.response.use(
  response => {
    endLoading();
    return response.data;
  },
  err => {
    endLoading();
    error();
    return Promise.reject(err);
  }
);

export default instance;
