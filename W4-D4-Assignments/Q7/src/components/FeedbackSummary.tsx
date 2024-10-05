import React from 'react';
import { useFeedback } from '../context/FeedbackContext';
import { Link } from 'react-router-dom';

const FeedbackSummary: React.FC = () => {
  const { feedbackData } = useFeedback();

  return (
    <div>
      <h1>Feedback Summary</h1>
      <p><strong>Name:</strong> {feedbackData.name}</p>
      <p><strong>Email:</strong> {feedbackData.email}</p>
      <p><strong>Rating:</strong> {feedbackData.rating}</p>
      <p><strong>Feedback:</strong> {feedbackData.feedback}</p>
      <Link to="/">Edit Feedback</Link>
    </div>
  );
};

export default FeedbackSummary;
