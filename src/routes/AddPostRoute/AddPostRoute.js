import React, { Component } from 'react';
import styles from './AddPostRoute.module.scss';
import { Link } from 'react-router-dom';
import AddPostForm from '../../components/AddPostForm/AddPostForm';
import { withRouter } from 'react-router-dom';

export class AddPostRoute extends Component {
  render() {
    const { history, location } = this.props;
    return (
      <div>
        <AddPostForm history={history} location={location} />
      </div>
    );
  }
}

export default withRouter(AddPostRoute);
