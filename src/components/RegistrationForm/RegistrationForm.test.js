import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter as Router } from 'react-router-dom';
import RegistrationForm from './RegistrationForm';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <Router>
      <RegistrationForm />
    </Router>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});
