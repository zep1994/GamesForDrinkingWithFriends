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

  handleName = event => {
    this.setState({
      name: event.target.value
    })
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
              <div>
                    <label>Directions:</label>
                    <ol>
                      <p>DirectionInput</p>
                    </ol>
                    <input
                      type='textarea'
                      onClick={this.handleAddDirection}
                    />
              </div>
              <div>
                    <label>Drinks:</label>
                    <ol>
                      <p>DirectionInput</p>
                    </ol>
                    <input
                      type='textarea'
                      onClick={this.handleAddDirection}
                    />
              </div>
              <input 
              type="submit"
              value="submit"
              />
          </div>
        </form>
      </div>
    );
  }
};

export default GameForm;