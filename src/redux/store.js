import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from "redux-thunk";  
import { composeWithDevTools } from 'redux-devtools-extension';
import authReducer from './reducers/authReducers';


const rootReducer = combineReducers({
  auth: authReducer,
  // Add other reducers here as needed
});

// Create store with middleware
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)) // Add other middleware as needed
);

export default store;
export { rootReducer };