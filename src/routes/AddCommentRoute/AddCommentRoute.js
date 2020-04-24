import React, { Component } from 'react';
import styles from './AddCommentRoute.module.scss';
import AddCommentForm from '../../components/AddCommentForm/AddCommentForm';
import { withRouter } from 'react-router-dom';

export class AddCommentRoute extends Component {
  render() {
    const { history, location } = this.props;
    return (
      <div>
          <h1>LALALALA</h1>
        <AddCommentForm history={history} location={location} />
      </div>
    );
  }
}

export default withRouter(AddCommentRoute);