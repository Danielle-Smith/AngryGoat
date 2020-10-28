import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import shop from './shopReducer';

const rootReducer = combineReducers({
  form,
  shop
});

export default rootReducer;