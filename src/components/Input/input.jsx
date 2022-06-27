import './input.css';

const Input = ({ label, id, ...props }) => {
  return (
    <div className='div-input'>
      <label className={props.class} htmlFor={id}>{label}</label>
      <input name={props.nameInput}
      className={props.class}
      id={id}
      type="text"
      {...props}
      onChange={a => {
        (localStorage.setItem(`${props.nameInput}`, a.target.value))}}/>
       {!props.valid && <p className='error'>{props.nameInput} Invalid.</p>}
    </div>
  )
}

export default Input