import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FeedbackForm from './components/FeedbackForm';
import Dashboard from './components/Dashboard';
import { Box } from '@chakra-ui/react';

const App: React.FC = () => {
  return (
    <Router>
      <Box>
        <Routes>
          <Route path="/" element={<FeedbackForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Box>
    </Router>
  );
};

export default App;
