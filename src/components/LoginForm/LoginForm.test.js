import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter as Router } from 'react-router-dom';
import LoginForm from './LoginForm';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <Router>
      <LoginForm />
    </Router>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});
