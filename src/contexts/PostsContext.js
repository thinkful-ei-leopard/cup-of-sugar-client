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
      posts: this.state.posts,
      setPosts: this.setPosts,
      setComments: this.setComments
    };

    return (
      <PostsContext.Provider value={value}>
        {this.props.children}
      </PostsContext.Provider>
    );
  }
}
