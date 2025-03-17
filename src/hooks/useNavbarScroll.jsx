import { useEffect } from 'react';

const useNavbarScroll = () => {
  useEffect(() => {
    const onPageLoad = () => {
      const sections = document.querySelectorAll('section');
      const navLinks = document.querySelectorAll('#navbar-default ul li a');
      const navbar = document.querySelector('nav');

      if (!navbar) return; // ✅ Prevent error if navbar is missing
      const navbarHeight = navbar.offsetHeight;

      // Adjust padding to prevent content from hiding under navbar
      sections.forEach((section) => {
        section.style.paddingTop = `${navbarHeight}px`;
        section.style.marginTop = `-${navbarHeight}px`;
      });

      const handleScroll = () => {
        sections.forEach((sec) => {
          const top = window.scrollY;
          const offset = sec.offsetTop - 100; // Adjust based on navbar height
          const height = sec.offsetHeight;
          const id = sec.getAttribute('id');

          if (top >= offset && top < offset + height) {
            navLinks.forEach((link) => {
              link.classList.remove('active');
              const activeLink = document.querySelector(`#navbar-default ul li a[href*=${id}]`);
              if (activeLink) activeLink.classList.add('active'); // ✅ Prevent errors
            });
          }
        });
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    };

    // ✅ Ensure the script runs only after the page fully loads
    if (document.readyState === 'complete') {
      onPageLoad();
    } else {
      window.addEventListener('load', onPageLoad);
    }

    return () => window.removeEventListener('load', onPageLoad);
  }, []);
};

export default useNavbarScroll;
