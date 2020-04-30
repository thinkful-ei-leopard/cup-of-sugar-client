import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';
import { PostsProvider } from './contexts/PostsContext';
import { ThreadsProvider } from './contexts/ThreadsContext'
import { CloudinaryContext } from "cloudinary-react";
// import { }

import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <UserProvider>
      <PostsProvider>
        <ThreadsProvider>
          <CloudinaryContext cloudName='mmpr'>
            <App />
          </CloudinaryContext>
        </ThreadsProvider>
      </PostsProvider>
    </UserProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
