import React from 'react';
import photo from '../../assets/data_1.png';
import Button from '../../components/Button/button.jsx'

const Success = (width) => {
  return (
    <section>
      <div>
        <span>
          <img src={photo} alt="Logo"/>
        </span>
        <h1>Success!</h1>
        <Button/>
      </div>
    </section>
  )
}

export default Success