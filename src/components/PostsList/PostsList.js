import React from 'react';
import Post from './Post/Post';
import PostsContext from '../../contexts/PostsContext';

export default class PostsList extends React.Component {
  static contextType = PostsContext;
  render() {
    const { posts } = this.context;
    return (
      <ul>
        {PostsContext.posts.map((post) => (
          <Post post={post} />
        ))}
      </ul>
    );
  }
}
