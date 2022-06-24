import React from 'react';
import {InputStyle, LabelStyle, InputWrap} from './index';

const Input = ({ label, id, ...props }) => {
  return (
    <InputWrap>
      <LabelStyle htmlFor={id}>{label}</LabelStyle>
      <br></br>
      <InputStyle width='100%' id={id} type="text" {...props}></InputStyle>
    </InputWrap>
  )
}

export default Input