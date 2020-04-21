import React, { Component } from 'react';
import Dashboard from '../../components/Dashboard/Dashboard';
import PostsContext from '../../contexts/PostsContext';
import PostsApiService from '../../services/posts-api-service';

export class DashboardRoute extends Component {
  static contextType = PostsContext;

  componentDidMount() {
    this.getPosts();
  }

  async getPosts() {
    const posts = await PostsApiService.getPosts();
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
