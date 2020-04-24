import React from 'react';
import Post from './Post/Post';
import PostsContext from '../../contexts/PostsContext';
import styles from './PostsList.module.scss';

export default class PostsList extends React.Component {
  state = {
    refresh: false
  }

  static contextType = PostsContext;

  deletePost = (id) => {
    this.context.deletePost(id);
  };


  render() {
    const { posts } = this.context;
    console.log(this.state)
    console.log(this.context.posts)
    if(this.state.refresh === true) {
      return(
        <ul className={styles.postsList}>
        {posts.map((post) => (
          <Post key={post.id} post={post} className={styles.Post} refreshPage={this.refreshPage}/>
        ))}
      </ul>
      )
    }
    return (
      <ul className={styles.postsList}>
        {posts.map((post) => (
          <Post key={post.id} post={post} className={styles.Post} deletePost={this.deletePost} />
        ))}
      </ul>
    );
  }
}
