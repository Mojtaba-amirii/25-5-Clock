import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  breakLength: 5,
  sessionLength: 25,
  timerLabel: "Session",
  timeLeft: 1500,
  isRunning: false,
  currentType: "session",
};

const clockSlice = createSlice({
  name: "clock",
  initialState,
  reducers: {
    incrementBreak: (state) => {
      if (state.breakLength < 60) state.breakLength += 1;
    },
    decrementBreak: (state) => {
      if (state.breakLength > 1) state.breakLength -= 1;
    },
    incrementSession: (state) => {
      if (state.sessionLength < 60) {
        state.sessionLength += 1;
        state.timeLeft = state.sessionLength * 60;
      }
    },
    decrementSession: (state) => {
      if (state.sessionLength > 1) {
        state.sessionLength -= 1;
        state.timeLeft = state.sessionLength * 60;
      }
    },
    reset: (state) => {
      return { ...initialState, timeLeft: initialState.sessionLength * 60 };
    },
    tick: (state) => {
      if (state.timeLeft > 0) {
        state.timeLeft -= 1;
      } else if (state.currentType === "session") {
        state.currentType = "break";
        state.timerLabel = "Break";
        state.timeLeft = state.breakLength * 60;
      } else {
        state.currentType = "session";
        state.timerLabel = "Session";
        state.timeLeft = state.sessionLength * 60;
      }
    },
    toggleRunning: (state) => {
      state.isRunning = !state.isRunning;
    },
  },
});

export const {
  incrementBreak,
  decrementBreak,
  incrementSession,
  decrementSession,
  reset,
  tick,
  toggleRunning,
} = clockSlice.actions;

export default clockSlice.reducer;
