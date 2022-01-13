

import React from "react";
import {Image,Swiper, SwiperItem } from '@tarojs/components'
import {DemoData} from '../demo.data';



const Page = (props) => {

  let data = DemoData;
  if (props && props.data){
    data = props.data;
  }
 

    const gotoPage = function(item){
      if(props.goto){
        if (item.url){
          props.goto(item.url);
        } 
      }else if(props.onItemClick) {
         props.onItemClick(item);
      }

    }

    const list = data.items;
    return (
        <Swiper
          className="banner_list"
          circular
          indicatorDots
          autoplay
        >
          {list.map((item,index)=> (
            <SwiperItem key={index} className="banner_list__item">
              <Image onClick={()=>{gotoPage(item)}} src={item.image} className="banner_list__item__img" />
            </SwiperItem>
          ))}
        </Swiper>
    );
};

export default Page;
