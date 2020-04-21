import React, { Component } from 'react';

const PostsContext = React.createContext({
  posts: [],
  comments: [],
  setPosts: () => {},
  setComments: () => {},
});

export default PostsContext;

export class PostsProvider extends Component {
  state = {
    posts: [],
    comments:[]
  };

  setComments = (comments) => {
    this.setState({ comments });
  };

  setPosts = (posts) => {
    this.setState({ posts });
  };

  render() {
    const value = {
      setPosts: this.setPosts(),
      posts: this.state.posts,
    };

    return (
      <PostsContext.Provider value={value}>
        {this.props.children}
      </PostsContext.Provider>
    );
  }
}
