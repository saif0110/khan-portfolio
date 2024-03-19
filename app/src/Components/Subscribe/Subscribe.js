import React, { useState } from 'react';
import './Subscribe.css';
import axios from 'axios';
function Subscribe() {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:4000/subscribe', formData);
      setLoading(false);
      setFormData({name: '', email: ''});
      alert('Subscribed! I will get back to you soon.');
    } catch (error) {
      setLoading(false);
      setFormData({name: '', email: ''});
      alert('Failed to subscribe');
    }
  };
  return (
    <div className='subscribeContainer'>
      <div className='formContainer'>
        <div className='formElement'>
          <input type="text" id="name" name='name' placeholder='Full name' value={formData.name} onChange={handleChange}/>
        </div>
        <div className='formElement'>
          <input type="email" id="email" name='email' placeholder='Email' value={formData.email} onChange={handleChange}/>
        </div>
        <div className='formElement'>
          <button type='submit' id='submit' onClick={handleSubmit}>
            {loading? 'Subscribing..': 'Subscribe'}
          </button>
          <p>Subscribe to be notified.</p>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;