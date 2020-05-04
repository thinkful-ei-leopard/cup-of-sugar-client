import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter as Router } from 'react-router-dom';
import User from './User';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <Router>
      <User
        history={{}}
        location={{}}
        match={{}}
        neighbor={{}}
        staticContext={undefined}
        user={{}}
      />
    </Router>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});
