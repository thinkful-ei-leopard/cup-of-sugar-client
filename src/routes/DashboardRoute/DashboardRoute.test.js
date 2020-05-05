import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter as Router } from 'react-router-dom';
import DashboardRoute from './DashboardRoute';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <Router>
      <DashboardRoute />
    </Router>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});
