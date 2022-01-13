

import React from "react";
import { View, Text, Image} from '@tarojs/components'
import "taro-ui/dist/style/components/icon.scss";
import "../style/entrypoint.less";
import {DemoData} from '../demo.data';

const Page = (props) => {
  let blockData = DemoData;
  if (props && props.data){
    blockData = props.data;
  }
  
  const onClickHandle =(item)=>{
    if (props.onItemClick){
      props.onItemClick(item);
    }
  }
  if(!blockData.itemsData){blockData.itemsData=[];}
  console.log('functionlist...', blockData);
  return (
    <View className="handle_list">
      <View className="list_title">{blockData.title.main}</View>
      
      {blockData.itemsData.map((item,index) => (
        <View
          key={`${index}${item.id}`}
          className="handle_list__item"
          onClick={()=>{onClickHandle(item)}}
        >
          <View className="handle_list__item__icon-wrap">

            <Image src={item.image} className="handle_list_item__icon" />
          </View>

          <Text className="handle_list__item__text">{item.content}</Text>
        </View>
      ))}
    </View>


  );
};

export default Page;