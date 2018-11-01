import React, { Component } from 'react';
import './App.css';
import IdeaContainer from './components/IdeaContainer';

class Idea extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Idea Board</h1>
        </div>
        <IdeaContainer />
      </div>
    );
  }
}

export default Idea;