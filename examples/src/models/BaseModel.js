// @ts-ignore
/* eslint-disable */
import Taro from '@tarojs/taro'
import {Model} from '../../../src/base';


const gateway = config.gateway;
console.log('gateway...', gateway);

export default class BaseModel {
  constructor(props) {
    if (props && props.bizPath) {
      this.bizPath = props.bizPath;
    }
    if (props && props.gateway) {
      this.gateway = props.gateway;
    } else {
      this.gateway = gateway;
    }
  }

  save_token = (token) => {
    return new Model().saveToken(token)
  }

  clear_token = () => {
    return new Model().clearToken()
  }

  get_token = () => {
    return new Model().getToken()
  }

  fetch_post = (url, params, options) => {
    return new Model({ gateway: this.gateway, bizPath: this.bizPath }).fetch_post(url, params, options);
    //.catch((error)=>{

    //   if (error.status == 401){
    //     console.log("enter ttthere")
    //     //Router.gotoPage({url:'pages/my/index'});
    //     Taro.reLaunch({ url: "pages/user/login/index"});
    //   }else{
    //      Promise.reject(error);
    //   }
    // });
  }
  fetch_get = (url, query) => {
    return new Model({ gateway: this.gateway, bizPath: this.bizPath }).fetch_get(url, query).catch((error)=>{

      if (error.status == 401){
        console.log("enter there")
        Router.gotoPage({url:'pages/my/index'});
      }else{
         Promise.reject(error);
      }
    });
  }
}
