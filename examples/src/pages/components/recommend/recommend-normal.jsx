

import React from "react";
import { View, Text,Image,Swiper, SwiperItem } from '@tarojs/components'
import { AtButton ,AtIcon,AtSearchBar} from 'taro-ui'
import "taro-ui/dist/style/components/icon.scss";
import {Router} from '../../../common/base';
import "./recommend.less";

const Page = (props) => {
    let list = props.data;
    const gotoPage = function(id){
      //Router.gotoPage({url: target});
      Router.gotoPage({url:'/pages/news/detail?newsId='+ id});
    }
    return (
      <View className="recommend_playlist">
          <View className="recommend_playlist__title">业内新闻</View>
          <View className="recommend_playlist__content">
            {list.map(item => (
              <View
                key={item.id}
                className="recommend_playlist__item"
                onClick={gotoPage.bind(this, item.id)}
              >
                <Image
                  src={`${item.picUrl}`}
                  className="recommend_playlist__item__cover"
                />
                <View className="recommend_playlist__item__cover__num">
                  {/* <Text className="at-icon at-icon-sound"></Text> */}
                  {/* 点击量为{item.playCount} */}
                </View>
                <View className="recommend_playlist__item__title">
                  {item.title}
                </View>
              </View>
            ))}
          </View>
        </View>


    );
};

export default Page;