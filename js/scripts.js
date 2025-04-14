// This file contains minimal JavaScript code to manage the display of the current projects list.

document.addEventListener('DOMContentLoaded', function() {
    const siteName = 'Nestrix';
    const projects = [
        'Project 1: Java Application Development',
        'Project 2: Browser-Based Game Development',
    ];

    // Update the site name
    const siteTitle = document.getElementById('site-title');
    if (siteTitle) {
        siteTitle.textContent = siteName;
    }

    const projectList = document.getElementById('project-list');

    projects.forEach(function(project) {
        const listItem = document.createElement('li');
        listItem.textContent = project;
        projectList.appendChild(listItem);
    });

    // Add a contact section
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
        const contactInfo = document.createElement('p');
        contactInfo.textContent = 'Contact us at: nestrix.help@gmail.com';
        contactSection.appendChild(contactInfo);
    }
});