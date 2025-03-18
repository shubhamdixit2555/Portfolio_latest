// src/components/Cursor.jsx
import { useEffect } from 'react';
import './Cursor.css';

const Cursor = () => {
  useEffect(() => {
    const cursor = document.querySelector('#cursor'); // Cyan circle

    // Function to move all cursors
    const moveCursor = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      // Move the cyan circle
      const cursorWidth = cursor.offsetWidth / 2;
      const cursorHeight = cursor.offsetHeight / 2;
      setTimeout(() => {
        cursor.style.transform = `translate(${x - cursorWidth}px, ${y - cursorHeight}px)`;
      }, 100);
      cursor.style.opacity = 1;

    };

    // Function to handle hover effects
    const handleHover = () => {
      cursor.classList.add('crsr_hover'); // Transform cyan circle to purple circle
    };

    const handleHoverLeave = () => {
      cursor.classList.remove('crsr_hover'); // Revert purple circle to cyan circle
    };

    // Add event listeners
    document.addEventListener('mousemove', moveCursor);

    const hoverElements = document.querySelectorAll('a, button, .pointer');
    hoverElements.forEach((element) => {
      element.addEventListener('mouseenter', handleHover);
      element.addEventListener('mouseleave', handleHoverLeave);
    });
    document.addEventListener("mouseleave", () => {
      cursor.style.opacity = 0;
    });
  
    // Show the cursors when entering the page
    document.addEventListener("mouseenter", () => {
      cursor.style.opacity = 1;
    });

    // Cleanup event listeners
    return () => {
      document.removeEventListener('mousemove', moveCursor);
      hoverElements.forEach((element) => {
        element.removeEventListener('mouseenter', handleHover);
        element.removeEventListener('mouseleave', handleHoverLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Cyan Circle */}
      <div id="cursor"></div>
    </>
  );
};

export default Cursor;