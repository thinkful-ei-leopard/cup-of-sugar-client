import React, { Component } from 'react';
import AddCommentForm from '../../components/AddCommentForm/AddCommentForm';
import { withRouter } from 'react-router-dom';

export class AddCommentRoute extends Component {
  render() {
    const { history, location } = this.props;
    return (
      <>
        <AddCommentForm history={history} location={location} />
      </>
    );
  }
}

export default withRouter(AddCommentRoute);