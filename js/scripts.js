document.addEventListener('DOMContentLoaded', function() {
    console.log("JS is running");

    const siteName = 'Nestrix';
    const projects = [
        { name: 'Project 1: project logging application', url: 'https://github.com/Nestrix-Applications/project-tracker' },
        { name: 'Project 2: Auto Blob: Arena', url: 'https://nestrix-applications.github.io/Auto-Blob-Arena/' },
    ];

    // Update the site name
    const siteTitle = document.getElementById('site-title');
    if (siteTitle) {
        siteTitle.textContent = siteName;
    } else {
        console.warn("site-title element not found");
    }

    const projectList = document.getElementById('project-list');
    if (projectList) {
        projects.forEach(function(project) {
            const listItem = document.createElement('li');
            const link = document.createElement('a');
            link.textContent = project.name;
            link.href = project.url;
            link.target = '_blank';
            listItem.appendChild(link);
            projectList.appendChild(listItem);
        });
    } else {
        console.warn("project-list element not found");
    }

    // Add a contact section
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
        const contactInfo = document.createElement('p');
        contactInfo.textContent = 'Contact us at: nestrix.help@gmail.com';
        contactSection.appendChild(contactInfo);
    } else {
        console.warn("contact-section element not found");
    }
});