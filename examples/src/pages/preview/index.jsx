
import { View } from '@tarojs/components'


import "taro-ui/dist/style/components/button.scss" // 按需引入
import './index.less'
import "taro-ui/dist/style/components/icon.scss";
import "taro-ui/dist/style/components/search-bar.scss";

import {BlockList} from "../../../../src";
import {BasePage} from "../../../../src/base";

export default class Index extends BasePage {

  
  constructor(props){
  
    super(props);

    this.pageId = "PID-PreviewPage";
    this.pageName ="预览页"
    this.state={
      blocks:[],
    }
   
  }
  
  componentDidMount() {
    let that = this;
    super.componentDidMount();
    let params = JSON.parse(this.params().json);
    console.log('params', params,BlockList);
    let selectedBlocks = [];
    params.map((dataItem)=>{  
        if (!dataItem.checked){return}
        console.log(dataItem);
        BlockList.itemsData.map((item)=>{
          if (item.name === dataItem.name){
            selectedBlocks.push(item);
          }
        })
    });
 
    this.setState({blocks:selectedBlocks});
    
  }

  componentWillUnmount() { }

  componentDidShow() {
    super.componentDidShow();
   }

  componentDidHide() { }

  render() {
    let that = this;
    return (
      <View >       
     {
        that.state.blocks.map((item,index)=>{
             let Component = item.component;
             return <Component key={item.name} />
        })
     }
       
      </View>
     
    )
  }
}
