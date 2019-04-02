import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

class UsreProfile extends Component {
    config = {
        navigationBarTitleText: '我的'
    }

    render() {
        return(
            <View>
              <View className="page-demo">
               我的
              </View>
            </View>
        )
    }
}

export default UsreProfile