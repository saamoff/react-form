import './checkbox.css';

const Checkbox = (...props) => {
  return (
    <div>
      <span>
        <input name={props.name}
         className="checkBox"
          type="checkbox"/>
        <label htmlFor={props.name}>{props.label}</label>
      </span>
    </div>
  )
}

export default Checkbox