import { Component } from 'react'
import './app.less'

class App extends Component {

  componentDidMount () {
    //console.log("app start...")
  }

  componentDidShow () {
    //console.log("app didshow...")
  }

  componentDidHide () {}

  componentDidCatchError () {}

  // this.props.children 是将要会渲染的页面
  render () {
    //console.log("app render...")
    return this.props.children
  }
}

export default App
