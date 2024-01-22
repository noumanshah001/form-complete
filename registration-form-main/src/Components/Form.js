import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Form.css';


const Form = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email:  '',
    firstname: '',
    lastname: '',
    phoneno: '',
    password: '',
  });

  const [formErrors, setFormErrors] = useState({
    email: '',
    firstname: '',
    lastname: '',
    phoneno: '',
    password: '',
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    setFormErrors({ ...formErrors, [event.target.name]: '' });
  };
  

  const validateForm = () => {
    let valid = true;
    const newErrors = {};
    setFormErrors(newErrors);
    return valid;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      navigate('/table', { state: formData });
    }
  };

  return (
    <div className='form-container'>
      <h1>Send form data to a table</h1>
      <fieldset>
        <form>
          <label htmlFor='email'>
            <span> Send Email</span>
            <span>
              <input type='text' value={formData.email} name='email' onChange={handleChange} />
            </span>
            <span className='error'>{formErrors.email}</span>
          </label>
          <label htmlFor='firstname'>
            <span>First Name</span>
            <span>
              <input type='text' value={formData.firstname}  name='firstname' onChange={handleChange} />
            </span>
            <span className='error'>{formErrors.firstname}</span>
          </label>
          <label htmlFor='lastname'>
            <span>Last Name</span>
            <span>
              <input type='text' value={formData.lastname}  name='lastname' onChange={handleChange} />
            </span>
            <span className='error'>{formErrors.lastname}</span>
          </label>
          <label htmlFor='phoneno'>
            <span>Phone no</span>
            <span>
              <input type='tel' value={formData.phoneno}  name='phoneno' onChange={handleChange} />
            </span>
            <span className='error'>{formErrors.phoneno}</span>
          </label>
          <label htmlFor='password'>
            <span>Password</span>
            <span>
              <input type='password'  value={formData.password} name='password' onChange={handleChange} />
            </span>
            <span className='error'>{formErrors.password}</span>
          </label>
          <div className='button' onClick={handleSubmit}>
            Submit
          </div>
        </form>
      </fieldset>
    </div>
  );
};

export default Form;
