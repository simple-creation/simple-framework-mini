import React from 'react';

import { View,  Image} from '@tarojs/components'
import {
  Content50DataSource,
} from './data.source';
import '../style/index.js'

class Content5 extends React.PureComponent {
  getChildrenToRender = (data) =>
    data.map((item) => {
      return (
        <View key={item.name}  className="block" >
          <View  className="content5-block-content" >
            <View className="content5-img">
              <Image src={item.img} height="100%" alt="img" />
            </View>
            <View className="content5-text" >{item.content}</View>
          </View>
        </View>
      );
    });

  render() {
    const { ...props } = this.props;
    const dataSource = Content50DataSource;
    const data = dataSource.demoData;
   
    delete props.isMobile;
    const childrenToRender = this.getChildrenToRender(
      data.itemsData
    );
    return (

      <View {...props} className="content5-wrapper" >
        <View className="content5"> 
            {childrenToRender} 
        </View>
      </View>
    );
  }
}

export default Content5;
