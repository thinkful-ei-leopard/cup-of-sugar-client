import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter as Router } from 'react-router-dom';
import MessageList from './MessageList';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <Router>
      <MessageList />
    </Router>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});
