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
  },
  sun: {
    name: 'Sun',
    colors: {
      primary: '#fbbf24',
      secondary: '#f59e0b',
      background: `
        linear-gradient(to bottom, 
          #87ceeb 0%, 
          #87ceeb 40%, 
          #4682b4 60%, 
          #1e40af 100%
        ),
        url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 600'%3E%3Cdefs%3E%3Cstyle%3E.cloud%7Bfill:%23ffffff;opacity:0.8%7D.ship%7Bfill:%23654321%7D.sail%7Bfill:%23ffffff%7D%3C/style%3E%3C/defs%3E%3C!-- Clouds --%3E%3Cellipse class='cloud' cx='200' cy='80' rx='60' ry='30'/%3E%3Cellipse class='cloud' cx='180' cy='70' rx='40' ry='20'/%3E%3Cellipse class='cloud' cx='220' cy='70' rx='40' ry='20'/%3E%3Cellipse class='cloud' cx='600' cy='120' rx='80' ry='40'/%3E%3Cellipse class='cloud' cx='570' cy='105' rx='50' ry='25'/%3E%3Cellipse class='cloud' cx='630' cy='105' rx='50' ry='25'/%3E%3Cellipse class='cloud' cx='1000' cy='90' rx='70' ry='35'/%3E%3Cellipse class='cloud' cx='980' cy='80' rx='45' ry='22'/%3E%3Cellipse class='cloud' cx='1020' cy='80' rx='45' ry='22'/%3E%3C!-- Ships --%3E%3Cg transform='translate(300,400)'%3E%3Crect class='ship' x='0' y='20' width='80' height='15'/%3E%3Cpolygon class='ship' points='0,20 -10,35 90,35 80,20'/%3E%3Crect class='ship' x='35' y='0' width='3' height='25'/%3E%3Cpolygon class='sail' points='38,5 38,20 55,18 55,7'/%3E%3C/g%3E%3Cg transform='translate(800,420)'%3E%3Crect class='ship' x='0' y='15' width='60' height='12'/%3E%3Cpolygon class='ship' points='0,15 -8,27 68,27 60,15'/%3E%3Crect class='ship' x='25' y='0' width='2' height='20'/%3E%3Cpolygon class='sail' points='27,3 27,15 40,13 40,5'/%3E%3C/g%3E%3Cg transform='translate(100,430)'%3E%3Crect class='ship' x='0' y='18' width='50' height='10'/%3E%3Cpolygon class='ship' points='0,18 -6,28 56,28 50,18'/%3E%3Crect class='ship' x='20' y='5' width='2' height='18'/%3E%3Cpolygon class='sail' points='22,7 22,18 32,16 32,9'/%3E%3C/g%3E%3C/svg%3E")
      `,
      surface: 'rgba(255, 255, 255, 0.95)',
      text: '#1f2937',
      textSecondary: '#4b5563',
      border: 'rgba(251, 191, 36, 0.3)',
      shadow: 'rgba(0, 0, 0, 0.1)',
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