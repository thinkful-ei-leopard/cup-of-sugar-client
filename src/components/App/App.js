import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import PublicOnlyRoute from '../PublicOnlyRoute/PublicOnlyRoute';
import RegistrationRoute from '../../routes/RegistrationRoute/RegistrationRoute';
import LoginRoute from '../../routes/LoginRoute/LoginRoute';
import DashboardRoute from '../../routes/DashboardRoute/DashboardRoute';
import PostRoute from '../../routes/PostRoute/PostRoute';
import AddPostRoute from '../../routes/AddPostRoute/AddPostRoute';
import NotFoundRoute from '../../routes/NotFoundRoute/NotFoundRoute';
import AddCommentRoute from '../../routes/AddCommentRoute/AddCommentRoute'
import MessagesRoute from '../../routes/MessagesRoute/MessagesRoute'
import ThreadsRoute from '../../routes/ThreadsRoute/ThreadsRoute'
import './App.scss';

export default class App extends Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    console.error(error);
    return { hasError: true };
  }

  render() {
    const { hasError } = this.state;

    return (
      <div className="App">
        <Route component={Header} />
        <main>
          {hasError && <p>There was an error! Oh no!</p>}
          <Switch>
            {/* <Route component={Header}/> */}
            <PrivateRoute exact path="/post/:post_id" component={PostRoute} />
            <PrivateRoute exact path="/threads" component={ThreadsRoute} />
            <PrivateRoute exact path="/thread/:thread_id" component={MessagesRoute} />
            <PrivateRoute exact path={'/'} component={DashboardRoute} />
            <PrivateRoute exact path={'/add-post'} component={AddPostRoute} />
            <PrivateRoute exact path={'/add-comment'} component={AddCommentRoute} />
            <PublicOnlyRoute path={'/register'} component={RegistrationRoute} />
            <PublicOnlyRoute path={'/login'} component={LoginRoute} />
            <Route component={NotFoundRoute} />
          </Switch>
        </main>
      </div>
    );
  }
}
