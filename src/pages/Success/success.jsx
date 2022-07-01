import React from 'react';
import { useNavigate } from 'react-router-dom';
import photo from '../../assets/data_1.png';
import './success.css'


function Success(){

  const navigation = useNavigate()
  const click = () =>{
    navigation('/')
  }

  return (
    <section className='main-wrap'>
      <div className='main-container'>
        <span className='main-logo-success'>
          <img src={photo} alt="Logo"/>
          <h1 className='main-title'>Success!</h1>
        </span>
        <span className='main-div'>
          <button onClick={click} className='main-button'>Go Back!</button>
        </span>
      </div>
    </section>
  )
}

export default Success