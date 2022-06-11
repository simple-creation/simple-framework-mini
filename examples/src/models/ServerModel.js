// @ts-ignore
/* eslint-disable */
import {Model} from '../../../src/base';

//let ModelOptions = {gateway:"http://localhost:3000"}
let ModelOptions = {gateway:"https://api.thingsminder.com"}
export default class DefaultModel {
  //*********************************API for Category Section ************************************/
  static createPage(params, options) {
    return new Model(ModelOptions).fetch_post('/createPage', params, options);
  }

  static testModel(params, options) {
    return new Model(ModelOptions).fetch_post('/work-order-service/order/findUserOrderDetailList', params, options);
  }
}
