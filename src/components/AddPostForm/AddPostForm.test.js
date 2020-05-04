import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter as Router } from 'react-router-dom';
import AddPostForm from './AddPostForm';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <Router>
      <AddPostForm />
    </Router>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});
