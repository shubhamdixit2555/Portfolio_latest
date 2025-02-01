document.addEventListener('DOMContentLoaded', function() {
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('#navbar-default ul li a');
    let navbarHeight = document.querySelector('nav').offsetHeight;
  
    // Adjust padding to prevent content from hiding under navbar
    sections.forEach(function (section) {
      section.style.paddingTop = navbarHeight + 'px';
      section.style.marginTop = '-' + navbarHeight + 'px';
    });
  
    window.onscroll = () => {
      sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100; // Adjust this value according to your navbar height
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
  
        if (top >= offset && top < offset + height) {
          navLinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector('#navbar-default ul li a[href*=' + id + ']').classList.add('active');
          });
        }
      });
    };
  });
  
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
  
    // JavaScript to move the custom cursor
    const defaultCursor = document.getElementById("defaultCursor");
    const hoverCursor = document.getElementById("hoverCursor");
  
    // Update cursor position on mouse move
    document.addEventListener("mousemove", (e) => {
      defaultCursor.style.left = `${e.clientX}px`;
      defaultCursor.style.top = `${e.clientY}px`;
      
      hoverCursor.style.left = `${e.clientX}px`;
      hoverCursor.style.top = `${e.clientY}px`;
    });
  
    // Show hover cursor on specific elements
    const hoverElements = document.querySelectorAll("a, button, .pointer");
  
    hoverElements.forEach((element) => {
      element.addEventListener("mouseenter", () => {
        defaultCursor.style.display = "none"; // Hide the default cursor
        hoverCursor.style.display = "block"; // Show the hover cursor
      });
  
      element.addEventListener("mouseleave", () => {
        defaultCursor.style.display = "block"; // Show the default cursor
        hoverCursor.style.display = "none"; // Hide the hover cursor
      });
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
  });