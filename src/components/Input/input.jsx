import './input.css';

const Input = ({ label, id, ...props }) => {
  return (
    <div className='div-input'>
      <label className='label-input' htmlFor={id}>{label}</label>
      <input name={props.nameInput}
      className={props.class}
      id={id}
      type="text"
      {...props}
      onChange={a => {
        (localStorage.setItem(`${props.nameInput}`, a.target.value))}}/>
    </div>
  )
}

export default Input