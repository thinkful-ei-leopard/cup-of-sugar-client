import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
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

it('renders the UI as expected', () => {
  const tree = renderer
    .create(
      <Router>
        <User
          history={{}}
          location={{}}
          match={{}}
          neighbor={{}}
          staticContext={undefined}
          user={{}}
        />
      </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
