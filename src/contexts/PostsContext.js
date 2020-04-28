/* eslint-disable no-fallthrough */
/* eslint-disable default-case */
import React, { Component } from 'react';

const PostsContext = React.createContext({
  posts: [],
  comments: [],
  currentPostId: null,
  titleSort: null,
  typeSort: null,
  nameSort: null,
  commentsSort: null,
  dateSort: null,
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
    titleSort: null,
    typeSort: null,
    nameSort: null,
    commentsSort: null,
    dateSort: null,
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
    switch(this.state.titleSort) {
      case null:
        this.setState({
          titleSort: true,
          typeSort: null,
          nameSort: null,
          commentsSort: null,
          dateSort: null,
        })
      case true:
        this.setState({
          posts: this.state.posts.sort((a,b) => {
            if (a.title.toLowerCase() < b.title.toLowerCase()) {
              return -1;
            }
            if (a.title.toLowerCase() > b.title.toLowerCase()) {
              return 1;
            }
            return 0;
          }),
          titleSort: false
        })
        break;
      case false:
        this.setState({
          posts: this.state.posts.reverse(),
          titleSort: true
        })
        break;
    }
  }

  sortPostsByType = () => {
    switch(this.state.typeSort) {
      case null:
        this.setState({
          typeSort: true,
          titleSort: null,
          nameSort: null,
          commentsSort: null,
          dateSort: null,
        })
      case true:
        this.setState({
          posts: this.state.posts.sort((a,b) => {
            if (a.type.toLowerCase() < b.type.toLowerCase()) {
              return -1;
            }
            if (a.type.toLowerCase() > b.type.toLowerCase()) {
              return 1;
            }
            return 0;
          }),
          typeSort: false
        })
        break;
      case false:
        this.setState({
          posts: this.state.posts.reverse(),
          typeSort: true
        })
        break;
    }
  }

  sortPostsByName = () => {
    switch(this.state.nameSort) {
      case null:
        this.setState({
          nameSort: true,
          typeSort: null,
          titleSort: null,
          commentsSort: null,
          dateSort: null,
        })
      case true:
        this.setState({
          posts: this.state.posts.sort((a,b) => {
            if (a.name.toLowerCase() < b.name.toLowerCase()) {
              return -1;
            }
            if (a.name.toLowerCase() > b.name.toLowerCase()) {
              return 1;
            }
            return 0;
          }),
          nameSort: false
        })
        break;
      case false:
        this.setState({
          posts: this.state.posts.reverse(),
          nameSort: true
        })
        break;
    }
  }

  sortPostsByComments = () =>{
    switch(this.state.commentsSort) {
      case null:
        this.setState({
          nameSort: null,
          typeSort: null,
          titleSort: null,
          commentsSort: true,
          dateSort: null,
        })
      case true:
        this.setState({
          posts: this.state.posts.sort((a,b) => {
            return a.comments - b.comments
          }),
          commentsSort: false
        })
        break;
      case false:
        this.setState({
          posts: this.state.posts.reverse(),
          commentsSort: true
        })
        break;
    }
  }

  sortPostsByDate = () => {
    switch(this.state.dateSort) {
      case null:
        this.setState({
          nameSort: null,
          typeSort: null,
          titleSort: null,
          dateSort: true,
          dateSort: null,
        })
      case true:
        this.setState({
          posts: this.state.posts.sort((a,b) => {
            return new Date(a.date_modified) - new Date( b.date_modified)
          }),
          dateSort: false
        })
        break;
      case false:
        this.setState({
          posts: this.state.posts.reverse(),
          dateSort: true
        })
        break;
    }
  }

  render() {
    const value = {
      posts: this.state.posts,
      comments: this.state.comments,
      currentPostId: this.state.currentPostId,
      titleSort: this.state.titleSort,
      typeSort: this.state.typeSort,
      commentsSort: this.state.commentsSort,
      nameSort: this.state.nameSort,
      dateSort:this.state.dateSort,
      setPosts: this.setPosts,
      setComments: this.setComments,
      addPost: this.addPost,
      addComment: this.addComment,
      setPostId: this.setPostId,
      deletePost: this.deletePost,
      deleteComment: this.deleteComment,
      sortPostsByTitle: this.sortPostsByTitle,
      sortPostsByType: this.sortPostsByType,
      sortPostsByName: this.sortPostsByName,
      sortPostsByComments: this.sortPostsByComments,
      sortPostsByDate: this.sortPostsByDate,
    };

    return (
      <PostsContext.Provider value={value}>
        {this.props.children}
      </PostsContext.Provider>
    );
  }
}
