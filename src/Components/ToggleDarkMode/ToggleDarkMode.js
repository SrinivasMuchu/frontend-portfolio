import React from 'react';
import { useTheme } from '../../ThemeContext';

const ToggleDarkMode = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <div>
      <label>
        Dark Mode
        <input
          type="checkbox"
          checked={darkMode}
          onChange={toggleDarkMode}
        />
      </label>
    </div>
  );
};

export default ToggleDarkMode;
