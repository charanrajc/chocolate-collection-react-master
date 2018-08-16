import React from 'react';

const Logout = props => {
  props.doLogout();
  return (<div>
    <h2 className="mt-5">You have successfully logged out. Thanks for your contribution</h2>
  </div>)
}

export default Logout