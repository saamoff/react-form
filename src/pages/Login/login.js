import React from 'react'
import Input from '../../components/Input/input.js'
import photo from '../../assets/data_1.png';
import {Title, Wrapper, MainWrap, FlexWrap, MainImg} from './index';


const Login = ({width, height}) => {
  return (
    <MainWrap>
      <Wrapper width="30%">
        <div>
          <MainImg>
            <img src={photo} alt="Logo"/>
          </MainImg>
          <Title>Intern Sign Up</Title>
          <form>
            <Input margin="2%"id="Name" label="Full Name*" type="text" placeholder="Name" required/>
            <FlexWrap>
              <Input width="330px"id="Email" label="Email*" type="email" placeholder="foo@bar" required/>
              <Input maxLength={11} id="Phone" label="Phone" type="text" placeholder="(83) 00000-0000"/>
            </FlexWrap>
            <FlexWrap>
              <Input width="330px" id="Password" label="Password*" type="password"required/>
            </FlexWrap>
            <Input id="Submit" type="submit"/>
          </form>
        </div>
    </Wrapper>
    </MainWrap>
  )
}

export default Login