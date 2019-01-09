import { applyMiddleware, createStore } from "redux";// add `applyMiddleware` import
import logger from 'redux-logger' // add `redux-logger` import 
import { rootReducer } from './reducers'

export const store = createStore(rootReducer,
    applyMiddleware(logger) // add `applyMiddleware()` as second parameter
);