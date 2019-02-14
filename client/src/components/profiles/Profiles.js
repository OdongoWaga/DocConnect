import React, { Component } from 'react'
import {connect} from 'react-redux';
import {getProfiles} from '../../actions/profileActions';
import Spinner from '../../utils/Spinner';

 class Profiles extends Component {

    componentDidMount(){
       this.props.getProfiles(); 
    }
  render() {
      const {profiles, loading}=this.props.profile;
      let profileItems;

      if(profiles ===null|| loading){
          profileItems =<Spinner />
      } else {
        if(profiles.length> 0) {
          profileItems = <h1> PROFILES HERE </h1>
        } else {
          profileItems=<h4> No profiles found </h4>
        }
      }

    return (
      <div className="profiles">
      <div className=" container">
      <div className="row">
      <div className="col-md-12">
      <h1 className="display-4 text-center"> Doctor Profiles </h1>
      <p className =" lead text-center">
      Browse and connect with Medics
      </p>
      {profileItems}
      </div>
      </div>
      </div>
        
      </div>
    )
  }
}

const mapStateToProps = state =>({
    profile: state.profile
})

export default connect(mapStateToProps, {getProfiles})(Profiles);