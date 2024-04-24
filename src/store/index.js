import { createStore, applyMiddleware, legacy_createStore } from "redux";

import thunk from 'redux-thunk'
import mainReducer from "../reducers";

const store = createStore(
    mainReducer,
    {
        items: [],
        totalAmount: 0
    },
    // applyMiddleware()
)


export default store