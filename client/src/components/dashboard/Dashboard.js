import React, { Component } from 'react'
import {connect} from 'react-redux';
import {getCurrentProfile} from '../../actions/profileActions';
import Spinner from '../../utils/Spinner';

class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }

    render() {

    const {user} = this.props.auth;
    const {profile, loading} =this.props.profile;

    let dashboardContent;

    if(profile ===null || loading) {
        dashboardContent =<Spinner/>
    } else {
    
        //Check if user has profile data
        if(Object.keys(profile).length> 0){
            dashboardContent = <h4> DISPLAY PROFILE </h4>
        }else{
            //User Logged in but has no profile

             
        }
    }


    return (
      <div className="dashboard">
        <div className ="container">
        <div className="row">
        <div className="col-md-12">
        <h1 className ="display-4">
        Dashboard
        </h1>
        {dashboardContent}

        </div>
        </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
    profile:state.profile,
    auth: state.auth
});

export default connect(mapStateToProps, {getCurrentProfile})(Dashboard);
