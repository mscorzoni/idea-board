import React, { Component } from 'react';
import Idea from './Idea';
import axios from 'axios';

class IdeasContainer extends Component {
  state = {
    ideas: []
  }

  componentDidMount() {
    axios.get( 'http://localhost:3001/api/v1/ideas.json' )
    .then( response => {
      console.log(response.data)
      this.setState({ideas: response.data})
    })
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        {this.state.ideas.map((idea) => {
          return (
            <Idea idea={idea} key={idea.id} />
          )
        })}
      </div>
    );
  }
}

export default IdeasContainer;