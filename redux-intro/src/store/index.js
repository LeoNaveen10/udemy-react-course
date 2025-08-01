import { createStore } from "redux";
import {  configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter";
import authSlice from "./auth";

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
});

export default store;

//gives out {type : 'unique indentifier, payload : data-sent}
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

//using only redux
// const counterReducer = (state = initialState, action) => {
//   if (action.type == "increment")
//     return { counter: state.counter + 1, showCounter: state.showCounter };
//   if (action.type == "decrement")
//     return { counter: state.counter - 1, showCounter: state.showCounter };
//   if (action.type == "increase")
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   if (action.type == "toggle")
//     return { counter: state.counter, showCounter: !state.showCounter };

//   return state;
// };
// const store = createStore(counterSlice.reducer);

//using class components
// const getState = () => {
//   const state = store.getState();
//   console.log(state);
//   return state;
// };

// store.subscribe(getState);

// store.dispatch({ type: "increment" });
// store.dispatch({ type: "decrement" });
