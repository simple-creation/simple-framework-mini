export default {
  pages: [
    "pages/home/index",
    "pages/preview/index",
    "pages/my/index",
    "pages/user/login/index",  
   
  ],
  window: {
    backgroundTextStyle: "light",
      navigationBarBackgroundColor: "#fff",
      navigationBarTitleText: "WeChat",
      navigationBarTextStyle: "black"
  },
  tabBar: {
    list: [
      {
        text: "创建页面",
        pagePath: "pages/home/index",
        selectedIconPath: "./assets/images/tab-home-current.png",
        iconPath: "./assets/images/tab-home.png"
      }, 
      {
        text: "选择页面",
        pagePath:"pages/my/index",
        selectedIconPath: "./assets/images/tab-cate-current.png",
        iconPath: "./assets/images/tab-cate.png"
      },
     
    ]
  }
}
