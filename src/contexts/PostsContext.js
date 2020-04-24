import React, { Component } from 'react';

const PostsContext = React.createContext({
  posts: [],
  comments: [],
  currentPostId: null,
  setPosts: () => {},
  setComments: () => {},
  addPost: () => {},
  setPostId: () => {}
});

export default PostsContext;

export class PostsProvider extends Component {
  state = {
    posts: [],
    comments: [],
    currentPostId: null
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

  setPostId = (postId) => {
    this.setState({ currentPostId: postId })
  }

  render() {
    const value = {
      posts: this.state.posts,
      comments: this.state.comments,
      currentPostId: this.state.currentPostId,
      setPosts: this.setPosts,
      setComments: this.setComments,
      addPost: this.addPost,
      setPostId: this.setPostId
    };

    return (
      <PostsContext.Provider value={value}>
        {this.props.children}
      </PostsContext.Provider>
    );
  }
}
