import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import SearchBar  from '../../components/search-bar'

class ShopIndex extends Component {
  config = {
    navigationBarTitleText: 'W-store'
  }

  render() {
    return(
      <View>
        <SearchBar/>
        <View className="page-demo">
         首页
        </View>
      </View>
    )
  }
}

export default ShopIndex