import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FeedbackProvider } from './context/FeedbackContext';
import FeedbackForm from './components/FeedbackForm';
import FeedbackSummary from './components/FeedbackSummary';

const App: React.FC = () => {
  return (
    <FeedbackProvider>
      <Router>
        <Routes>
          <Route path="/" element={<FeedbackForm />} />
          <Route path="/summary" element={<FeedbackSummary />} />
        </Routes>
      </Router>
    </FeedbackProvider>
  );
};

export default App
