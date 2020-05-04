import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter as Router } from 'react-router-dom';
import UserPostsButton from './UserPostsButton';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <Router>
      <UserPostsButton />
    </Router>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});
