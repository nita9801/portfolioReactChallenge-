import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required.';
    if (!formData.email) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid.';
    }
    if (!formData.message) newErrors.message = 'Message is required.';
    setErrors(newErrors);
  
    if (Object.keys(newErrors).length === 0) {
      // Submit the form (e.g., send data to a backend or email service)
      console.log('Form submitted:', formData);
    }
  };

  const renderField = (label, type, name, value, error) => (
    <div className="form-group">
      <label>{label}</label>
      {type === 'textarea' ? (
        <textarea name={name} value={value} onChange={handleChange} required></textarea>
      ) : (
        <input type={type} name={name} value={value} onChange={handleChange} required />
      )}
      {error && <p className="error">{error}</p>}
    </div>
  );

  return (
    <section className="contact">
      <h2>Contact</h2>
      {success && <p className="success-message">Thank you for your message! I'll get back to you soon.</p>}
      <form onSubmit={handleSubmit}>
        {renderField('Name', 'text', 'name', formData.name, errors.name)}
        {renderField('Email', 'email', 'email', formData.email, errors.email)}
        {renderField('Message', 'textarea', 'message', formData.message, errors.message)}
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};
export default Contact;