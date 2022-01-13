
import ClientStorage from '../store/storage';
import Taro from '@tarojs/taro'
import * as dayjs from 'dayjs';


const USER_INFO = '__USER_INFO__'
const __foot_print__  = '__footprint__';

class ClientUser {
    constructor(props) {
        //ClientInfo.init();
    }

    isLogin() {
        const userInfo = this.getUserInfo();
        if (userInfo) {
            return true;
        } else {
            return false;
        }
    }
    getUserInfo() {
        let userInfo = ClientStorage.getItem(USER_INFO);
        if (userInfo){
            return JSON.parse(userInfo);
        }else{
            return userInfo;
        }
        
    }
    saveUserInfo(userInfo) {
        ClientStorage.setItem(USER_INFO, JSON.stringify(userInfo));
        return true;
    }
    obtainUserInfo() {
        return new Promise((resolve, reject) => {
            Taro.getUserProfile({
                desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
                success: (res) => {
                    //   wx.setStorageSync(USER_INFO, JSON.stringify(res.userInfo));
                    console.log('user info....', res.userInfo);
                    this.saveUserInfo(res.userInfo);
                    //callback(res.userInfo);
                    resolve(res.userInfo);
                },
                fail(error) {
                    console.log('failed to obtain wechat userinfo...');
                    reject(error);
                },
            })
        });
    }
    saveFootPrint(pageName){
        let footprinter = {name:pageName,time:dayjs().format()};
        let historyList = [] 
        let oldList = ClientStorage.getItem(__foot_print__);
        if (!oldList){
            historyList.push(footprinter);
        }else{
            historyList = JSON.parse(oldList);
            if (historyList.lenght >= 30 ){
                historyList.shift();
            }
            historyList.push(footprinter);
        }
      
        const historyString = JSON.stringify(historyList)
        ClientStorage.setItem(__foot_print__,historyString);
       
    }
    getFootPrint(){
        
        let historyList = [] 
        let oldList = ClientStorage.getItem(__foot_print__);
        console.log('old history....',oldList);
        if (oldList){
            historyList = JSON.parse(oldList);
        }
        console.log('get visit history', historyList);
        return historyList;
    }
    cleanFootPrint(){
        ClientStorage.removeItem(__foot_print__);
        return true;
    }
}
export default new ClientUser();