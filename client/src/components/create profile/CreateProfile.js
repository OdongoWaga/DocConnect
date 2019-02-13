import React, { Component } from 'react';
import {connect} from 'react-redux'
import TextFieldGroup from '../../utils/textFieldGroup';
import SelectListGroup from '../../utils/selectListGroup';
import TextAreaFieldGroup from '../../utils/textAreaFieldGroup';

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
  
  onSubmit=(e) => {
      e.preventDefault();

      console.log('submit');
  } 

  onChange=(e)=> {
      this.setState({[e.target.name]: e.target.value})
  }
    
    render() {
        const {errors} =this.state;

     //Select options for status
     
     const options= [

    {label: 'Select Professional Status', value: 0},
    {label: 'Student MedSchool', value: 'Student MedSchool'},
    {label: 'Student Medical College', value: 'Student Medical College'},
    {label: 'Medical Intern', value: 'Medical Intern'},
    {label: 'Other', value: 'Other'},
    {label: 'Doctor', value: 'Doctor'},
    {label: 'Medical Specialist', value: 'Medical Specialist'},
    {label: 'Senior Doctor', value: 'Senior Doctor'},

     ];

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
      <form onSubmit={this.onSubmit}>
      <TextFieldGroup 
       placeholder="* Profile Handle"
       name="handle"
       value={this.state.handle}
       onChange={this.onChange}
       error={errors.handle}
       info="A unique handle for your profile URL."
      />
      <SelectListGroup 
       placeholder="Status"
       name="status"
       value={this.state.status}
       onChange={this.onChange}
        options={options}
       error={errors.status}
       info="Give Us an idea of where you are in your career "
      />
      <TextFieldGroup 
       placeholder="* Profile Handle"
       name="handle"
       value={this.state.handle}
       onChange={this.onChange}
       error={errors.handle}
       info="A unique handle for your profile URL."
      />
      <TextFieldGroup 
       placeholder="Clinic"
       name="clinic"
       value={this.state.clinic}
       onChange={this.onChange} 
       error={errors.clinic}
       info="Tell us more about your workplace"
      />
      <TextFieldGroup 
       placeholder="website"
       name="website"
       value={this.state.website}
       onChange={this.onChange} 
       error={errors.website}
       info="Website address"
      />
      <TextFieldGroup 
       placeholder="location"
       name="location"
       value={this.state.location}
       onChange={this.onChange} 
       error={errors.location}
       info="Where are you based"
      />
      <TextFieldGroup 
       placeholder="Skills"
       name="skills"
       value={this.state.skills}
       onChange={this.onChange} 
       error={errors.skills}
       info="use comma seperated values (eg surgery, nutrition, epidemiology)"
      />
      <TextAreaFieldGroup
       placeholder="Skills"
       name="skills"
       value={this.state.skills}
       onChange={this.onChange} 
       error={errors.skills}
       info="use comma seperated values (eg surgery, nutrition, epidemiology"
      />

        <div className="mb-3">
        <button className="btn btn-light"> </button>
        </div>
      </form>
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

export default connect(mapStateToProps)(CreateProfile)
 