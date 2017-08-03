import React, { Component } from 'react';
import '../App.css';
import Poetrose from './Poetrose'

class App extends Component {

  constructor(){
    super();
    this.state = {
      poetrose: null,
      compliments: [
        '¡Tus tradicciones son muy importantes! ¡Buena suerte!',
        'David Foster Wallace would be proud of you',
        'I’d give you the last piece of my gum even if I’d just ate garlic.',
        'Argentina will be a walk in the park for you',
        'If Einstein could meet you, he\'d be "mildly to moderately" intimidated.',
        'You\'re okay, I guess',
        'Our time together in Paris still goes down as one of my fondest memories',
        'Keep going!',
        'Seeing a text from you always brightens my day.',
        'Everyone at sleepovers thought you were the bravest during thunderstorms.',
        'I still remember our Morgan and Jason\'s Extraordinary Poetrose Collaboration'
      ],
      compliment: ''
    };
  };

  renderPoemOrNah(){
    if (this.state.poetrose){
      this.setState({
        poetrose: null
      })
    } else {
      this.setState({
        poetrose: true
      })
    }
  }

  renderPoem(){
    if (this.state.poetrose){
      return <Poetrose />
    } else {
      return <p>Want to relive Paris?</p>
    }
  }

  sendRandomCompliment(){
    let randomCompliment = Math.floor(Math.random() * this.state.compliments.length);
    this.setState({
      compliment: this.state.compliments[randomCompliment]
    })
  };

  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <h1>Hey Morgan :) you look like you've had a long day </h1>
        </div>
        <div className='front-page'>
          <button className='button' onClick={() => this.sendRandomCompliment()}>Compliment me, please</button>
          <button className='button' onClick={() => this.renderPoemOrNah()}>{this.state.poetrose ? 'Hide Paris' : 'Relive Paris'}</button>
          <div className='front-page-compliment'>
            <h1 className='compliment'>{this.state.compliment}</h1>
          </div>
          <div className='poetrose'>
            {this.renderPoem()}
          </div>
      </div>
      </div>
    );
  };
};

export default App;
