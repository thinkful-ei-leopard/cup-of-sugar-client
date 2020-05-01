import React, { Component } from 'react';
import UserContext from '../../contexts/UserContext';
import { Input, Label } from '../../Form/Form';

export class SearchPosts extends Component {
  static contextType = UserContext;

  handleChange = (e) => {
    this.context.filterUsersByName(e.target.value);
  };

  render() {
    return (
      <form>
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
