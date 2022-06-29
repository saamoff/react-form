import './button.css'

const Button = ({...props}) => {
  return (
    <div className='div-button'>
      <button className={props.classButton}
      value={props.value}>{props.value}</button>
    </div>
  )
}

export default Button