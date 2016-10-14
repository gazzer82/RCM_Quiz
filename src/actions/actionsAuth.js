import firebase from 'firebase';


const EMAIL = 'dumm@dummyuser.com';
const PASSWORD = 'abc123abc789smile';

export const USER_LOGGED_IN = 'USER_LOGGED_IN';

function setAutheticated(user){
  console.log(user);
  return {
    type: USER_LOGGED_IN,
    payload: user
  }
}

export function authUser(){
  console.log('authenticating user');
  return (dispatch, getState) => {
    firebase.auth().signInWithEmailAndPassword(EMAIL, PASSWORD)
    .then(function(user){
      dispatch(setAutheticated(user));
    })
    .catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log('error autheticating user');
      console.log(error.code);
      console.log(error.message);
    });
  }
}
