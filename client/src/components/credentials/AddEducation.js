import React, { Component } from 'react'
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import TextFieldGroup from '../../utils/textFieldGroup';

import {addEducation} from '../../actions/profileActions';
import TextAreaFieldGroup from '../../utils/textAreaFieldGroup';

 class AddEducation  extends Component {
  state= {
      school:'',
      qualification: '',
      fieldofstudy:'',
      from: '',
      to:'',
      current:false,
      description: '',
      errors: {},
      disabled:false
       
  }

componentWillReceiveProps=(nextProps)=> {
    if(nextProps.errors) {
        this.setState({errors: nextProps.errors })
    }
}
  
   onSubmit =(e) => {
       e.preventDefault();
     
       const eduData ={
           school: this.state.school,
           qualification: this.state.qualification,
           fieldofstudy: this.state.fieldofstudy,
           from: this.state.from,
           to: this.state.to,
           current: this.state.current,
           description: this.state.description
       }
       this.props.addEducation(eduData, this.props.history);
   };

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
      <div className='add-education'>
      <div className='container'>
      <div className='row'>
      <div className='col-md-8 m-auto'>
      <Link to='/dashboard' className='btn btn-light'>
      Go Back
      </Link>
      <h1 className='display-4 text-center'>Add Education </h1>
        <p className='lead text-center'> Add medical schools or institutions you have attended </p>
        <small className='d-block pb-3'> * =required </small>
        <form onSubmit ={this.onSubmit}>
        <TextFieldGroup 
       placeholder="* School"
       name="school"
       value={this.state.school}
       onChange={this.onChange} 
       error={errors.school}
      />
        <TextFieldGroup 
       placeholder="* fieldofstudy"
       name="fieldofstudy"
       value={this.state.fieldofstudy}
       onChange={this.onChange} 
       error={errors.fieldofstudy}
      />
        <TextFieldGroup 
       placeholder="* qualification"
       name="qualification"
       value={this.state.qualification}
       onChange={this.onChange} 
       error={errors.qualification}
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
      Currently Studying
      </label>
      </div>
      <TextAreaFieldGroup
       placeholder="Qualification Description"
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
    errors:state.errors
});


export default connect(mapStateToProps, {addEducation})(withRouter(AddEducation));
