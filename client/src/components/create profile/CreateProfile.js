import React, { Component } from 'react';
import {connect} from 'react-redux'

class CreateProfile extends Component {
    state ={
        displaySocialInputs: false,
        handle: '',
        clinic: '',
        website: '',
        location: '',
        status: '',
        skills:'',
        bio:'',
        twitter: '',
        facebook:'',
        linkedin:'',
        youtube:'',
        instagram:'',
        errors:{}
    }
  
    render() {
    return (
      <div className="create-profile">
      <div className="container">
      <div className="row">
      <div className="col-md-8 m-auto">
      <h1 className="display-4 text-center"> Create Your Profile </h1>
      <p className="lead text-center">
      Lets get some information about you. 
      </p>
      <small className="d-block pb-3">*=required fields </small>
      </div>
      </div>
      
      </div>
        
      </div>
    )
  }
}

const mapStateToProps =state => ({
    profile: state.profile,
    errors: state.errors
});

export default connect(null)(CreateProfile)
