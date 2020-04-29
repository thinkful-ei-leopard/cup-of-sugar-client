import React, { Component } from 'react'
import Button from '../Button/Button'
import PostsContext from '../../contexts/PostsContext'
import PostsApiService from '../../services/posts-api-service'

export class UserPostsButton extends Component {
  static contextType = PostsContext
  state = {
    buttonClicked: false
  }

  handleClick = async () => {
    if(!this.state.buttonClicked) {
      this.context.filterPostsByUserId(this.props.user.id)
      this.setState({
        buttonClicked: true
      })
    }

    if(this.state.buttonClicked) {
      const posts = await PostsApiService.getPosts();
      this.context.setPosts(posts);
      this.setState({
        buttonClicked: false
      })
    }
  } 

  render() {
    return (
      <Button
        onClick={this.handleClick}
      >
        My posts
      </Button>
    )
  }
}

export default UserPostsButton
