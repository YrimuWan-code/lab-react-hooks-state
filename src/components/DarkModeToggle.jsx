import React from 'react'

const DarkModeToggle = ({ isDark, onToggle }) => {
  // TODO: Implement dark mode toggle logic

  return (
    //Add onClick event to the button to toggle dark mode
    <button onClick={onToggle}>
      {/* Change button text based on dark mode state */}

      {isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
  );
};

export default DarkModeToggle;
