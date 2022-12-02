import ActionTypes from "../actionTypes";

const added = (value) => {
    return { type: ActionTypes.count.ADDED, payload: value }
}

const reduced=(value)=>{
    return {type: ActionTypes.count.REDUCED, payload: value}
}

const actions={added,reduced}

export default actions;