import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

const exampleInitialState = {};

export const actionTypes = {};

// REDUCERS
export const reducer = (state = exampleInitialState, action) => {
  switch (action.type) {
    default: return state;
  }
};

// ACTIONS
// IMPLEMENT ACTIONS HERE

export function initializeStore(initialState = exampleInitialState) {
  return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)));
}
