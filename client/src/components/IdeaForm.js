import React, { Component } from 'react'

class IdeaForm extends Component {
  state = {
    title: this.props.idea.title,
    body: this.props.idea.body
  }

  handleInput = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  render() {
    return (
      <div className="tile">
        <form>
          <input 
            className='input' 
            type="text"
            name="title" 
            placeholder='Enter a Title'
            value={this.state.title}
            onChange={this.handleInput}
            />
          <textarea 
            className='input'
            name="body"
            placeholder='Describe your idea'
            value={this.state.body}
            onChange={this.handleInput}
            ></textarea>
        </form>
      </div>
    );
  }
}

export default IdeaForm