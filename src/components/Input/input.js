import React from 'react'

const Input = ({ label, id, ...props }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <br></br>
      <input id={id} type="text" {...props}></input>
    </div>
  )
}

export default Input