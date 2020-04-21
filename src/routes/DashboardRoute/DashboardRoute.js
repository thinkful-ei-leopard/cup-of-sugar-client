import React, { Component } from 'react';
import Dashboard from '../../components/Dashboard/Dashboard';
import PostsContext from '../../contexts/PostsContext';

export class DashboardRoute extends Component {

static contextType = PostsContext;

  render() {
    return (
      <div>
        <Dashboard />
      </div>
    );
  }
}

export default DashboardRoute;
