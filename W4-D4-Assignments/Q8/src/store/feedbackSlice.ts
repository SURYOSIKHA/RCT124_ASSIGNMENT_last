import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Feedback {
  name: string;
  email: string;
  rating: number;
  feedback: string;
  date: string; // Added date for filtering
}

interface FeedbackState {
  feedbacks: Feedback[];
}

const initialState: FeedbackState = {
  feedbacks: [],
};

const feedbackSlice = createSlice({
  name: 'feedback',
  initialState,
  reducers: {
    addFeedback: (state, action: PayloadAction<Feedback>) => {
      state.feedbacks.push(action.payload);
    },
    // You can add more reducers here for filtering, etc.
  },
});

export const { addFeedback } = feedbackSlice.actions;
export default feedbackSlice.reducer;
