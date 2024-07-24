function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    // Store the user's preference in local storage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}

// Apply the user's theme preference on page load
document.addEventListener('DOMContentLoaded', (event) => {
    const userTheme = localStorage.getItem('theme');
    if (userTheme && userTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }
});
