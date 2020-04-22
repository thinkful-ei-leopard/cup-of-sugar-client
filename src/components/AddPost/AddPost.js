import React, { Component } from 'react';
import PostsApiService from '../../services/posts-api-service';
import { Input, Required, Label } from '../Form/Form';
import styles from './AddPost.module.scss';

export class AddPost extends Component {
  handleSubmit(e) {
    e.preventDefault();
  }

  firstInput = React.createRef();

  render() {
    return (
      <section className={styles.AddPost}>
        <form
          className={styles.addPostForm}
          onSubmit={(e) => this.handleSubmit(e)}>
          <Input ref={this.firstInput} />
          <div>WHAT THE HELL</div>
        </form>
      </section>
    );
  }
}

export default AddPost;
