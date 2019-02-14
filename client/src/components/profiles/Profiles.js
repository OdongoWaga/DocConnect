import React, { Component } from 'react'
import {connect} from 'react-redux';
import {getProfiles} from '../../actions/profileActions';
import Spinner from '../../utils/Spinner';

 class Profiles extends Component {

    componentDidUpdate(){
       this.props.getProfiles(); 
    }
  render() {
      const {profiles, loading}=this.props.profile;
      let profileItems;

      if(profiles ===null|| loading){
          profileItems =<Spinner />
      }

    return (
      <div>
        
      </div>
    )
  }
}

const mapStateToProps =state =({
    profile:state.profile
})

export default connect(mapStateToProps, {getProfiles})(Profiles);