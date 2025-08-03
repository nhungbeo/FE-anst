import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getCurrentTheme } from '../../features/theme/themeSlice';

const ThemeProvider = ({ children }) => {
  const theme = useSelector(getCurrentTheme);

  useEffect(() => {
    // Áp dụng CSS variables cho theme
    const root = document.documentElement;
    
    Object.entries(theme.colors).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}`, value);
    });

    // Áp dụng background cho body
    document.body.style.background = theme.colors.background;
    document.body.style.backgroundAttachment = 'fixed';
    
  }, [theme]);

  return <>{children}</>;
};

export default ThemeProvider;