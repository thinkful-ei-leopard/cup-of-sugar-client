import React, { Component } from 'react';
import UserContext from '../../../contexts/UserContext';
import { Input, Label } from '../../Form/Form';
import styles from './SearchUsers.module.scss';

export class SearchPosts extends Component {
  static contextType = UserContext;

  handleChange = e => {
    this.context.filterUsersByName(e.target.value);
  };

  render() {
    return (
      <form className={styles.searchUsersForm}>
        <Label htmlFor="search-input"> Search Neighbors: </Label>
        <Input
          id="search-input"
          name="search"
          type="search"
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default SearchPosts;
