// src/hooks/useNavbarScroll.js
import { useEffect } from 'react';

const useNavbarScroll = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('#navbar-default ul li a');
    const navbarHeight = document.querySelector('nav').offsetHeight;

    // Adjust padding to prevent content from hiding under navbar
    sections.forEach((section) => {
      section.style.paddingTop = `${navbarHeight}px`;
      section.style.marginTop = `-${navbarHeight}px`;
    });

    const handleScroll = () => {
      sections.forEach((sec) => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 100; // Adjust this value according to your navbar height
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
          navLinks.forEach((link) => {
            link.classList.remove('active');
            document
              .querySelector(`#navbar-default ul li a[href*=${id}]`)
              .classList.add('active');
          });
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
};

export default useNavbarScroll;