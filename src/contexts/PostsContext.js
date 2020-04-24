import React, { Component } from 'react';

const PostsContext = React.createContext({
  posts: [],
  comments: [],
  currentPostId: null,
  setPosts: () => {},
  setComments: () => {},
  addPost: () => {},
  addComment: () => {},
  setPostId: () => {},
  deletePost: () => {},
  deleteComment: () => {},
});

export default PostsContext;

export class PostsProvider extends Component {
  state = {
    posts: [],
    comments: [],
    currentPostId: null,
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

  deletePost = (postId) => {
    this.setState({
      posts: this.state.posts.filter((post) => post.id !== postId),
    });
  };

  addComment = (comment) => {
    console.log('adding comment')
    const { comments } = this.state;
    this.setState({ comments: [...comments, comment] });
  };

  setPostId = (postId) => {
    this.setState({ currentPostId: postId });
  };

  deleteComment = (commentId) => {
    this.setState({
      comments: this.state.comments.filter(
        (comment) => comment.id !== commentId
      ),
    });
  };

  render() {
    const value = {
      posts: this.state.posts,
      comments: this.state.comments,
      currentPostId: this.state.currentPostId,
      setPosts: this.setPosts,
      setComments: this.setComments,
      addPost: this.addPost,
      addComment: this.addComment,
      setPostId: this.setPostId,
      deletePost: this.deletePost,
      deleteComment: this.deleteComment,
    };

    return (
      <PostsContext.Provider value={value}>
        {this.props.children}
      </PostsContext.Provider>
    );
  }
}
