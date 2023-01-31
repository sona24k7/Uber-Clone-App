import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  origin: null,
  destination: null,
  travelTimeInfo: null,
  startDate: null,
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setTravelTimeInfo: (state, action) => {
      state.travelTimeInfo = action.payload;
    },
    setStartDate: (state, action) => {
      state.startDate = action.payload;
    },
  },
});

export const { setOrigin, setDestination, setTravelTimeInfo, setStartDate } =
  navSlice.actions;

export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeinfo = (state) => state.nav.travelTimeInfo;
export const selectStartDate = (state) => state.nav.selectStartDate;
export default navSlice.reducer;
