// import { createStore, applyMiddleware } from "redux";
// import {thunk} from 'redux-thunk';
// import { composeWithDevTools } from '@redux-devtools/extension';

// import taskReducer from "./reducers/taskReducer";

// const store = createStore(
//   taskReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// );

// export default store;


// store.js
import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import taskReducer from './reducers/taskReducer';
import Cookies from 'js-cookie';

const loadState = () => {
  try {
    const serializedState = Cookies.get('reduxState');
    if (serializedState === undefined) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    Cookies.set('reduxState', serializedState, { expires: 8 });
  } catch (err) {
    // Handle errors while saving state
  }
};

const store = createStore(
  taskReducer,
  loadState(),
  composeWithDevTools(applyMiddleware(thunk))
);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
