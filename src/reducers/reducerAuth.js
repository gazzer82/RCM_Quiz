import {USER_LOGGED_IN} from '../actions/actionsAuth';

const DEFAULT_STATE = {
  autheticated: false,
  token: ''
}

export default function(state = DEFAULT_STATE, action){
  switch(action.type){
    case USER_LOGGED_IN:
      return {
        autheticated: true,
        token: action.payload.refreshToken
      }
    default:
      return state;
  }
}
