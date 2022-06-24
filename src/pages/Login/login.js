import React from 'react'
import Input from '../../components/Input/input.js'
import {Title, Wrapper, MainWrap} from './index';


const Login = ({width, height}) => {
  return (
    <MainWrap>
      <Wrapper width="30%">
        <div>
          <Title>Intern Singup</Title>
          <form>
            <Input id="Name" label="Full Name*" type="text" placeholder="Name"/>
            <Input id="Email" label="Email*" type="email" placeholder="foo@bar"/>
            <Input id="Phone" label="Phone" type="text" placeholder="(83) 00000-0000" required="false"/>
            <Input id="Password" label="Password*" type="password"/>
          </form>
        </div>
    </Wrapper>
    </MainWrap>
  )
}

export default Login