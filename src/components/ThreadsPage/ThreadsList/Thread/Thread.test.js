import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Thread from './Thread';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <Router>
      <Thread thread={{}} user={{}} />
    </Router>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});

it('renders the UI as expected', () => {
  const tree = renderer
    .create(
      <Router>
        <Thread thread={{}} user={{}} />
      </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
