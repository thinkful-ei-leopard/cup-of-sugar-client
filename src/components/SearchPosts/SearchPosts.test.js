import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter as Router } from 'react-router-dom';
import SearchPosts from './SearchPosts';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <Router>
      <SearchPosts />
    </Router>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});
