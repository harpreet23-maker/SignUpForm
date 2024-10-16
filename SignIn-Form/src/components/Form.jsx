import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });
  const [submit, setSubmitStatus] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the form data to the backend
      await axios.post('http://localhost:5000/submit', formData);
      setSubmitStatus('User registered successfully!');

      // Clear form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      });
    } catch (error) {
      setSubmitStatus('Error submitting form');
    }
  };

  return (
    <div>
      <h1>Sign up</h1>
      Already have an account?<a href="#">Sign in</a><br /><br />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          className="input-field"
          value={formData.firstName}
          onChange={handleChange}
        /><br /><br />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          className="input-field"
          value={formData.lastName}
          onChange={handleChange}
        /><br /><br />
        <input
          type="text"
          name="email"
          placeholder="Email"
          className="input-field"
          value={formData.email}
          onChange={handleChange}
        /><br /><br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="input-field"
          value={formData.password}
          onChange={handleChange}
        /><br /><br />
        I agree to the <a href="#">terms and conditions</a><br />
        <button type="submit" className="button">submit</button>
        {/* Display the submit status */}
        {submit && <p>{submit}</p>}
      </form>
    </div>
  );
};

export default Form;
