// Theme toggle functionality
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    const icon = themeToggle.querySelector('i');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Function to set the theme
    const setTheme = (theme) => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        
        // Add animation to the icon
        icon.style.transform = 'rotate(360deg)';
        setTimeout(() => {
            icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
            icon.style.transform = 'rotate(0)';
        }, 150);
    };

    // Check saved or system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        setTheme(savedTheme);
    } else if (prefersDarkScheme.matches) {
        setTheme('dark');
    }

    // Toggle theme when clicking the button
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        setTheme(currentTheme === 'dark' ? 'light' : 'dark');
    });

    // Update theme when the system preference changes
    prefersDarkScheme.addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            setTheme(e.matches ? 'dark' : 'light');
        }
    });
}); 