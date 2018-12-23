import React, { Component } from 'react';

class GameForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      directions_attributes: [{ rules: ''}],
      drinks_attributes: [{ name: '' }]
    }
  }


  render() {
    return(
      <div>
        <h1>Add Game: </h1>
        <hr  className="divider"/>
        <form> 
          <div>
            <label>Game Name: </label>
              <input
              type="text"
              value={this.state.name}
              onChange={this.handleName}
              />
          </div>
        </form>
      </div>
    );
  }
};

export default GameForm;