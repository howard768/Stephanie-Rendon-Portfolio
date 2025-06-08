import { useState, useEffect } from 'react';

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button 
      className="back-to-top" 
      aria-label="Back to top" 
      title="Back to top"
      style={{ display: isVisible ? 'flex' : 'none' }}
      onClick={scrollToTop}
    >
      ↑
    </button>
  );
}

export default BackToTop; 