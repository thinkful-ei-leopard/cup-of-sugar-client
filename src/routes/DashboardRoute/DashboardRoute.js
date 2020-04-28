import React, { Component } from 'react';
import Dashboard from '../../components/Dashboard/Dashboard';
import PostsContext from '../../contexts/PostsContext';
import PostsApiService from '../../services/posts-api-service';
import CommentsApiService from '../../services/comments-api-service';

export class DashboardRoute extends Component {
  static contextType = PostsContext;

  componentDidMount() {
    this.getPosts();
    this.getComments();
  }

  async getComments() {
    const comments = await CommentsApiService.getComments();
    this.context.setComments(comments);
  }

  async getPosts() {
    const posts = await PostsApiService.getPosts();
    console.log(this.context)
    this.context.setPosts(posts);
  }

  render() {
    return (
      <div>
        <Dashboard />
      </div>
    );
  }
}

export default DashboardRoute;
