import { combineReducers } from 'redux';

//REDUCERS
import { channels } from './channels';
import { auth } from './auth';
import { error } from './error';
import { feed } from './feed';

const allReducers = combineReducers({
  channels,
  auth,
  error,
  feed
});

const rootReducer = (state, action) => allReducers(state, action);

export default rootReducer;