import Input from '../../components/Input/input.jsx'
import Checkbox from '../../components/Checkbox/checkbox.jsx';
import Button from '../../components/Button/button.jsx' 
import photo from '../../assets/data_1.png';
import './login.css';
import TableDatePicker from '../../components/Select/select.jsx';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignUp(){

  const navigation = useNavigate()
  const [nameVal, setNameVal] = useState(true)
  const [emailVal, setEmailVal] = useState(true)
  const [phoneVal, setPhoneVal] = useState(true)
  const [passVal, setPassVal] = useState(true)
  const [checkTerm, setCheckTerm] = useState(true)
  let validation = true

  const validate = (a) =>{
    a.preventDefault()

    let fullName = localStorage.getItem('Name')
    let email = localStorage.getItem('Email')
    let phone = localStorage.getItem('Phone')
    let password = localStorage.getItem('Password')
    let terms = localStorage.getItem('terms')

    if(fullName && fullName.length >= 4 && fullName.includes(' ')){
      setNameVal(true)
    }else{
      setNameVal(false)
      validation = false
    }

    if(email){
      if(/^[a-z0-9]+@[a-z0-9]+\.[a-z]+$/.test(email)){
        setEmailVal(true)
      }else{
        setEmailVal(false)
        validation = false 
      }
    }

    if(phone){
      if(/^[0-9]+$/.test(phone)){
        setPhoneVal(true)
      }else{
        setPhoneVal(false)
        validation = false
      }
    }

    if(password){
      if(/^[6-8]+$/.test(password)){
        setPassVal(true)
      }else{
        setPassVal(false)
        validation = false
      }
    }

    if(terms){
      if(terms === 'true'){
        setCheckTerm(true)
      }else{
        setCheckTerm(false)
        validation = false
      }
    }

    if(validation){
      navigation('/success')
      localStorage.clear()
    }
  } 

  return (
    <section className='main-wrapper'>
      <div className='div-wrapper'>
        <div>
          <span className='main-logo'>
            <img src={photo} alt="Logo"/>
          </span>
          <h1 className='main-title'>Intern Sign Up</h1>
          <form onSubmit={a => validate(a)}>
            <div className='form-upper'>
              <span className='flex-wrap'>
                <Input class="input-name" nameInput="Name" id="Name" label="Full Name*" type="text" placeholder="Name" required validation={nameVal}/>
              </span>
              <span className='flex-wrap'>
                <Input class="input-email" nameInput="Email" id="Email" label="Email*" type="email" placeholder="foo@bar" required validation={emailVal}/>
                <Input class="input-phone" nameInput="Phone" maxLength={11} id="Phone" label="Phone" type="text" placeholder="(83) 00000-0000" validation={phoneVal}/>
              </span>
              <span className='flex-wrap'>
                <Input class="input-password" nameInput="Password" id="Password" label="Password*" type="password" required validation={passVal}/>
                <TableDatePicker name="Birthdate"></TableDatePicker>
              </span>
            </div>
            <div className='form-lower'>
              <span>
                <Checkbox name='terms'
                label="I accept the terms and privacy"
                errorMsg='You must accept the terms.'
                validation={checkTerm}/>
              </span>
              <Button value='Register'/>
            </div>
          </form>
        </div>
    </div>
    </section>
  )
}

export default SignUp