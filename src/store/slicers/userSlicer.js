import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
  },
  reducers: {
    getUsers() {
      // fetch("https://jsonplaceholder.typicode.com/posts")
      //   .then((data) => data.json())
      //   .then((data) => (state.users = data));
    },
  },
});

export const { getUsers } = userSlice.actions;
export default userSlice.reducer;
