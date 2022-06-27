import React from 'react'
import Input from '../../components/Input/input.js'
import photo from '../../assets/data_1.png';
import './login.css';
import TableDatePicker from '../../components/Select/select.js';

const Login = () => {
  return (
    <section className='main-wrapper'>
      <div className='div-wrapper'>
        <div>
          <span className='main-logo'>
            <img src={photo} alt="Logo"/>
          </span>
          <h1 className='main-title'>Intern Sign Up</h1>
          <form>
            <Input class="input-forms" id="Name" label="Full Name*" type="text" placeholder="Name" required/>
            <span className='flex-wrap'>
              <Input class="input-forms" id="Email" label="Email*" type="email" placeholder="foo@bar" required/>
              <Input class="input-forms" maxLength={11} id="Phone" label="Phone" type="text" placeholder="(83) 00000-0000"/>
            </span>
            <span className='flex-wrap'>
              <Input class="input-forms" id="Password" label="Password*" type="password" required/>
              <TableDatePicker></TableDatePicker>
            </span>
            <Input class="input-submit" value="Register" id="Submit" type="submit"/>
          </form>
        </div>
    </div>
    </section>
  )
}

export default Login