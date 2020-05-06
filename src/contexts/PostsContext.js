/* eslint-disable no-fallthrough */
/* eslint-disable default-case */
import React, { Component } from 'react';

const PostsContext = React.createContext({
  posts: [],
  filteredPosts: [],
  filterTouched: false,
  comments: [],
  currentPostId: null,
  titleSort: null,
  typeSort: null,
  nameSort: null,
  commentsSort: null,
  dateSort: null,
  searchInput: '',
  setPosts: () => {},
  setComments: () => {},
  setPostId: () => {},
  deletePost: () => {},
  deleteComment: () => {},
  filterPostsByTitle: () => {}
});

export default PostsContext;

export class PostsProvider extends Component {
  state = {
    posts: [],
    filteredPosts: [],
    filterTouched: false,
    comments: [],
    currentPostId: null,
    sort: null,
    titleSort: null,
    typeSort: null,
    nameSort: null,
    commentsSort: null,
    dateSort: null
  };

  setComments = comments => {
    this.setState({ comments });
  };

  setPosts = posts => {
    this.setState({ posts });
  };

  editPost = (postId, newPost) => {
    this.setState({
      posts: this.state.posts.map(post => {
        if(post.id === postId){
          post.title = newPost.title
          post.description = newPost.description
        }
  
        return post
      })
    })
  }

  deletePost = postId => {
    this.setState({
      posts: this.state.posts.filter(post => post.id !== postId)
    });
  };

  setPostId = postId => {
    this.setState({ currentPostId: postId });
  };

  deleteComment = commentId => {
    this.setState({
      comments: this.state.comments.filter(comment => comment.id !== commentId)
    });
  };

  sortPostsByKey = key => {
    const setStateValues = () => {
      // eslint-disable-next-line array-callback-return
      return ['title', 'type', 'name', 'comments', 'date'].map(arrayKey => {
        if (arrayKey === key) {
          this.setState({ [`${arrayKey}Sort`]: true });
        }
        this.setState({ [`${arrayKey}Sort`]: null });
      });
    };

    switch (this.state[`${key}Sort`]) {
      case null:
        setStateValues();
      case true:
        if (key === 'comments') {
          this.setState({
            posts: this.state.posts.sort((a, b) => {
              return a.comments - b.comments;
            }),
            commentsSort: false
          });
          break;
        } else if (key === 'date') {
          this.setState({
            posts: this.state.posts.sort((a, b) => {
              return new Date(a.date_modified) - new Date(b.date_modified);
            }),
            dateSort: false
          });
          break;
        }
        this.setState({
          posts: this.state.posts.sort((a, b) => {
            if (a[key].toLowerCase() < b[key].toLowerCase()) {
              return -1;
            }
            if (a[key].toLowerCase() > b[key].toLowerCase()) {
              return 1;
            }
            return 0;
          }),
          [`${key}Sort`]: false
        });
        break;
      case false:
        this.setState({
          posts: this.state.posts.reverse(),
          [`${key}Sort`]: true
        });
        break;
    }
  };

  filterPostsByTitle = async searchInput => {
    const { posts } = this.state;
    const filteredPosts = posts.filter(post => {
      return post.title.toLowerCase().includes(searchInput.toLowerCase());
    });

    this.setState({ filteredPosts, filterTouched: true });
  };

  filterPostsByUserId = userId => {
    this.setState({
      posts: this.state.posts.filter(post => {
        return post.user_id === userId;
      })
    });
  };

  render() {
    const value = {
      posts: this.state.posts,
      filteredPosts: this.state.filteredPosts,
      filterTouched: this.state.filterTouched,
      comments: this.state.comments,
      currentPostId: this.state.currentPostId,
      titleSort: this.state.titleSort,
      typeSort: this.state.typeSort,
      commentsSort: this.state.commentsSort,
      nameSort: this.state.nameSort,
      dateSort: this.state.dateSort,
      setPosts: this.setPosts,
      setComments: this.setComments,
      setPostId: this.setPostId,
      editPost: this.editPost,
      deletePost: this.deletePost,
      deleteComment: this.deleteComment,
      filterPostsByTitle: this.filterPostsByTitle,
      sortPostsByKey: this.sortPostsByKey,
      filterPostsByUserId: this.filterPostsByUserId
    };

    return (
      <PostsContext.Provider value={value}>
        {this.props.children}
      </PostsContext.Provider>
    );
  }
}
