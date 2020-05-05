import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter as Router } from 'react-router-dom';
import PostsList from './PostsList';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <Router>
      <PostsList />
    </Router>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});
