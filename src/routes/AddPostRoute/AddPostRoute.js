import React, { Component } from 'react';
import styles from './AddPostRoute.module.scss';
import AddPost from '../../components/AddPost/AddPost'

export class AddPostRoute extends Component {
  render() {
    return (
      <div>
        <AddPost />
      </div>
    );
  }
}

export default AddPostRoute;
