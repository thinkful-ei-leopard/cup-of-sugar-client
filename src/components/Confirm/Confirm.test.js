import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter as Router } from 'react-router-dom';
import Confirm from './Confirm';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <Router>
      <Confirm title="Confirm" description="test" children={() => {}}  />
    </Router>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});
