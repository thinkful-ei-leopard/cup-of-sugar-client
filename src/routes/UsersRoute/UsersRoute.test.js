import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter as Router } from 'react-router-dom';
import UsersRoute from './UsersRoute';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <Router>
      <UsersRoute />
    </Router>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});
