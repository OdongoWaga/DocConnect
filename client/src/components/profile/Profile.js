import React, { Component } from 'react'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {getProfileByHandle} from '../../actions/profileActions';
import ProfileCreds from './ProfileCreds';
import ProfileHeader from './ProfileHeader';
import ProfileAbout from './ProfileAbout';

 class Profile extends Component {
componentDidMount (){
if(this.props.match.params.handle){
    this.props.getProfileByHandle(this.props.match.params.handle);
}

}
  render() {
    return (
      <div>
          <ProfileHeader />
          <ProfileAbout />
          <ProfileCreds />
        
      </div>
    )
  }
}
const mapStateToProps =state => ({
profile:state.profile
});

export default connect(mapStateToProps, {getProfileByHandle})(Profile)
