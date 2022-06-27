import React from 'react'

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