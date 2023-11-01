import { createSlice } from "@reduxjs/toolkit";

interface State {
  user: {
    name: string
  }
}

const initialState: State = { user: { name: 'ahmad eid' } }

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    }
  }
});

export const {
  setUser
} = userSlice.actions;
export default userSlice.reducer;