import React, { Component } from 'react';

//firebase
import firebase from 'firebase';
//Firebase constants
const config = {
    apiKey: "AIzaSyD2KIbFDmuodANRYt2fqQ1X5rWSOOnd8P4",
    authDomain: "rcm-storage.firebaseapp.com",
    databaseURL: "https://rcm-storage.firebaseio.com",
    storageBucket: "",
    messagingSenderId: "421418944642"
};

//actions
import {getQuestions} from '../actions/actionsQuestions';
import {authUser} from '../actions/actionsAuth';

//Components
import Question from '../components/componentQuestion.jsx';

//Redux
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

//Setup firebase

class QuestionContainer extends Component {
  componentDidMount(){
    firebase.initializeApp(config);
    if(!this.props.auth.autheticated){
      this.props.authUser();
    } else {
      this.props.getQuestions();
    }
  }
  componentWillReceiveProps(nextProps){
    if (!this.props.auth.autheticated && nextProps.auth.autheticated){
      this.props.getQuestions();
    }
  }
  questionList(){
    return this.props.questions.map((question,index) => {
      return <Question key={index} question={question} />
    })
  }
  checkAuthState(){
    if (this.props.auth.autheticated){
      return this.questionList()
    } else {
      return <h1>User not Autheticated</h1>
    }
  }
  render(){
    return(
      <div className='grid grid-large'>
        {this.checkAuthState()}
      </div>
    )
  }
}

function mapStateToProps({questions, auth}){
  return{
    questions,
    auth
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    getQuestions,
    authUser
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps) (QuestionContainer);
