import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Message from './Message';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <Router>
      <Message
        currentThread={null}
        handleMessageDelete={() => {}}
        message={{}}
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
        <Message
          currentThread={null}
          handleMessageDelete={() => {}}
          message={{}}
        />
      </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
