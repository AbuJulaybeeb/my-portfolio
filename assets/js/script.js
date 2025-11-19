// 1. Init Animations
AOS.init({
  duration: 800,
  once: true,
  offset: 50
});

// 2. Mobile Menu Toggle
const navBtn = document.getElementById('nav-btn');
const navList = document.getElementById('nav-list');
const navLinks = document.querySelectorAll('.nav-link');

if(navBtn) {
  navBtn.addEventListener('click', () => {
    navList.classList.toggle('active');
  });
}

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navList.classList.remove('active');
  });
});

// 3. Dark/Light Mode Logic
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved user preference on load
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
  body.classList.add('light-mode');
}

// Toggle Function
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    
    // Save preference to local storage
    if (body.classList.contains('light-mode')) {
      localStorage.setItem('theme', 'light');
    } else {
      localStorage.setItem('theme', 'dark');
    }
  });
}