import {UPDATE_PROFILE_FAILURE, UPDATE_PROFILE_SUCCESS, LOADING} from '../actions/actionTypes';
 
export const updateProfileReducer = (state = {}, action) => {
    const {type, data} = action;
    switch(type){
        case UPDATE_PROFILE_SUCCESS:
        return {...state, ...data, error:[]};
        case UPDATE_PROFILE_FAILURE:
        return {...state, error:data};
        default:
        return state;
    }
};

export const loadingReducer = (state = false, action) =>{
    const {type, loading} = action;
    switch(type){
        case LOADING:
        return loading;
        default:
        return state;
    }
};