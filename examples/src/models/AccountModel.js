// @ts-ignore
/* eslint-disable */


import {Model} from '../../../src/base';

let ModelOptions = {gateway:"http://localhost:3000",bizPath:"/account-service/account"}

export default class DefaultModel {
  //*********************************API for Account Section ************************************/
  static  wechatLogin(params, options) {
    return  new Model(ModelOptions).fetch_post('/wechatLogin', params, options);
  }
  static  login(params, options) {
    return  new Model(ModelOptions).fetch_post('/login', params, options);
  }
  
}
