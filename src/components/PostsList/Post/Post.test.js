import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter as Router } from 'react-router-dom';
import Post from './Post';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <Router>
      <Post
        className={undefined}
        deletePost={() => {}}
        post={{ title: '', date_modified: '2020-05-04T19:25:55.864Z' }}
      />
    </Router>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});
