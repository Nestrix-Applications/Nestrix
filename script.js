function generateProjectHTML(project) {
    return `
        <div class="content-1">
            <p>${project.name} <span class="${project.lang}"></span></p>
            <p class="description">${project.description}</p>
            <button onclick="window.location.href='${project.link}'">View</button>
        </div>
    `;
}
const container = document.getElementById('projects');
projects.forEach(project => {
    container.innerHTML += generateProjectHTML(project);
});

// Sidebar functionality
const sidebar = document.getElementById('sidebar');
const menuBtn = document.getElementById('menuBtn');
const closeSidebar = document.getElementById('closeSidebar');
const toggleDarkMode = document.getElementById('toggleDarkMode');

menuBtn.addEventListener('click', () => {
    if (sidebar.style.width === '300px') {
        sidebar.style.width = '0';
    } else {
        sidebar.style.width = '300px';
        if (document.body.classList.contains('dark-mode')) {
            sidebar.classList.add('dark');
        } else {
            sidebar.classList.remove('dark');
        }
    }
});
closeSidebar.addEventListener('click', () => {
    sidebar.style.width = '0';
});

// Dark mode toggle
toggleDarkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    sidebar.classList.toggle('dark');
    // Optionally, save preference
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

// Load theme preference
window.addEventListener('DOMContentLoaded', () => {
    const theme = localStorage.getItem('theme');
    if (theme === 'light') {
        document.body.classList.remove('dark-mode');
        sidebar.classList.remove('dark');
    } else {
        // Default to dark mode
        document.body.classList.add('dark-mode');
        sidebar.classList.add('dark');
    }
});

// https://youtu.be/dQw4w9WgXcQ