import './checkbox.css';

const Checkbox = ({label, id, ...props}) => {
  return (
    <div className='container'>
      <span className='checkboxWrap'>
        <input name={props.name}
        id={id}
        className="checkBox"
        type="checkbox"/>
        <span className='checkboxNew'></span>
        <label className="labelCheckbox" htmlFor={id}>{label}</label>
      </span>
      { !props.validation && <p className='error'>{props.errorMsg}</p>}
    </div>
  )
}

export default Checkbox