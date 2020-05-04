import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter as Router } from 'react-router-dom';
import SearchUsers from './SearchUsers';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <Router>
      <SearchUsers />
    </Router>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});
