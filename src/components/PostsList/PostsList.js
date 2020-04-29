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
    let { posts, filteredPosts, filterTouched } = this.context;

    if (filterTouched && !filteredPosts.length) {
      posts = [];
    }

    let listPosts =
      posts.length <= filteredPosts.length ||
      (!filteredPosts.length && !filterTouched)
        ? posts
        : filteredPosts;

    return (
      <ul className={styles.postsList}>
        {listPosts.map((post) => (
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
