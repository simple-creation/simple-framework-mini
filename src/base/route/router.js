import Taro ,{getCurrentInstance,} from "@tarojs/taro";
class PageRouter{
    $instance = getCurrentInstance();
    constructor(){
        getCurrentInstance().router.params
    }
    gotoPage(params){
        if (params && params.url){
            Taro.navigateTo({...params});
        }
    }
    getParams(){
        return this.$instance.router.params;
    }    
}
export default new PageRouter();