import React from 'react';

import './style.css';

function ButtonsWrapper(props) {
  return (
      <div className="buttons-wrapper">
          { props.children }
      </div>
  );
}

export default ButtonsWrapper;