import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

export default class PostIndex extends Component {
    state = {
     posts: []
    }
    config = {
        navigationBarTitleText: 'Posts'
    }
    handleClick(id, event) {
      Taro.navigateTo({
        url: `/pages/posts/show?id=${id}`
      })
    }
   async componentWillMount () {
     const response =  await Taro.request({
        url: `${API_HOST}/posts`
      }) 
      this.setState({
        posts: response.data
      })
      console.log(response.data)
    }
    render() {
      return (
          <View className="container">
              { this.state.posts.map((post) =>
                 <View className="card" key={post.id} onClick={this.handleClick.bind(this, post.id)}>
                  <img mode="aspectFill" className="card-img-top" src={ post.imageUrl}></img>
                  <View className="card-body">
                    <View className="card-title">{post.title}</View>
                    <View className="card-subtitle">{post.author}</View>
                  </View>
                 </View>
                )
              }
          </View>
      )
    }
}