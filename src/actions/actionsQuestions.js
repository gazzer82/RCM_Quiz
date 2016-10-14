import firebase from 'firebase';

//Action constants
export const NEW_QUESTIONS = 'NEW_QUESTIONS';

function updatedQuestions(questions){
  return {
    type: NEW_QUESTIONS,
    payload: questions.reduce((store, question) => {
      store.push(question);
      return store;
    },[])
  }
}

export function getQuestions(){;
  return (dispatch, getState) => {
    console.log('fetching latest questions');
    var questionRef = firebase.database().ref('questions');
    questionRef.on('value', function(snapshot){
      console.log(snapshot.val());
      dispatch(updatedQuestions(snapshot.val()));
    });
  }
}
