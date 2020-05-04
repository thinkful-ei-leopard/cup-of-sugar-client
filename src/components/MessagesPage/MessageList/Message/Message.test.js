import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter as Router } from 'react-router-dom';
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
