import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter as Router } from 'react-router-dom';
import MessagesRoute from './MessagesRoute';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <Router>
      <MessagesRoute />
    </Router>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});
