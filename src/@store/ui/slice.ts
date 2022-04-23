import { createSlice } from '@reduxjs/toolkit';
import { ThemeColorsType, THEME_COLORS } from '../../@types';

const uiInitialState = {
  // theme: THEME_COLORS.LIGHT,
  theme: 'light' as ThemeColorsType,
};

export type UIInitialStateType = typeof uiInitialState;

export const uiSlice = createSlice({
  name: 'ui',
  initialState: uiInitialState,
  reducers: {
    setThemeAC(state, action) {
      state.theme = action.payload;
    },
  },
});

export const uiReducer = uiSlice.reducer;
export const { setThemeAC } = uiSlice.actions;
