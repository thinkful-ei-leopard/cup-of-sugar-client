import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter as Router } from 'react-router-dom';
import MessagesPage from './MessagesPage';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <Router>
      <MessagesPage />
    </Router>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});
