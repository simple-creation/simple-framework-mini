import Taro,{showToast} from "@tarojs/taro";
export default class PageHelper{
    static showToast(params){
        showToast(params);
    }
    static setNavigationBarTitle(param){
        Taro.setNavigationBarTitle(param);
    }
        
  
}