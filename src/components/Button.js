import React from 'react';
import './style.css';

export default props => {
  return <button className="App__Button" onClick={props.click}>{props.text}</button>
}
