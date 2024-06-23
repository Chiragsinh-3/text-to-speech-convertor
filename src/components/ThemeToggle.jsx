import { useState, useEffect } from 'react';
import styles from './ThemeToggle.module.css';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.body.classList.toggle('light-mode', !isDark);
  }, [isDark]);
  

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <button className={styles.themeToggle} onClick={toggleTheme}>
      {isDark ? '☀️' : '🌙'}
    </button>
  );
};

export default ThemeToggle;