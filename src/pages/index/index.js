import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

import { AtButton } from 'taro-ui'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className="index">
        <Text>hello ~</Text>
        <AtButton type='primary' className="my-3">按钮</AtButton>
        <AtButton type='secondary' className="my-3">按钮</AtButton>
      </View>
    )
  }
}
