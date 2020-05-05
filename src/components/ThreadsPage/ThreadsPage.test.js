import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter as Router } from 'react-router-dom';
import ThreadsPage from './ThreadsPage';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <Router>
      <ThreadsPage />
    </Router>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});
