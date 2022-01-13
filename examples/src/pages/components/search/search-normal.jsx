
import React from "react";
import { View} from "@tarojs/components";
import { AtButton ,AtIcon,AtSearchBar} from 'taro-ui'
import "taro-ui/dist/style/components/search-bar.scss";
import "taro-ui/dist/style/components/icon.scss";
import {Router} from '../../../common/base';

const Page = (props) => {
    const gotoSearch = function(){
        Router.gotoPage({url: `/pages/my/index`});
    }
    console.log('search-componenet');
    return (
        <View onClick={gotoSearch}>
            <AtSearchBar
                actionName="搜一下"
                disabled={true}
                value=' Search'
                onChange={gotoSearch}
            />
        </View>
    );
};

export default Page;
