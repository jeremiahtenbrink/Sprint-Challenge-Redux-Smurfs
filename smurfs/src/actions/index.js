import axios from "axios";



/*
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

export const FETCHING_SMURFS = "FETCHING_SMURFS";
export const FETCHED_SMURFS = "FETCHED_SMURFS";
export const ADDING_SMURF = "ADDING_SMURF";
export const ADDED_SMURF = "ADDED_SMURF";
export const UPDATING_SMURF = "UPDATING_SMURF";
export const UPDATED_SMURF = "UPDATED_SMURF";
export const DELETING_SMURF = "DELETING_SMURF";
export const DELETED_SMURF = "DELETED_SMURF";
export const ERR = "ERR";


const url = "http://localhost:3333/smurfs";
/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export const addSmurf = smurf => async dispatch => {
    dispatch({type: ADDING_SMURF});

    axios.post(url, {...smurf})
        .then(res => dispatch(addedSmurf(res.data)))
        .catch(err => dispatch(errAction(err)));

};

const addedSmurf = smurfs => {
    return {
        type: ADDED_SMURF,
        payload: smurfs
    }
};

export const getSmurfs = () => async dispatch => {
    dispatch({type: FETCHING_SMURFS});
    axios.get(url)
        .then(res => dispatch(gotSmurfs(res.data)))
        .catch(err => dispatch( errAction(err)));
};

const gotSmurfs = smurfs => {
    return {
        type: FETCHED_SMURFS,
        payload: smurfs
    }
};

export const updateSmurf = smurf => async dispatch => {
    dispatch({type: UPDATING_SMURF});
    axios.put(`${url}/${smurf.id}`, smurf)
        .then(res => dispatch(updatedSmurf(res.data)))
        .catch(err => dispatch(errAction(err)));

};

const updatedSmurf = smurfs => {
    return {
        type: UPDATED_SMURF,
        payload: smurfs
    }
};

export const deleteSmurf = smurfID => async dispatch => {
    dispatch({type: DELETING_SMURF});
    axios.delete(`${url}/${smurfID}`)
        .then(res => dispatch(deletedSmurf(res.data)))
        .catch(err => dispatch(errAction(err)));
};

const deletedSmurf = smurfs => {
    return {
        type: DELETED_SMURF,
        payload: smurfs
    }
};

const errAction = err => {
  return {
      type: ERR,
      payload: err
  }
};



