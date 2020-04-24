import React from 'react';
import Post from './Post/Post';
import PostsContext from '../../contexts/PostsContext';
import styles from './PostsList.module.scss';

export default class PostsList extends React.Component {
  static contextType = PostsContext;

  deletePost = (id) => {
    this.context.deletePost(id);
  };

  render() {
    const { posts } = this.context;
    return (
      <ul className={styles.postsList}>
        {posts.map((post) => (
          <Post
            key={post.id}
            post={post}
            className={styles.Post}
            deletePost={this.deletePost}
          />
        ))}
      </ul>
    );
  }
}
