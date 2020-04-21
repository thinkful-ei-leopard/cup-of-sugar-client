import React, { Component } from 'react';

const PostsContext = React.createContext({
  posts: [],
});

export default PostsContext;

export class PostsProvider extends Component {
  state = {
    posts: [],
  };

  setPosts = (posts) => {
    this.setState({ posts });
  };

  render() {
    const value = {
      posts: this.state.posts,
    };

    return (
      <PostsContext.Provider value={value}>
        {this.props.children}
      </PostsContext.Provider>
    );
  }
}
