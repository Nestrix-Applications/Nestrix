// This file contains minimal JavaScript code to manage the display of the current projects list.

document.addEventListener('DOMContentLoaded', function() {
    const projects = [
        'Project 1: Java Application Development',
    ];

    const projectList = document.getElementById('project-list');

    projects.forEach(function(project) {
        const listItem = document.createElement('li');
        listItem.textContent = project;
        projectList.appendChild(listItem);
    });
});