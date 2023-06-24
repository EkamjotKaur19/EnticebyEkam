import React from 'react';
import './style.css'

function Title({ value, col }) {
  return ( 
  <div className='title-div'>
    <h1>{value}</h1>
  </div>
  );
}

export default Title