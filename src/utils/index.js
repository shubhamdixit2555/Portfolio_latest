
  // move cursor
  document.addEventListener('DOMContentLoaded', function() {
    const cursor = document.querySelector('#cursor');
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX;
        const y = e.clientY;
        // Adjust the position to center the cursor 
        const cursorWidth = cursor.offsetWidth / 2;
        const cursorHeight = cursor.offsetHeight / 2;
        setTimeout(() => {
          cursor.style.transform = `translate(${x - cursorWidth}px, ${y - cursorHeight}px)`;
        }, 100);
        cursor.style.opacity = 1; // Show the cursor
    });
  
    const links = document.querySelectorAll('a, button, .pointer');
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            cursor.classList.add("crsr_hover");        
        });
        link.addEventListener('mouseleave', () => {
            cursor.classList.remove("crsr_hover");        
        });
    });
  
  });