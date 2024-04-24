import { createStore, applyMiddleware } from "redux";

import thunk from 'redux-thunk'

const rootReducer = (state, action) => {
    // switch (action.type){

    // }
    return state
}

export const store = createStore(
    rootReducer,
    {
        items: [],
        totalAmount: 0
    },
    applyMiddleware()
)