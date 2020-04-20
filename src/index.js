import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';
import { PostsProvider } from './contexts/PostsContext';

import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <UserProvider>
      <PostsProvider>
        <App />
      </PostsProvider>
    </UserProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
