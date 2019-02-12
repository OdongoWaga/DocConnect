import {GET_PROFILE, PROFILE_LOADING} from '../actions/Types'

const initialState ={
    profile:null,
    profiles: null, 
    loading:false
};

export default function(state= initialState, action) {
    switch(action.type) {
        default: 
        return state;
    }
}