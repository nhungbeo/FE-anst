import { createSlice } from '@reduxjs/toolkit';

// Định nghĩa các theme có sẵn
const themes = {
  light: {
    name: 'Light',
    colors: {
      primary: '#4f46e5',
      secondary: '#7c3aed',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      surface: 'rgba(255, 255, 255, 0.95)',
      text: '#333333',
      textSecondary: '#666666',
      border: 'rgba(79, 70, 229, 0.2)',
      shadow: 'rgba(0, 0, 0, 0.1)',
    }
  },
  dark: {
    name: 'Dark',
    colors: {
      primary: '#818cf8',
      secondary: '#a78bfa',
      background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)',
      surface: 'rgba(30, 27, 75, 0.95)',
      text: '#ffffff',
      textSecondary: '#cbd5e1',
      border: 'rgba(129, 140, 248, 0.3)',
      shadow: 'rgba(0, 0, 0, 0.3)',
    }
  },
  ocean: {
    name: 'Ocean',
    colors: {
      primary: '#0ea5e9',
      secondary: '#06b6d4',
      background: 'linear-gradient(135deg, #0c4a6e 0%, #164e63 100%)',
      surface: 'rgba(8, 145, 178, 0.95)',
      text: '#ffffff',
      textSecondary: '#e0f7fa',
      border: 'rgba(14, 165, 233, 0.3)',
      shadow: 'rgba(0, 0, 0, 0.2)',
    }
  },
  forest: {
    name: 'Forest',
    colors: {
      primary: '#10b981',
      secondary: '#059669',
      background: 'linear-gradient(135deg, #064e3b 0%, #065f46 100%)',
      surface: 'rgba(16, 185, 129, 0.95)',
      text: '#ffffff',
      textSecondary: '#d1fae5',
      border: 'rgba(16, 185, 129, 0.3)',
      shadow: 'rgba(0, 0, 0, 0.2)',
    }
  },
  sunset: {
    name: 'Sunset',
    colors: {
      primary: '#f59e0b',
      secondary: '#ef4444',
      background: 'linear-gradient(135deg, #92400e 0%, #dc2626 100%)',
      surface: 'rgba(245, 158, 11, 0.95)',
      text: '#ffffff',
      textSecondary: '#fef3c7',
      border: 'rgba(245, 158, 11, 0.3)',
      shadow: 'rgba(0, 0, 0, 0.2)',
    }
  }
};

// Màu chủ đạo có thể tùy chỉnh
const primaryColors = {
  blue: '#4f46e5',
  purple: '#7c3aed',
  green: '#10b981',
  orange: '#f59e0b',
  red: '#ef4444',
  pink: '#ec4899',
  indigo: '#6366f1',
  cyan: '#06b6d4',
  teal: '#14b8a6',
  lime: '#84cc16'
};

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    currentTheme: 'light',
    customPrimaryColor: '#4f46e5',
    isCustomMode: false,
    themes,
    primaryColors,
  },
  reducers: {
    setTheme: (state, action) => {
      state.currentTheme = action.payload;
      state.isCustomMode = false;
    },
    setPrimaryColor: (state, action) => {
      state.customPrimaryColor = action.payload;
      state.isCustomMode = true;
    },
    toggleTheme: (state) => {
      state.currentTheme = state.currentTheme === 'light' ? 'dark' : 'light';
      state.isCustomMode = false;
    },
    resetToDefault: (state) => {
      state.currentTheme = 'light';
      state.customPrimaryColor = '#4f46e5';
      state.isCustomMode = false;
    }
  },
});

// Selector để lấy theme hiện tại
export const getCurrentTheme = (state) => {
  const { currentTheme, customPrimaryColor, isCustomMode, themes } = state.theme;
  
  if (isCustomMode) {
    // Tạo theme tùy chỉnh dựa trên màu chủ đạo
    const baseTheme = themes[currentTheme];
    return {
      ...baseTheme,
      colors: {
        ...baseTheme.colors,
        primary: customPrimaryColor,
        secondary: customPrimaryColor,
        border: `${customPrimaryColor}33`, // 20% opacity
      }
    };
  }
  
  return themes[currentTheme];
};

export const { setTheme, setPrimaryColor, toggleTheme, resetToDefault } = themeSlice.actions;
export default themeSlice.reducer;