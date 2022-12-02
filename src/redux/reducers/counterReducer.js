import ActionTypes from "../actionTypes"

const initialState = 0;

const countReducer = (state = initialState, action)=>{
    switch (action.type) {
        case ActionTypes.count.ADDED:

            return state + action.payload

        case ActionTypes.count.REDUCED:
            return state - action.payload;
            default:
            return state;
    }
}

export default countReducer