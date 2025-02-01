// src/components/Cursor.jsx
import { useEffect } from 'react';
import cur1 from '../assets/Cursors/cur1.gif'; // Import the default cursor image
import cur2 from '../assets/Cursors/cur2.gif'; // Import the hover cursor image
import './Cursor.css';

const Cursor = () => {
  useEffect(() => {
    const cursor = document.querySelector('#cursor'); // Cyan circle
    const defaultCursor = document.querySelector('#defaultCursor'); // Default cursor (cur1.gif)
    const hoverCursor = document.querySelector('#hoverCursor'); // Hover cursor (cur2.gif)

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

      // Move the default cursor (cur1.gif)
      defaultCursor.style.transform = `translate(${x + 55}px, ${y + 55}px)`; // Adjust for cursor size

      // Move the hover cursor (cur2.gif)
      hoverCursor.style.transform = `translate(${x +10 }px, ${y +10 }px)`; // Adjust for cursor size
    };

    // Function to handle hover effects
    const handleHover = () => {
      cursor.classList.add('crsr_hover'); // Transform cyan circle to purple circle
      defaultCursor.style.display = 'none'; // Hide default cursor (cur1.gif)
      hoverCursor.style.display = 'block'; // Show hover cursor (cur2.gif)
    };

    const handleHoverLeave = () => {
      cursor.classList.remove('crsr_hover'); // Revert purple circle to cyan circle
      defaultCursor.style.display = 'block'; // Show default cursor (cur1.gif)
      hoverCursor.style.display = 'none'; // Hide hover cursor (cur2.gif)
    };

    // Add event listeners
    document.addEventListener('mousemove', moveCursor);

    const hoverElements = document.querySelectorAll('a, button, .pointer');
    hoverElements.forEach((element) => {
      element.addEventListener('mouseenter', handleHover);
      element.addEventListener('mouseleave', handleHoverLeave);
    });
    document.addEventListener("mouseleave", () => {
      defaultCursor.style.opacity = 0;
      cursor.style.opacity = 0;
    });
  
    // Show the cursors when entering the page
    document.addEventListener("mouseenter", () => {
      defaultCursor.style.opacity = 1;
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

      {/* Default Cursor (cur1.gif) */}
      <div id="defaultCursor" className="custom-cursor">
        <img src={cur1} alt="default cursor" />
      </div>

      {/* Hover Cursor (cur2.gif) */}
      <div id="hoverCursor" className="hover-cursor">
        <img src={cur2} alt="hover cursor" />
      </div>
    </>
  );
};

export default Cursor;