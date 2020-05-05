import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter as Router } from 'react-router-dom';
import PublicOnlyRoute from './PublicOnlyRoute';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <Router>
      <PublicOnlyRoute component={'test'} path="test" />
    </Router>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});
