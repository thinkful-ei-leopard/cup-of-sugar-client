import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
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

it('renders the UI as expected', () => {
  const tree = renderer
    .create(
      <Router>
        <Post
          className={undefined}
          deletePost={() => {}}
          post={{ title: '', date_modified: '2020-05-04T19:25:55.864Z' }}
        />
      </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
