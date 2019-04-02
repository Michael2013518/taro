import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

import { AtButton, AtList, AtListItem } from 'taro-ui'

export default class Index extends Component {
  state = {
    products: []
  }
  config = {
    navigationBarTitleText: '首页'
  }

  async componentWillMount () { 
    const response = await Taro.request({
      url: `${ API_HOST }/products`
    })
    console.log(response)
    this.setState({
      products: response.data
    })
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const { products } = this.state
    return (
      <View className="index">
        <AtList>
          {
            products.map(product => 
              <AtListItem
                key={ product.id }
                arrow='right'
                title={ product.name }
                note={ '￥' + product.price}
               />
            )
          }
        </AtList>
        <Text>hello ~</Text>
        <AtButton type='primary' className="my-3">按钮</AtButton>
        <AtButton type='secondary' className="my-3">按钮</AtButton>
      </View>
    )
  }
}
