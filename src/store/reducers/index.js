import { combineReducers } from 'redux';
//REDUCERS ----------------------------
import { channels } from './channels';
import { auth } from './auth';
import { error } from './error';
import { feed } from './feed';
import { posts } from './posts'

const allReducers = combineReducers({
  channels,
  auth,
  error,
  feed,
  posts
});

const rootReducer = (state, action) => allReducers(state, action);

export default rootReducer;