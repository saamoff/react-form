import React from 'react'
import Input from '../../components/Input/input.js'
import photo from '../../assets/data_1.png';
import {Title, Wrapper, MainWrap, FlexWrap} from './index';


const Login = ({width, height}) => {
  return (
    <MainWrap>
      <Wrapper width="30%">
        <div>
          <img src={photo} alt="Logo"/>
          <Title>Intern Sign Up</Title>
          <form>
            <Input margin="2%"id="Name" label="Full Name*" type="text" placeholder="Name"/>
            <FlexWrap>
              <Input width="330px"id="Email" label="Email*" type="email" placeholder="foo@bar"/>
              <Input maxLength={11} id="Phone" label="Phone" type="text" placeholder="(83) 00000-0000" required="false"/>
            </FlexWrap>
            <FlexWrap>
              <Input width="330px" id="Password" label="Password*" type="password"/>
            </FlexWrap>
          </form>
        </div>
    </Wrapper>
    </MainWrap>
  )
}

export default Login