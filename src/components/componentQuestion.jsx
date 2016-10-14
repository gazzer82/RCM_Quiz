import React, { Component } from 'react';

import Answers from './componentAnswers';

export default class Question extends Component {
  render(){
    return(
      <div>
        <h1>{this.props.question.question}</h1>
        <Answers answers={this.props.question.answers} />
      </div>
    )
  }
}
