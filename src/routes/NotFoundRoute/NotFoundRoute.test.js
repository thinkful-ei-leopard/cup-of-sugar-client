import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter as Router } from 'react-router-dom';
import NotFoundRoute from './NotFoundRoute';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <Router>
      <NotFoundRoute />
    </Router>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});
