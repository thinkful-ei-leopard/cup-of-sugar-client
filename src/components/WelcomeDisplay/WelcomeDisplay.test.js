import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter as Router } from 'react-router-dom';
import WelcomeDisplay from './WelcomeDisplay';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <Router>
      <WelcomeDisplay />
    </Router>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});
