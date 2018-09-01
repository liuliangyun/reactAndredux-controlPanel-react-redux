import * as ActionTypes from './action-types'

export const increment = (counterCaption) => ({
    type: ActionTypes.Increment,
    counterCaption
})

export const decrement = (counterCaption) => ({
    type: ActionTypes.Decrement,
    counterCaption
})