
import { View, Text,Image } from '@tarojs/components'
import Taro from '@tarojs/taro'


import "taro-ui/dist/style/components/button.scss" // 按需引入

import "taro-ui/dist/style/components/icon.scss";

import {BasePage,ClientUser} from "../../../../src/base";

import './index.less'

let defaultAvatarUrl = 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png';

const userInfo = {
  profile:{
    avatarUrl: '',
    nickname: '匿名用户',
    newFollows: 300,
    eventCount: 40,
    followeds: 400,

  },
  level: 4,
}

export default class Index extends BasePage {

  constructor(props) {
    super(props);
    this.state = {
      avatarUrl: defaultAvatarUrl,
      nickname: '匿名用户',
      gender: '',
      userInfo: ClientUser.getUserInfo(),
      isLogin: ClientUser.isLogin(),
      searchValue: ""
    };
  }


  componentDidMount() { 
    console.log('Did Show in  DidMount....');
  }

  componentWillUnmount() {
    console.log('Did Show in  WillUnMount....');
   }

  componentDidShow() { 
    console.log('Did Show in ....');
  
  }

  componentDidHide() { }

  onLogin = () =>{
    ClientUser.obtainUserInfo().then((res)=> {
      console.log(res);
      let gender = '女';
      if (res.gender === 0){
        gender = '男';
      }
      this.setState({userInfo:res,isLogin:true,avatarUrl:res.avatarUrl,nickname:res.nickName,gender:gender})
    });
  }
  signIn=()=> {
  
    this.gotoPage({url:'/pages/user/login/index'});
    console.log('gotopage.....')
  
  }
  signOut(pageName) {
    Taro.showToast({
      title: "正在开发中，敬请期待",
      icon: "none"
    });
  }

  goPage =(pageName) =>{
    console.log('test gotopage')
    this.gotoPage({
      url: `/pages/history/index`
    })

  }
  

  render() {
    const that = this;
    
    return (
      <View className='page'>

        <View className="header">
          <View className="header__left" >
            <Image
              src={that.state.avatarUrl}
              className="header__img"
            />
            <View className="header__info">
              <View className="header__info__name">
                {that.state.nickname}
              </View>
              {(!this.state.isLogin) && <View  onClick={this.onLogin.bind(this)}>
                <Text className="header__info__level">微信授权登录</Text>
              </View> }
            </View>
          </View>
          
          
        </View>

        <View className="user_count">
        
        </View>
       

        <View className="user_brief">
        
          <View className="user_brief__item">
            <Image
              className="user_brief__item__img"
              src={require("../../assets/images/my/my_collection_icon.png")}
            />
            <View
              className="user_brief__item__text"
            >
              <Text>性别:</Text>
              <Text>{that.state.gender}</Text>
            </View>
          </View>
        
          <View className="user_brief__item">
            <Image
              className="user_brief__item__img"
              src={require("../../assets/images/my/recent_play.png")}
            />
            <View
              className="user_brief__item__text"
              onClick={this.goPage.bind(this, "recentPlay")}
            >
              <Text>最近浏览</Text>
              <Text className="at-icon at-icon-chevron-right"></Text>
            </View>
          </View>
       </View>
      
        <View className="page page-index">
      
        </View>
      </View>
     
    )
  }
}
