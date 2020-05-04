import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter as Router } from 'react-router-dom';
import Comment from './Comment';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <Router>
      <Comment
        comment={{ date_modified: '2020-05-04T19:25:55.864Z' }}
        deleteComment={() => {}}
      />
    </Router>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});
