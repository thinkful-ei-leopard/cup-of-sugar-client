import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter as Router } from 'react-router-dom';
import PostRoute from './PostRoute';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <Router>
      <PostRoute />
    </Router>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});
