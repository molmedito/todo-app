import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import allReducers from './../reducers';

import TaskReducer from './../reducers/TaskReducer';

const initialState = TaskReducer();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(allReducers, {tasks: initialState}, composeEnhancers(applyMiddleware(thunk)));
