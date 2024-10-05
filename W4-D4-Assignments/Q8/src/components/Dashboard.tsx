import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { Bar } from 'react-chartjs-2';
import { Box, Heading } from '@chakra-ui/react';

const Dashboard: React.FC = () => {
  const feedbacks = useSelector((state: RootState) => state.feedback.feedbacks);

  const ratings = feedbacks.map(feedback => feedback.rating);
  const ratingCounts = [0, 0, 0, 0, 0]; // Counts for ratings 1 to 5

  ratings.forEach(rating => {
    if (rating >= 1 && rating <= 5) {
      ratingCounts[rating - 1]++;
    }
  });

  const data = {
    labels: ['1 Star', '2 Stars', '3 Stars', '4 Stars', '5 Stars'],
    datasets: [{
      label: 'Feedback Ratings',
      data: ratingCounts,
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
    }],
  };

  return (
    <Box p={5}>
      <Heading mb={5}>Feedback Dashboard</Heading>
      <Bar data={data} />
    </Box>
  );
};

export default Dashboard;
