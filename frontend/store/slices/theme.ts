import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';


interface ThemeState {
  currentTheme: 'light' | 'dark'
}

const initialState: ThemeState = {
  currentTheme: 'dark', // default to dark theme
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.currentTheme = state.currentTheme === 'light' ? 'dark' : 'light';
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export const selectCurrentTheme = (state: RootState) => state.theme.currentTheme;

export default themeSlice.reducer;

