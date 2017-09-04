import React from 'react';
import {isAuthed} from '../services/httpClient'

const requireAuth = WrappedComponent => (props) => {
  if (isAuthed()) {
    return (
      <WrappedComponent {...props} />
    )
  }
  else {
    props.history.push("/")
    return(<p>Unauthorized</p>)
  }
};

export default requireAuth;
