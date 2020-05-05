import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter as Router } from 'react-router-dom';
import AddCommentForm from './AddCommentForm';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <Router>
      <AddCommentForm />
    </Router>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});
