'use client';

import { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { store } from '@/store/store';
import { setTheme } from '@/store/themeSlice';
import { setFavorites } from '@/store/favoritesSlice';

function ThemeInitializer({ children }: { children: React.ReactNode }) {
  const dispatch = useDispatch();

  useEffect(() => {
    // Load theme from localStorage on mount
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;

    if (savedTheme) {
      dispatch(setTheme(savedTheme));
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      dispatch(setTheme(prefersDark ? 'dark' : 'light'));
    }

    // Load favorites from localStorage
    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
      try {
        const favorites = JSON.parse(savedFavorites);
        dispatch(setFavorites(favorites));
      } catch (error) {
        console.error('Failed to parse favorites:', error);
      }
    }
  }, [dispatch]);

  return <>{children}</>;
}

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <ThemeInitializer>{children}</ThemeInitializer>
    </Provider>
  );
}