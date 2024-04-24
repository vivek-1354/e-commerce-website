import { applyMiddleware, legacy_createStore } from "redux";

import { thunk } from 'redux-thunk'
import mainReducer from "../reducers";

const store = legacy_createStore(
    mainReducer,
    {
        items: [],
        totalAmount: 0
    },
    applyMiddleware(thunk)
)


export default store