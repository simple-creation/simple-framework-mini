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
    if (props && props.errorHandler) {
      this.errorHandler = props.errorHandler;
    }
  }

  saveToken(token) {
    Storage.saveToken(token);
  }
  checkResponse(res) {
    if (res.statusCode === HTTP_STATUS.SUCCESS) {
      return true;
    }
    if (res.statusCode === HTTP_STATUS.NOT_FOUND) {
      logError('api', '请求资源不存在')

    } else if (res.statusCode === HTTP_STATUS.BAD_GATEWAY) {
      logError('api', '服务端出现了问题')

    } else if (res.statusCode === HTTP_STATUS.SERVER_ERROR) {
      logError('api', '服务异常')
    }
    if (this.errorHandler) {
      this.errorHandler(res);
    }
    return false;
  }
  clearToken() {
    //Taro.removeStorageSync('token');
    Storage.clearToken();
  }
  cleanToken() {
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

  async get(url, query,) {
    let that = this;
    let params = { cid: Client.getClientId(), ...query };
    
    return request({
        url: this.composeFullUrl(url),
        header: {
          'Content-Type': 'application/json',
          token: this.getToken(),
          // cid: Client.getClientId(),
        },
        data: params,
        method: 'get'
      }).then((response)=>{
        return response.data;
     });
  }

  async post(url, body, options) {
    let that = this;
    let params = { params: body, head: { cid: Client.getClientId() } };
    return  request({
      url: this.composeFullUrl(url),
      header: {
        'Content-Type': 'application/json',
        token: this.getToken(),
      },
      data: params,
      method: 'post'
    }).then((response)=>{
       return response.data;
    });
  }

  async fetch_get(url, query,) {
    let that = this;
    let params = { cid: Client.getClientId(), ...query };
    
    return request({
        url: this.composeFullUrl(url),
        header: {
          'Content-Type': 'application/json',
          token: this.getToken(),
          // cid: Client.getClientId(),
        },
        data: params,
        method: 'get'
      }).then((response)=>{
        return response.data.data;
     });
  }
  
  async fetch_post(url, body, options) {
    let that = this;
    let params = { params: body, head: { cid: Client.getClientId() } };
    return  request({
      url: this.composeFullUrl(url),
      header: {
        'Content-Type': 'application/json',
        token: this.getToken(),
      },
      data: params,
      method: 'post'
    }).then((response)=>{
       return response.data;
    });
  }

  // fetch_get(url, query,) {
  //   let that = this;
  //   let params = { cid: Client.getClientId(), ...query };
  //   return new Promise((resolve, reject) => {
  //     request({
  //       url: this.composeFullUrl(url),
  //       header: {
  //         'Content-Type': 'application/json',
  //         token: this.getToken(),
  //         // cid: Client.getClientId(),
  //       },
  //       data: params,
  //       method: 'get',
  //       success(response) {
  //         //console.log(response);
  //         if (that.checkResponse(response)) {
  //           resolve(response.data.data);
  //         } else {
  //           reject(response.data);
  //         }
  //       },
  //       fail(error) {
  //         logError('get', '网络异常')
  //         reject(error);
  //       }
  //     }).catch((e) => { console.log('Network exception is existed') });//end request
  //   });
  // }
  // async fetch_post(url, body, options) {
  //   let that = this;
  //   let params = { params: body, head: { cid: Client.getClientId() } };
  //   return new Promise((resolve, reject) => {

  //       request({
  //         url: this.composeFullUrl(url),
  //         header: {
  //           'Content-Type': 'application/json',
  //           token: this.getToken(),
  //         },
  //         data: params,
  //         method: 'post',
  //         success(response) {
  //           resolve(response.data);
  //         },
  //         fail(error) {
  //           console.log('net exception -->',error);
  //           reject(error);
  //         }
  //       }).catch((e) => {console.log('Network exception is existed')});//end request 
  //   });
  // }



}