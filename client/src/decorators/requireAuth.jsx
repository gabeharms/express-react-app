import React from 'react';

const requireAuth = WrappedComponent => (props) => {
  if (props.token) {
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
