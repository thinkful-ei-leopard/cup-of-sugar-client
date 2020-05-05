import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter as Router } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <Router>
      <PrivateRoute component={'test'} path="test" />
    </Router>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});
