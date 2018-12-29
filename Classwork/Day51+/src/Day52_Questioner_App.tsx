import * as React from 'react';
import './Day52_CommentCard_App.css';

interface IQuestionProps {
  question: string;
}

interface IQuestionStates {
  answer: string | null
}

export default class Questioner extends React.Component<IQuestionProps, IQuestionStates> {
  public props: IQuestionProps;
  constructor(props: IQuestionProps) {
    super(props)
    this.state = {
      answer: null,
    }
    this.prompt = this.prompt.bind(this);
  }

  public render() {
    return (
      <div>
        {this.navbar()}
        {this.button()}
        {this.answer()}
      </div>
    );
  }

  private prompt() {
    prompt('What is your question')
    this.setState({answer: this.eightBall()})
  }

  private button() {
    return (
      <button className="question" onClick={this.prompt}>
      Question
      </button>
    )
  }

  private answer() {
    return (
      <p>{this.state.answer}</p>
    )
  }

  private navbar() {
    return (
        <div id='navbar'>
        <h3>Questioner</h3>
        </div>
    )
  }

  private eightBall() {
    const answers:string[] = ['It is certain.','It is decidedly so.','Without a doubt.','Yes - definitely.','You may rely on it.','As I see it, yes.','Most likely.','Outlook good.','Yes.','Signs point to yes.','Reply hazy, try again.','Ask again later.','Better not tell you now.','Cannot predict now.','Concentrate and ask again.','Don\'t count on it.','My reply is no.','My sources say no.','Outlook not so good.','Very doubtful.']
    return answers[Math.floor(Math.random()*20)]
  }
}

