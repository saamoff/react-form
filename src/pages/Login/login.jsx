import React from 'react'
import Input from '../../components/Input/input.jsx'
import photo from '../../assets/data_1.png';
import './login.css';
import TableDatePicker from '../../components/Select/select.jsx';

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
            <span className='flex-wrap'>
              <Input class="input-forms" nameInput="Name" id="Name" label="Full Name*" type="text" placeholder="Name" required/>
            </span>
            <span className='flex-wrap'>
              <Input class="input-forms" nameInput="Email" id="Email" label="Email*" type="email" placeholder="foo@bar" required/>
              <Input class="input-forms" nameInput="Phone" maxLength={11} id="Phone" label="Phone" type="text" placeholder="(83) 00000-0000"/>
            </span>
            <span className='flex-wrap'>
              <Input class="input-forms" nameInput="Password" id="Password" label="Password*" type="password" required/>
              <TableDatePicker></TableDatePicker>
            </span>
          </form>
        </div>
    </div>
    </section>
  )
}

export default Login