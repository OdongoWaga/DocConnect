import React, { Component } from 'react';
import Moment from 'react-moment';

 class ProfileCreds extends Component {
  render() { 
    const {experience, education} = this.props;
    const expItems= experience.map(exp => {
      <li key={exp._id} className="list-group-item">
      
      </li>
    })

    return (
      <div>
        <h1> PROFILE CREDS </h1>
      </div>
    )
  }
}

export default ProfileCreds
