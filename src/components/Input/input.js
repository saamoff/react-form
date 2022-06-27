import React from 'react';
import './input.css';

const Input = ({ label, id, ...props }) => {
  return (
    <div>
      <label className='label-input' htmlFor={id}>{label}</label>
      <br></br>
      <input className={props.class} id={id} type="text" {...props}></input>
    </div>
  )
}

export default Input