import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null
  },
  reducers: {
    register: (state, action) => {
      console.log("Register action payload: ", action.payload);
      state.user = (action.payload);
    },
  },
});

export const { register } = userSlice.actions;
export const selectUser = (state) => state.user.user;
export default userSlice.reducer;