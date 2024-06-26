import { configureStore } from "@reduxjs/toolkit";
import userSlicer from "./slicers/userSlicer";

const store = configureStore({
  reducer: {
    users: userSlicer,
  },
});

export default store;
