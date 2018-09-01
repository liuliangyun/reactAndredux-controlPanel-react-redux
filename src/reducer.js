import * as ActionTypes from './action-types'

export default (state, action) => {
    const {counterCaption} = action
    switch(action.type) {
        case ActionTypes.Increment :
            return { ...state, [counterCaption] : state[counterCaption] + 1 }
        case ActionTypes.Decrement : 
            return { ...state, [counterCaption] : state[counterCaption] - 1 }
        default :
            return state
    }
}