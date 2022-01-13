import React from 'react';

import { View, Image } from '@tarojs/components'
import {BlockList as DataSource} from '../../../../../../src';
import '../style/index.js'

class BlockSelect extends React.Component {
 
  constructor(props){
    super(props);

    let originCheckedList =[];
    for (let item of DataSource.itemsData){
      let newItem = {name:item.name,sourcecodePath:item.sourcecodePath, checked:false}
      originCheckedList.push(newItem);
    }

    this.state={
        checklist:[],
        items:DataSource.itemsData,
        checkedList: originCheckedList,
    }
    
  }

  onClick=(index)=>{
     this.state.checkedList[index].checked = !this.state.checkedList[index].checked ;
     this.setState({checkedList:this.state.checkedList});
     this.props.onResult(this.state.checkedList);

  }

  render() {
    const that = this;
    const { ...props } = this.props;
    console.log('itemsData', that.state.items);

  
    return (

      <View {...props} className="block-select-wrapper" >
        <View className="block-select">
          {DataSource.itemsData.map((item,index) => {
            let Component = item.component;
            return (
              <View key={item.name} className="block" >
                <View className="block-content" >
                  <Component key={item.name} />
                  <View className={`block-text  ${ that.state.checkedList[index].checked ?'checked':''}`} onClick={()=>{that.onClick(index)}}>{item.name}</View>
                </View>
              </View>
            );
          })}
        </View>
      </View>
    );
  }
}

export default BlockSelect;
