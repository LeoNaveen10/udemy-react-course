import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter_slice",
  initialState: {
    items: [],
    notification: null,
    changed : false
  },
  reducers: {
    setInitialState: (state, action) => {
      if (action.payload) state.items.push(...action.payload);
    },
    showNotification: (state, action) => {
      state.notification = {
        ...action.payload,
      };
    },
    addToCart: (state, action) => {
      if (state.items.length == 0) {
        state.items.push({
          ...action.payload,
          quantity: 1,
          total: action.payload.price,
        });
      } else {
        state.items.forEach((item) => {
          if (action.payload.title == item.title) {
            item.quantity += 1;
            item.total = item.quantity * item.price;
          }
        });
      }
      state.changed = true;
    },
    increment: (state, action) => {
      state.items.forEach((item) => {
        if (action.payload == item.title) {
          item.quantity += 1;
          item.total = item.quantity * item.price;
        }
      });
      state.changed = true;

    },
    decrement: (state, action) => {
      state.items.forEach((item) => {
        if (action.payload == item.title) {
          item.quantity -= 1;
          item.total = item.quantity * item.price;
        }
        if (item.quantity == 0) {
          state.items = state.items.filter((i) => i.title != item.title);
        }
      });
      state.changed = true;
    },
  },
});

export default counterSlice.reducer;
export const counterActions = counterSlice.actions;
