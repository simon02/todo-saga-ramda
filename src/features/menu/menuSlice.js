const { createSlice } = require('@reduxjs/toolkit');

export const initialItems = ['All', 'Overdue', 'Uncategorized'];
export const [
  ALL_MENU_ITEM,
  OVERDUE_MENU_ITEM,
  UNCATEGORIZED_MENU_ITEM,
] = initialItems;

const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    items: initialItems,
    selected: ALL_MENU_ITEM,
  },
  reducers: {
    add: (state, action) => {
      if (!state.items.find((item) => item === action.payload)) {
        state.items.push(action.payload);
      }
    },
    remove: (state, action) => {
      state.items.filter((menu) => menu !== action.payload);
    },
    select: (state, action) => {
      state.selected = action.payload;
    },
  },
});

export const { add, remove, select } = menuSlice.actions;

export default menuSlice.reducer;
