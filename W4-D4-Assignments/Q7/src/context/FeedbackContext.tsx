import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the shape of feedback data
interface FeedbackData {
  name: string;
  email: string;
  rating: number;
  feedback: string;
}

// Create the context
const FeedbackContext = createContext<{
  feedbackData: FeedbackData;
  setFeedbackData: React.Dispatch<React.SetStateAction<FeedbackData>>;
} | null>(null);

// Create a provider component
export const FeedbackProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [feedbackData, setFeedbackData] = useState<FeedbackData>({
    name: '',
    email: '',
    rating: 0,
    feedback: '',
  });

  return (
    <FeedbackContext.Provider value={{ feedbackData, setFeedbackData }}>
      {children}
    </FeedbackContext.Provider>
  );
};

// Custom hook to use the FeedbackContext
export const useFeedback = () => {
  const context = useContext(FeedbackContext);
  if (!context) {
    throw new Error('useFeedback must be used within a FeedbackProvider');
  }
  return context;
};
