

import React from "react";
import { View, Text,Image,Swiper, SwiperItem } from '@tarojs/components'
import { AtButton ,AtIcon,AtSearchBar} from 'taro-ui'
import "taro-ui/dist/style/components/icon.scss";
import {Router} from '../../../common/base';
import "./swiper.less";

const Page = (props) => {
    let list = props.data;
    
    const gotoPage = function(target){
      if(target.url){
        Router.gotoPage({url: target.url});
      }
      
    }
    console.log('rerender swipper.............');
    return (
        <Swiper
          className="banner_list"
          indicatorColor="#999"
          indicatorActiveColor="#d43c33"
          circular
          indicatorDots
          autoplay
        >
          {list.map(item => (
            <SwiperItem key={item.id} className="banner_list__item">
              <Image onLoad={()=>{console.log('reload image.........')}} onClick={()=>{gotoPage(item)}} src={item.pic} className="banner_list__item__img" />    
            </SwiperItem>
          ))}
        </Swiper>
    );
};

export default Page;