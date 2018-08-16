import React from 'react';
import {Link} from 'react-router-dom';

const style = {
  color: 'gold',
  fontSize: '1.5em'
};

const Status = props => (
  <div className="form-inline mt-2 mt-md-0">
    {props.isLoggedIn ?
      (<div className="form-inline mt-2 mt-md-0">
          <label className="mx-3" style={style}> {`Hello ${props.firstName} ${props.lastName}`} </label>
          <Link to="/logout" className="mx-3"><span style={style}>Logout</span>
          </Link>
        </div>
      )
      :
      <Link to="/login" className="mx-3"><span style={{color: 'gold', fontSize: '1.5em'}}>Login</span></Link>
    }
  </div>
);

export default Status