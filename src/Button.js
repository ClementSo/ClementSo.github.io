import React from 'react';
import './App.css';

class Button extends React.Component {
  render() {
    return (
      <div className="Button">
        <button onClick={(e) => this.props.change ('red')} >red</button>
        <button onClick={(e) => this.props.change ('orange')}>orange</button>
        <button onClick={(e) => this.props.change ('yellow')}>yellow</button>
        <button onClick={(e) => this.props.change ('green')}>green</button>
        <button onClick={(e) => this.props.change ('blue')}>blue</button>
        <button onClick={(e) => this.props.change ('purple')}>purple</button>
      </div>
    );
  }
}

export default Button;