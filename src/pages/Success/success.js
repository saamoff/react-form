import React from 'react';
import photo from '../../assets/data_1.png';
import {Title, Wrapper, MainWrap, MainImg} from '../Login/index';
import Button from '../../components/Button/button.js'

const Success = (width) => {
  return (
    <MainWrap>
      <Wrapper width="30%">
        <MainImg>
          <img src={photo} alt="Logo"/>
        </MainImg>
        <Title fontSize="40px">Success!</Title>
        <Button/>
      </Wrapper>
    </MainWrap>
  )
}

export default Success