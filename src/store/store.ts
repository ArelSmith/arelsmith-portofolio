import { configureStore, createSlice } from "@reduxjs/toolkit";

const projectSlice = createSlice({
  name: "projects",
  initialState: { selected: null },
  reducers: {
    setSelectedProject: (state, action) => {
      state.selected = action.payload;
    },
  },
});

export const { setSelectedProject } = projectSlice.actions;

export default configureStore({
  reducer: {
    projects: projectSlice.reducer,
  },
});
