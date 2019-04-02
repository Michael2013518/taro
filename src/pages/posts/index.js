import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import SearchBar  from '../../components/search-bar'
import { AtTabBar } from 'taro-ui'

export default class PostIndex extends Component {
    state = {
     current: 0,
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
    handleClick(value) {
      this.setState({
        current: value
      })
      switch (value) {
        case 0:
        Taro.redirectTo({
          url:`/pages/index/index`
        })
        break;
        case 1:
        Taro.redirectTo({
          url:`/pages/shop/index`
        })
        break;
        case 2:
        Taro.redirectTo({
          url:`/pages/user/profile`
        })
        break;
      }
    }
    render() {
      const { posts } = this.state
      return (
          <View className="container">
            <SearchBar/>
              { posts.map((post) =>
                 <View className="card" key={post.id} onClick={this.handleClick.bind(this, post.id)}>
                  <img mode="aspectFill" className="card-img-top" src={ post.imageUrl}></img>
                  <View className="card-body">
                    <View className="card-title">{post.title}</View>
                    <View className="card-subtitle">{post.author}</View>
                  </View>
                 </View>
                )
              }
              <View className="container">
                <AtTabBar fixed tabList={[
                  { title: '首页', iconType: 'home'},
                  { title: '商店', iconType: 'message'},
                  { title: '我的', iconType: 'user'}
                 ]}
                 onClick={this.handleClick.bind(this)}
                 current={this.state.current}
                />
              </View>
          </View>
      )
    }
}