import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter as Router } from 'react-router-dom';
import AddCommentRoute from './AddCommentRoute';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <Router>
      <AddCommentRoute />
    </Router>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});
