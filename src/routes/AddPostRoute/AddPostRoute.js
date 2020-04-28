import React, { Component } from 'react';
// import styles from './AddPostRoute.module.scss';
import AddPostForm from '../../components/AddPostForm/AddPostForm';
import { withRouter } from 'react-router-dom';

export class AddPostRoute extends Component {
  render() {
    const { history, location } = this.props;
    return (
      <>
        <AddPostForm history={history} location={location} />
      </>
    );
  }
}

export default withRouter(AddPostRoute);
