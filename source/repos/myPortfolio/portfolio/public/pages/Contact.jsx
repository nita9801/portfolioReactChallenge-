import React, { useState } from 'react';
const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form data and set errors if any
  };
  return (
    <section>
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          {errors.name && <p>{errors.name}</p>}
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div>
          <label>Message</label>
          <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>
          {errors.message && <p>{errors.message}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};
export default Contact;