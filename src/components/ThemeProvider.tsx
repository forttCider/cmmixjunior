'use client';

import { useEffect } from 'react';

export default function ThemeProvider() {
  useEffect(() => {
    // Initialize theme from localStorage or default to light mode
    const savedTheme = localStorage.getItem('theme');
    const theme = savedTheme || 'light';
    document.documentElement.setAttribute('data-theme', theme);
  }, []);

  return null;
}
