import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter as Router } from 'react-router-dom';
import MessageForm from './MessageForm';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <Router>
      <MessageForm />
    </Router>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});
