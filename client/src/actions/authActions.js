 import axios from 'axios';
 import {GET_ERRORS,SET_CURRENT_USER} from './Types'
 import setAuthToken from '../utils/setAuthToken';
 import jwt_decode from 'jwt-decode';


 //Register User

 export const registerUser =(userData,history) => dispatch => {
     
    axios
      .post('/api/users/register', userData)
      .then(res => history.push('/login'))
      .catch(err => 
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        }) ); 
 };

 //Login Get User Token

  export const loginUser = userData => dispatch => {
      axios.post('/api/users/login', userData)
      .then(res => {
          //save to local storage
        const {token}=res.data;
        //set token to local storage
        localStorage.setItem('jwtToken', token ); 

        //set token to Auth header
        setAuthToken(token);
        // Decode token to get user data

        const decoded = jwt_decode(token);

        //Set Current User

        dispatch(setCurrentUser(decoded));

      })
      .catch(err=> dispatch({
          type: GET_ERRORS,
          payload: err.response.data
      }))
  }

  //Set logged in User
 
  export const setCurrentUser =(decoded) => {
      return{
          type: SET_CURRENT_USER,
          payload:decoded
      }
  }

  //Log User Out

  export const logoutUser = () => dispatch => {
      //Remove Token from local Storage 

      localStorage.removeItem('jwtToken');

      //Remove auth header for future requests
      setAuthToken(false);

      //set current user to empty object which will make isAuthenticated False

      dispatch(setCurrentUser({}));


  }