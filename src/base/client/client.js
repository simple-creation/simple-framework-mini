
import ClientStorage from '../store/storage';
import ClientInfo from "./client-info";

import Taro from '@tarojs/taro';


class Client {
    constructor(props) {
        ClientInfo.init();
    }
   
    getClientId() {
        return ClientInfo.get('clientId');
    }
    getClientInfo() {
        return ClientInfo.getData();
    }
    // getUserInfo() {
    //     let userInfo = ClientStorage.getItem('userInfo');
    //     return userInfo;
    // }
    // setUserInfo(userInfo){
    //     return true;
    // }
    // saveFootPrint(pageName){
    //     let footprinter = {name:pageName,time:dayjs().format()};
    //     let historyList = [] 
    //     let oldList = ClientStorage.getItem(__foot_print__);
    //     if (!oldList){
    //         historyList.push(footprinter);
    //     }else{
    //         historyList = JSON.parse(oldList);
    //         if (historyList.lenght >= 30 ){
    //             historyList.shift();
    //         }
    //         historyList.push(footprinter);
    //     }
      
    //     const historyString = JSON.stringify(historyList)
    //     ClientStorage.setItem(__foot_print__,historyString);
       
    // }
    // getFootPrint(){
        
    //     let historyList = [] 
    //     let oldList = ClientStorage.getItem(__foot_print__);
    //     console.log('old history....',oldList);
    //     if (oldList){
    //         historyList = JSON.parse(oldList);
    //     }
    //     console.log('get visit history', historyList);
    //     return historyList;
    // }
    // cleanFootPrint(){
    //     ClientStorage.removeItem(__foot_print__);
    //     return true;
    // }
}
export default new Client();