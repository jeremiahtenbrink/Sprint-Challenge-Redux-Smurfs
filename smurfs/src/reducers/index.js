/*
  Be sure to import in all of the action types from `../actions`
*/

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer.
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

import {
    DELETING_SMURF,
    DELETED_SMURF,
    ADDING_SMURF,
    ADDED_SMURF,
    UPDATING_SMURF,
    UPDATED_SMURF,
    FETCHING_SMURFS,
    FETCHED_SMURFS,
    ERR
} from "../actions";

const initialState = {
    smurfs: [],
    fetchingSmurfs: false,
    addingSmurf: false,
    updatingSmurf: false,
    deletingSmurf: false,
    error: null,
};

const smurfsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADDING_SMURF:
            return {...state, addingSmurf: true};
        case UPDATING_SMURF:
            return {...state, updatingSmurf: true};
        case DELETING_SMURF:
            return {...state, deletingSmurf: true};
        case FETCHING_SMURFS:
            return {...state, fetchingSmurfs: true};
        case ADDED_SMURF:
            return {...state, smurfs: action.payload, addingSmurf: false};
        case UPDATED_SMURF:
            return {...state, smurfs: action.payload, updatingSmurf: false};
        case DELETED_SMURF:
            return {...state, smurfs: action.payload, deletingSmurf: false};
        case FETCHED_SMURFS:
            return {...state, smurfs: action.payload, fetchingSmurfs: false};
        case ERR:
            return {
                ...state,
                error: action.payload,
                fetchingSmurfs: false,
                addingSmurf: false,
                updatingSmurf: false,
                deletingSmurf: false
            };
        default:
            return state;
    }
};

export default smurfsReducer;