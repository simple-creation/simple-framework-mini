import PageHelper from "./page-helper";
import PageRouter from "../route/router";
import { Component } from "react";
import UbtClient from "../ubt/ubt-client";
import {logDebug} from "../utils/error";
import ClientUser from "../user/ClientUser";

// let ubt_instance = new UbtClient();
export default class BasePage extends Component{
    constructor(props){
        super(props);
        if (props && props.gateway){
            this.gateway = props.gateway;
        }else{
            this.gateway ='';
        }
        if (props && props.bizPath){
            this.bizPath = props.bizPath;
        }else{
            this.bizPath ='';
        }
        this.ubt_instance = new UbtClient({gateway:this.gateway,bizPath: this.bizPath});
    }
    componentDidMount() {
        this.sendPV();        
    }
    componentDidShow() { 
        this.saveFootPrint();
    }
    helper=()=>{
        return  PageHelper;
    }
    ubt=()=>{
        return this.ubt_instance;
    }
    clientUser=()=>{
        return ClientUser;
    }
    gotoPage = (params) => {
        PageRouter.gotoPage(params);
    }
    goto = (params) => {
        PageRouter.gotoPage(params);
    }
    params(){
        return PageRouter.getParams();
    }
    showToast = (params,options) => {
        PageHelper.showToast(params,options);
    }
    sendPV=()=>{
        if(this.pageId){
            this.ubt_instance.ubtSendPV({pageId:this.pageId});
        }
    }
    saveFootPrint=()=>{
        
        if(this.pageName){
            ClientUser.saveFootPrint(this.pageName);
        }  
    }
    debugInfo = (name,info)=>{
        logDebug(name, info);
    }
}