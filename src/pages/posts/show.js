import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

export default class PostShow extends Component {
    state = {
      post: {}
    }
    config = {
        navigationBarTitleText: 'Posts'
    }
    handleClick(name, event) {
      console.log(event)
      console.log(`Hello, ${name}`)
    }
    async componentWillMount () {
      const response = await Taro.request({
        url: `${API_HOST}/posts/${this.$router.params.id}`
      })
      this.setState({
        post: response.data
      })
      Taro.setNavigationBarTitle({
        title: response.data.title
      })
    }
    render() {
      return (
          <View>
            <img mode="aspectFill" className="card-img-top" src={ this.state.post.imageUrl}></img>
            <View className="card-body no-border">
              <View className="card-title">{this.state.post.title}</View>
              <View className="card-subtitle">{this.state.post.author}</View>
              <View className="card-text">{this.state.post.description}</View>
            </View>
          </View>
      )
    }
}