import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getCurrentTheme } from '../../features/theme/themeSlice';
import SunThemeBackground from './SunThemeBackground';

const ThemeProvider = ({ children }) => {
  const theme = useSelector(getCurrentTheme);
  const currentThemeName = useSelector(state => state.theme.currentTheme);

  useEffect(() => {
    // Áp dụng CSS variables cho theme
    const root = document.documentElement;
    
    Object.entries(theme.colors).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}`, value);
    });

    // Áp dụng background cho body (trừ theme Sun vì có background riêng)
    if (currentThemeName !== 'sun') {
      document.body.style.background = theme.colors.background;
      document.body.style.backgroundAttachment = 'fixed';
    } else {
      // Theme Sun sử dụng background trong component
      document.body.style.background = 'transparent';
    }
    
  }, [theme, currentThemeName]);

  return (
    <>
      {currentThemeName === 'sun' && <SunThemeBackground />}
      {children}
    </>
  );
};

export default ThemeProvider;