import { combineReducers } from 'redux';
import questions from './reducerQuestions';
import auth from './reducerAuth';

const rootReducer = combineReducers({
  questions,
  auth
});

export default rootReducer;
