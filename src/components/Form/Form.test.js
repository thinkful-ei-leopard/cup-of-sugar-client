import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter as Router } from 'react-router-dom';
import { Label, Input, Required, Textarea } from './Form';

it('Label renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <Router>
      <Label />
    </Router>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});

it('Input renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <Router>
      <Input />
    </Router>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});

it('Required renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <Router>
      <Required />
    </Router>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});

it('Textarea renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <Router>
      <Label />
    </Router>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});
