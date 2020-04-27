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
    if(this.state.titleSort === null) {
      this.setState({
        titleSort: true,
        typeSort: null,
        nameSort: null,
        commentsSort: null,
        dateSort: null,
      })
    } else if(this.state.titleSort) {
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
        titleSort: !this.state.titleSort
      })
    } else if(!this.state.titleSort) {
      this.setState({
        posts: this.state.posts.reverse(),
        titleSort: !this.state.titleSort
      })
    }
  }

  sortPostsByType = () => {
    if(this.state.typeSort === null) {
      this.setState({
        typeSort: true,
        titleSort: null,
        nameSort: null,
        commentsSort: null,
        dateSort: null,
      })
    } else if(this.state.typeSort) {
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
        typeSort: !this.state.typeSort
      })
    } else if(!this.state.typeSort) {
      this.setState({
        posts: this.state.posts.reverse(),
        typeSort: !this.state.typeSort
      })
    }
  }

  sortPostsByName = () => {
    if(this.state.nameSort === null) {
      this.setState({
        nameSort: true,
        titleSort: null,
        typeSort: null,
        commentsSort: null,
        dateSort: null,
      })
    } else if(this.state.nameSort) {
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
        nameSort: !this.state.nameSort
      })
    } else if(!this.state.nameSort) {
      this.setState({
        posts: this.state.posts.reverse(),
        nameSort: !this.state.nameSort
      })
    }
  }

  sortPostsByComments = () => {
    if(this.state.commentsSort === null) {
      this.setState({
        nameSort: null,
        titleSort: null,
        typeSort: null,
        commentsSort: true,
        dateSort: null,
      })
    } else if(this.state.commentsSort) {
      this.setState({
        posts: this.state.posts.sort((a,b) => {
          return a.comments - b.comments
        }),
        commentsSort: !this.state.commentsSort
      })
    } else if(!this.state.commentsSort) {
      this.setState({
        posts: this.state.posts.reverse(),
        commentsSort: !this.state.commentsSort
      })
    }
  }

  sortPostsByDate = () => {
    if(this.state.dateSort === null) {
      this.setState({
        nameSort: null,
        titleSort: null,
        typeSort: null,
        dateSort: true
      })
    } else if(this.state.dateSort) {
      this.setState({
        posts: this.state.posts.sort((a,b) => {
          return new Date(a.date) - new Date(b.date)
        }),
        dateSort: !this.state.dateSort
      })
    } else if(!this.state.dateSort) {
      this.setState({
        posts: this.state.posts.reverse(),
        dateSort: !this.state.dateSort
      })
    }
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
