import { createSlice } from "@reduxjs/toolkit";
import profile from "../profile/profile.json";

const profileSlice = createSlice({
  name: "profile",
  initialState: profile,
  reducers: {
    editProfile(state, action) {
      const [fn, ln, bi, web, loc, bir] = action.payload;
      console.log("Prev state");
      console.log(state);
      if (fn) state.firstName = fn;
      if (ln) state.lastName = ln;
      if (bi) state.bio = bi;
      if (web) state.website = web;
      if (loc) state.loc = loc;
      if (bir) state.dateOfBirth = bir;
      console.log("After state");
      console.log(state);
      return state;
    },
  },
});

export const { editProfile } = profileSlice.actions;
export default profileSlice.reducer;
