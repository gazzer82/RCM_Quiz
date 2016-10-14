import React, {Component} from 'react';

export default class Answers extends Component {
  answersList(){
    return this.props.answers.map((answer, index) => {
      return <li key={index}>{answer}</li>
    })
  }
  render(){
    return(
      <ul>{this.answersList()}</ul>
    )
  }
}
