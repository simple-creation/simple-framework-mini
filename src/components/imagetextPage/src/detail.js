import React from 'react';
import { View, Text, RichText,  Image } from '@tarojs/components'

import * as RichTextHelper from '../../../utils';

import '../style';

export default class Index extends React.PureComponent {

    config = {
        navigationBarTitleText: '详情页'
    }

   constructor(props){
    super(props)
    this.state = {
        news: {
            title: 'news',
            subTitle: 'subTitle....',
            image: '',
            content: '暂无内容',
            author: 'cxy',
        }
    }

   }

    componentDidMount() {
        let that = this;
    }

    render() {
        let that = this;
        let news = this.state.news;
        const contentText = news.content;

        return (
            <View className="container">
                <View className='head-image-wrapper' >
                    <Image src={`${news.image}`} className="head-image"></Image>
                </View>
                <View className="author-date">
                   
                    <Text className="author">{news.author}</Text>
                   
                </View>
                <Text className="title">{news.title}</Text>

                <View className="tool">
                    <View className="circle-img">
                    </View>
                    <View className="horizon"></View>
                </View>
                <View>
                    <RichText nodes={RichTextHelper.convertRichTextImage(contentText)} />

                </View>


            </View>


        )
    }
}
