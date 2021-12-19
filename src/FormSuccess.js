import React from 'react';
import imges3 from './img/img-3.svg';
import './Form.css';

const FormSuccess = () => {
  return (
    <div className='form-content-right'>
      <h1 className='form-success'>We have received your request!</h1>
      <img className='form-img-2' src={imges3} alt='success-image' />
    </div>
  );
};

export default FormSuccess;
