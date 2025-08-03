import { createSlice } from '@reduxjs/toolkit';

const backgroundSlice = createSlice({
  name: 'background',
  initialState: {
    currentBackground: '',
    backgroundType: 'default', // 'default', 'upload', 'url', 'gallery'
    customBackgrounds: [], // User uploaded backgrounds
    isCustomizerOpen: false,
  },
  reducers: {
    setBackground: (state, action) => {
      const { url, type } = action.payload;
      state.currentBackground = url;
      state.backgroundType = type;
    },
    addCustomBackground: (state, action) => {
      const background = {
        id: Date.now().toString(),
        url: action.payload.url,
        name: action.payload.name || 'Custom Background',
        timestamp: new Date().toISOString(),
      };
      state.customBackgrounds.unshift(background);
      
      // Keep only last 10 custom backgrounds
      if (state.customBackgrounds.length > 10) {
        state.customBackgrounds = state.customBackgrounds.slice(0, 10);
      }
    },
    removeCustomBackground: (state, action) => {
      state.customBackgrounds = state.customBackgrounds.filter(
        bg => bg.id !== action.payload
      );
    },
    resetBackground: (state) => {
      state.currentBackground = '';
      state.backgroundType = 'default';
    },
    openCustomizer: (state) => {
      state.isCustomizerOpen = true;
    },
    closeCustomizer: (state) => {
      state.isCustomizerOpen = false;
    },
    clearCustomBackgrounds: (state) => {
      state.customBackgrounds = [];
    }
  },
});

export const {
  setBackground,
  addCustomBackground,
  removeCustomBackground,
  resetBackground,
  openCustomizer,
  closeCustomizer,
  clearCustomBackgrounds
} = backgroundSlice.actions;

export default backgroundSlice.reducer;