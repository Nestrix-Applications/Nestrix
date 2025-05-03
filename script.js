
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

// https://youtu.be/dQw4w9WgXcQ