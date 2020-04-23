import React, { Component } from 'react';

const PostsContext = React.createContext({
  posts: [],
  comments: [],
  setPosts: () => {},
  setComments: () => {},
  addPost: () => {},
});

export default PostsContext;

export class PostsProvider extends Component {
  state = {
    posts: [],
    comments: [],
  };

  setComments = (comments) => {
    this.setState({ comments });
  };

  setPosts = (posts) => {
    this.setState({ posts });
  };

  addPost = (post) => {
    const { posts } = this.state;
    this.setState({ posts: [...posts, post] });
  };

  render() {
    const value = {
      posts: this.state.posts,
      comments: this.state.comments,
      setPosts: this.setPosts,
      setComments: this.setComments,
      addPost: this.addPost,
    };

    return (
      <PostsContext.Provider value={value}>
        {this.props.children}
      </PostsContext.Provider>
    );
  }
}
