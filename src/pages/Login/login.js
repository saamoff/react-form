import React from 'react'
import Input from '../../components/Input/input.js'
import photo from '../../assets/data_1.png';
import TableDatePicker from '../../components/Select/select.js';
import {Title, Wrapper, MainWrap, FlexWrap, MainImg} from './index';


const Login = ({width}) => {
  return (
    <MainWrap>
      <Wrapper width="30%">
        <div>
          <MainImg>
            <img src={photo} alt="Logo"/>
          </MainImg>
          <Title fontSize="36px">Intern Sign Up</Title>
          <form>
            <Input class="input-forms" id="Name" label="Full Name*" type="text" placeholder="Name" required/>
            <FlexWrap>
              <Input class="input-forms" id="Email" label="Email*" type="email" placeholder="foo@bar" required/>
              <Input class="input-forms" maxLength={11} id="Phone" label="Phone" type="text" placeholder="(83) 00000-0000"/>
            </FlexWrap>
            <FlexWrap>
              <Input class="input-forms" id="Password" label="Password*" type="password" required/>
              <TableDatePicker required></TableDatePicker>
            </FlexWrap>
            <Input class="input-submit" value="Register" id="Submit" type="submit"/>
          </form>
        </div>
    </Wrapper>
    </MainWrap>
  )
}

export default Login