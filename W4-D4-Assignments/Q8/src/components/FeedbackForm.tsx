import React, { ChangeEvent, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { addFeedback } from '../store/feedbackSlice';
import { Button, FormControl, FormLabel, Input, Textarea, Stack, Alert } from '@chakra-ui/react';

const FeedbackForm: React.FC = () => {
  const dispatch = useDispatch();
  const [feedbackData, setFeedbackData] = React.useState({
    name: '',
    email: '',
    rating: 0,
    feedback: '',
  });
  const [error, setError] = React.useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFeedbackData((prevData) => ({
      ...prevData,
      [name]: name === 'rating' ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!feedbackData.name || !feedbackData.email || !feedbackData.rating || !feedbackData.feedback) {
      setError('Please fill out all fields.');
      return;
    }

    const feedbackWithDate = { ...feedbackData, date: new Date().toISOString() };
    dispatch(addFeedback(feedbackWithDate));
    setFeedbackData({ name: '', email: '', rating: 0, feedback: '' }); // Reset form
    setError('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={3}>
        {error && <Alert status="error">{error}</Alert>}
        <FormControl>
          <FormLabel>Name:</FormLabel>
          <Input type="text" name="name" value={feedbackData.name} onChange={handleChange} required />
        </FormControl>
        <FormControl>
          <FormLabel>Email:</FormLabel>
          <Input type="email" name="email" value={feedbackData.email} onChange={handleChange} required />
        </FormControl>
        <FormControl>
          <FormLabel>Rating:</FormLabel>
          <Input type="number" name="rating" value={feedbackData.rating} onChange={handleChange} min={1} max={5} required />
        </FormControl>
        <FormControl>
          <FormLabel>Feedback:</FormLabel>
          <Textarea name="feedback" value={feedbackData.feedback} onChange={handleChange} required />
        </FormControl>
        <Button type="submit" colorScheme="teal">Submit Feedback</Button>
      </Stack>
    </form>
  );
};

export default FeedbackForm;
