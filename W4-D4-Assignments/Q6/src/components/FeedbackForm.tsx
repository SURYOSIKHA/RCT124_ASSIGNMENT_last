import React, { useState } from 'react';
import { FeedbackData } from '../types/Feedback';

const FeedbackForm: React.FC = () => {
  const [formData, setFormData] = useState<FeedbackData>({
    name: '',
    email: '',
    rating: 0,
    feedback: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === 'rating' ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple form validation
    if (!formData.name || !formData.email || !formData.rating || !formData.feedback) {
      setError('Please fill out all fields.');
      return;
    }

    // Display confirmation message
    setSubmitted(true);
    setError('');
    
    // Clear form fields
    setFormData({ name: '', email: '', rating: 0, feedback: '' });
  };

  return (
    <div>
      <h1>Feedback Form</h1>
      {submitted && <p>Thank you for your feedback!</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Rating:</label>
          <input type="number" name="rating" value={formData.rating} onChange={handleChange} min={1} max={5} required />
        </div>
        <div>
          <label>Feedback:</label>
          <textarea name="feedback" value={formData.feedback} onChange={handleChange} required />
        </div>
        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
};

export default FeedbackForm;
