import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
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

it('renders the UI as expected', () => {
  const tree = renderer
    .create(
      <Router>
        <Comment
          comment={{ date_modified: '2020-05-04T19:25:55.864Z' }}
          deleteComment={() => {}}
        />
      </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
