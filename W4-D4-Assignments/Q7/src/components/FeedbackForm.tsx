import React, { ChangeEvent, FormEvent } from 'react';
import { useFeedback } from '../context/FeedbackContext';
import { useNavigate } from 'react-router-dom';

const FeedbackForm: React.FC = () => {
  const { feedbackData, setFeedbackData } = useFeedback();
  const [error, setError] = React.useState('');
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFeedbackData((prevData) => ({
      ...prevData,
      [name]: name === 'rating' ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Simple validation
    if (!feedbackData.name || !feedbackData.email || !feedbackData.rating || !feedbackData.feedback) {
      setError('Please fill out all fields.');
      return;
    }

    // Navigate to the summary page
    navigate('/summary');
  };

  return (
    <div>
      <h1>Feedback Form</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={feedbackData.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={feedbackData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Rating:</label>
          <input type="number" name="rating" value={feedbackData.rating} onChange={handleChange} min={1} max={5} required />
        </div>
        <div>
          <label>Feedback:</label>
          <textarea name="feedback" value={feedbackData.feedback} onChange={handleChange} required />
        </div>
        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
};

export default FeedbackForm;
