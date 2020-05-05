import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter as Router } from 'react-router-dom';
import GiveIcon from './GiveIcon';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <Router>
      <GiveIcon />
    </Router>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});
