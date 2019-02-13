import React, { Component } from 'react'
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import TextFieldGroup from '../../utils/textFieldGroup';

import {addExperience} from '../../actions/profileActions';

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
   onSubmit =(e) => {
       e.preventDefault();
       console.log('submit')
   }

   onChange =(e) => {
       this.setState({
           [e.target.name]:e.target.value
       });
   }

   onCheck =(e) => {
       this.setState({
           disabled: !this.state.disabled,
           current: !this.state.current
       })
   }
  
    render() {
        const {errors} = this.state; 

    return (
      <div className='add-experience'>
      <div className='container'>
      <div className='row'>
      <div className='col-md-8 m-auto'>
      <Link to='/dashbaord' className='btn btn-light'>
      Go Back
      </Link>
      <h1 className='display-4 text-center'>Add Experience </h1>
        <p className='lead text-center'> Add past jobs or current one </p>
        <small className='d-block pb-3'> * =required </small>
        <form onSubmit ={this.onSubmit}>
        <TextFieldGroup 
       placeholder="*clinic or Hospital"
       name="clinic"
       value={this.state.clinic}
       onChange={this.onChange} 
       error={errors.clinic}
      />
        <TextFieldGroup 
       placeholder="*Job title"
       name="title"
       value={this.state.title}
       onChange={this.onChange} 
       error={errors.title}
      />
        <TextFieldGroup 
       placeholder="location"
       name="location"
       value={this.state.location}
       onChange={this.onChange} 
       error={errors.location}
      />
      <h6>From Date </h6>
      <TextFieldGroup 
       name="from"
       type='date'
       value={this.state.from}
       onChange={this.onChange} 
       error={errors.from} 
      />
      <h6> To Date </h6>
      <TextFieldGroup 
       name="to"
       type='date'
       value={this.state.to}
       onChange={this.onChange} 
       error={errors.to} 
       disabled={this.state.disabled ? 'disabled': ''}
      />
      <div className='form-check mb-4'>
      <input 
      type='checkbox'
      className='form-check-input'
      name='current'
      value={this.state.current}
      checked={this.state.current}
      onChange={this.onCheck}
      id='current'
      />
      <label htmlFor='current' className='form-check-label'>
      Current Job
      </label>
      </div>
      <TextFieldGroup 
       placeholder="Job Description"
       name="description"
       value={this.state.description}
       onChange={this.onChange} 
       error={errors.description}

      />
        <input type='submit' value='Submit'
        className='btn btn-info btn-block mt-4'/>
        </form> 
      </div>
      </div>
      </div>
        
      </div>
    )
  }
}

const mapStateToProps = state => ({
    profile:state.profile,
    auth: state.auth,
    errors:state.errors
});


export default connect(mapStateToProps)(withRouter(AddExperience));
