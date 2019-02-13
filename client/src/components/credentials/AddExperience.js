import React, { Component } from 'react'
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

 class AddExperience extends Component {
  state= {
      clinic:'',
      title: '',
      location:'',
      from: '',
      to:'',
      current:false,
      description: '',
      errors: {},
      disabled:false
       
  }
  
    render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default AddExperience;
