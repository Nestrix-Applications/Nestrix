// This file contains minimal JavaScript code to manage the display of the current projects list.

document.addEventListener('DOMContentLoaded', function() {
    const siteName = 'Nestrix';
    const projects = [
        { name: 'Project 1: project logging application', url: 'https://github.com/Nestrix-Applications/project-tracker' },
        { name: 'project 2: Auto Blob: Arena', url: 'https://nestrix-applications.github.io/Auto-Blob-Arena/' },
    ];

    // Update the site name
    const siteTitle = document.getElementById('site-title');
    if (siteTitle) {
        siteTitle.textContent = siteName;
    }

    const projectList = document.getElementById('project-list');

    projects.forEach(function(project) {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.textContent = project.name;
        link.href = project.url;
        link.target = '_blank'; // Opens the link in a new tab
        listItem.appendChild(link);
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