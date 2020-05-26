import React, { Component } from 'react';
import PostsContext from '../../contexts/PostsContext';
import { Input, Label } from '../Form/Form';
import styles from './SearchPosts.module.scss';

export class SearchPosts extends Component {
  static contextType = PostsContext;

  handleChange = e => {
    this.context.filterPostsByTitle(e.target.value);
  };

  render() {
    return (
      <form className={styles.searchPostsForm}>
        <Label htmlFor="search-input"> Search posts: </Label>
        <Input
          id="search-input"
          className={styles.searchPostsInput}
          name="search"
          type="search"
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default SearchPosts;
