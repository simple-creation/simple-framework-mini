// @ts-ignore
/* eslint-disable */
import Taro, { request } from '@tarojs/taro'

import { HTTP_STATUS } from '../constants/status'
import { logError } from '../utils/error'
import Client from '../client/client';
import Storage from './storage';

export default class Model {
  bizPath;
  constructor(props) {
    if (props && props.bizPath) {
      this.bizPath = props.bizPath;
    }
    if (props && props.gateway) {
      this.gateway = props.gateway;
    }
  }
  processUnauthentication = (response) => {
    Taro.navigateTo({ url: '/pages/user/login/index' });
  }
  saveToken(token) {
    Storage.saveToken(token);
  }
  checkResponse(res) {
    if (res.statusCode === HTTP_STATUS.NOT_FOUND) {
      return logError('api', '请求资源不存在')
    } else if (res.statusCode === HTTP_STATUS.BAD_GATEWAY) {
      return logError('api', '服务端出现了问题')
    } else if (res.statusCode === HTTP_STATUS.FORBIDDEN) {
      return logError('api', '没有权限访问')
    } else if (res.statusCode === HTTP_STATUS.AUTHENTICATE) {
      this.processUnauthentication(res);
      return logError('api', '请先登录')
    } else if (res.statusCode === HTTP_STATUS.SERVER_ERROR) {
      return logError('api', '服务异常')
    } else if (res.statusCode === HTTP_STATUS.SUCCESS) {
      return res.data
    }
    return true;
  }
  clearToken() {
    //Taro.removeStorageSync('token');
    Storage.clearToken();
  }
  getToken() {
    //const token = Taro.getStorageSync('token');
    const token = Storage.getToken();
    return token;
  }
  composeFullUrl(url) {
    let fullPath = "";
    if (this.gateway) {
      fullPath = this.gateway;
    }

    if (this.bizPath) {
      fullPath = fullPath + this.bizPath + url;
    } else {
      fullPath = fullPath + url;
    }
    console.log('current url is ---->' + fullPath);
    return fullPath;
  }


  fetch_get(url, query,) {
    let that = this;
    let params = { cid: Client.getClientId(), ...query };
    return new Promise((resolve, reject) => {
      request({
        url: this.composeFullUrl(url),
        header: {
          'Content-Type': 'application/json',
          token: this.getToken(),
          // cid: Client.getClientId(),
        },
        data: params,
        method: 'get',
        success(response) {
          //console.log(response);
          if (that.checkResponse(response)) {
            resolve(response.data.data);
          } else {
            reject(response.data);
          }
        },
        fail(error) {
          //console.log(error);
          logError('get', '网络异常')
          reject(error);
          Taro.showToast({ title: '接口异常', icon: 'error', duration: 2000 })
        }
      });
    });
  }
  async fetch_post(url, body, options) {
    let that = this;
    let params = { params: body, head: { cid: Client.getClientId() } };
    return new Promise((resolve, reject) => {
     
        request({
          url: this.composeFullUrl(url),
          header: {
            'Content-Type': 'application/json',
            token: this.getToken(),
          },
          data: params,
          method: 'post',
          success(response) {
            resolve(response.data);
            // if (that.checkResponse(response)) {
            //   resolve(response.data);
            // } else {
            //   reject(response.data);
            // }
          },
          fail(error) {
            console.log("network request exception......");
            reject(error);
            //Taro.showToast({ title: '接口异常', icon: 'error', duration: 2000 })
          }
        });//end request
     
    });

  }

}