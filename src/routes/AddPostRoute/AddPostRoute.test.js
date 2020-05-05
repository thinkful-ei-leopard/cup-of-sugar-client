import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter as Router } from 'react-router-dom';
import AddPostRoute from './AddPostRoute';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <Router>
      <AddPostRoute />
    </Router>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});
