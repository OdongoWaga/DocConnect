import React, { Component } from 'react';
import {connect} from 'react-redux'
import TextFieldGroup from '../../utils/textFieldGroup';
import SelectListGroup from '../../utils/selectListGroup';
import TextAreaFieldGroup from '../../utils/textAreaFieldGroup';
import InputGroup from '../../utils/inputGroup';

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
        const {errors, displaySocialInputs} =this.state;

        let socialInputs;

        if(displaySocialInputs){
          socialInputs =(
            <div>
            <InputGroup
            placeholder="Twitter profile link"
            name="twitter"
            icon="fab fa-twitter"
            value={this.state.twitter}
            onChange={this.onChange}
            error={errors.twitter}
            />
            <InputGroup
            placeholder="Facebook profile link"
            name="facebook"
            icon="fab fa-facebook"
            value={this.state.facebook}
            onChange={this.onChange}
            error={errors.facebook}
            />
            <InputGroup
            placeholder="Linkedin profile link"
            name="linkedin"
            icon="fab fa-linkedin"
            value={this.state.linkedin}
            onChange={this.onChange}
            error={errors.linkedin}
            />
            <InputGroup
            placeholder="Instagram profile link"
            name="instagram"
            icon="fab fa-instagram"
            value={this.state.instagram}
            onChange={this.onChange}
            error={errors.instagram}
            />
            </div>
          )
        }

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
       placeholder="Short Bio"
       name="bio"
       value={this.state.bio}
       onChange={this.onChange} 
       error={errors.bio}
       info="Say Something about yourself"
      />

        <div className="mb-3">
        <button onClick={()=> {
          this.setState(prevState => ({
            displaySocialInputs: !prevState.displaySocialInputs
          }))
        }} className="btn btn-light"> 
        Add Social Network Links
        </button>
        <span className ="text-muted">Optional </span>
        </div>
        {socialInputs}
        <input type="submit" value= "Submit" className="btn btn-info btn-block mt-4" />
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
 