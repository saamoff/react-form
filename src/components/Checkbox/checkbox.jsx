import React from 'react'
import 'checkbox.css';

const Checkbox = (...props) => {
  return (
    <div>
      <span>
        <input name={props.name}
         className="checkBox"
          type="checkbox"></input>
      </span>
    </div>
  )
}

export default Checkbox