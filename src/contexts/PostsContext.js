import React, { Component } from 'react';

const PostsContext = React.createContext({
  posts: [],
  comments: [],
  currentPostId: null,
  titleSorted: false,
  setPosts: () => {},
  setComments: () => {},
  addPost: () => {},
  addComment: () => {},
  setPostId: () => {},
  deletePost: () => {},
  deleteComment: () => {},
  sortPostsByKey: () => {}
});

export default PostsContext;

export class PostsProvider extends Component {
  state = {
    posts: [],
    comments: [],
    currentPostId: null,
    titleSorted: false,
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

  sortPostsByTitle = () => {
    this.setState({
      titleSorted: !this.state.titleSorted
    })

    if(this.state.titleSorted) {
      this.setState({
        posts: this.state.posts.sort((a,b) => {
          if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1;
          }
          if (a.title.toLowerCase() > b.title.toLowerCase()) {
            return 1;
          }
          return 0;
        })
      })
    }

    this.setState({
      posts: this.state.posts.reverse()
    })
  }

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
      sortPostsByTitle: this.sortPostsByTitle,
    };

    return (
      <PostsContext.Provider value={value}>
        {this.props.children}
      </PostsContext.Provider>
    );
  }
}
