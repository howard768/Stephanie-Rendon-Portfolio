import { useState } from 'react';

function Navbar() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.body.classList.toggle('dark');
  };

  return (
    <nav className="navbar">
      <div className="nav-links">
        <a href="#about" className="nav-link">About</a>
        <a href="#work" className="nav-link">Work</a>
        <a href="#contact" className="nav-link">Contact</a>
      </div>
      <button className="toggle-btn" onClick={toggleTheme}>
        {isDark ? '☀️' : '🌙'}
      </button>
    </nav>
  );
}

export default Navbar; 