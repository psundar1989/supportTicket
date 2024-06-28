import { createSlice } from '@reduxjs/toolkit';

const profileSlice = createSlice({
  name: 'Profile',
  initialState: {
    user: null, // Initial state for user
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = profileSlice.actions;
export default profileSlice.reducer;
