import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter as Router } from 'react-router-dom';
import ThreadsList from './ThreadsList';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <Router>
      <ThreadsList />
    </Router>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});
