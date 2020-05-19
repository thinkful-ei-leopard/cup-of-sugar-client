import React, { Component } from 'react';
import PostsContext from '../../contexts/PostsContext';
import { Input, Label } from '../Form/Form';

export class SearchPosts extends Component {
  static contextType = PostsContext;

  handleChange = (e) => {
    this.context.filterPostsByTitle(e.target.value);
  };

  render() {
    return (
      <form>
        <Label htmlFor="search-input"> Search posts: </Label>
        <Input
          id="search-input"
          name="search"
          placeholder="Insert query here"
          type="search"
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default SearchPosts;
