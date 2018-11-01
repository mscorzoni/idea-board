import React, { Component } from 'react';
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
        Ideas
      </div>
    );
  }
}

export default IdeasContainer;