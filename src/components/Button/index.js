import React from 'react';
import './style.css';

function Button(props) {
  return(
    <button className={ `button ${props.type}` } >{ props.name }</button>
  );
}

export default Button;