import React from 'react';
import {PostsContext, UserContext, ContextWrapper} from './UserContext'

const ProvideCombinedContext = (props) => {
  return (
    <UserContext.Consumer>
      {(context1) => (
        <PostsContext.Consumer>
          {(context2) => (
            <ContextWrapper.Provider value={{ context1, context2 }}>
              {props.children}
            </ContextWrapper.Provider>
          )}
        </PostsContext.Consumer>
      )}
    </UserContext.Consumer>
  );
};
export default ProvideCombinedContext;
