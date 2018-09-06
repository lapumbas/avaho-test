import React from 'react';
import _ from 'lodash';

import Button from './Button';
import './style.css';

class App extends React.Component {
  state = {buttons: ['1', '2', '3']}

  handleClick = evt => {
    const buttons = this.state.buttons;
    const [first, ...rest] = buttons;
    rest.push(first)
    this.setState({buttons: rest})
  }

  renderButtons = () => {
    const buttons = this.state.buttons;
    return buttons.map(item => <Button key={_.uniqueId()} click={this.handleClick} text={item} />)
  }

  render() {
    return (
      <div className="App">{this.renderButtons()}</div>
    )
  }
}

export default App;
