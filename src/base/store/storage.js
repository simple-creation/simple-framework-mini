//import Taro from '@tarojs/taro'
import {setStorageSync,getStorageSync,removeStorageSync} from '@tarojs/taro'

export default class ClientStorage {
    static setItem(key,value){
        setStorageSync(key, value);
    }
    static getItem(key){
        return getStorageSync(key);
    }
    static removeItem(key){
        removeStorageSync(key);
    }
    static saveToken(token) {
        //localStorage.setItem('web_token', token);
        setStorageSync('token', token);
    }
    static clearToken() {
        removeStorageSync('token');
        //localStorage.removeItem('web_token');
    }
    static getToken() {
        const token = getStorageSync('token');
        return token;//localStorage.getItem('web_token');
    }
}