import {NEW_QUESTIONS} from '../actions/actionsQuestions';

export default function(state = [], action){
  switch(action.type){
    case NEW_QUESTIONS:
      return action.payload;
    default:
      return state;
  }
}
