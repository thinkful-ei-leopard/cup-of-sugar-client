import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter as Router } from 'react-router-dom';
import PostView from './PostView';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <Router>
      <PostView comments={[]} deleteComment={() => {}} history={{}} posts={[]} />
    </Router>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});
