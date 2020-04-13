import { combineReducers } from 'redux';
import accountsReducer from './accountsReducer';

const rootReducer = combineReducers({
  accountsReducer,
});

export default rootReducer;