document.addEventListener("DOMContentLoaded", function () {
    const toggleBio = document.getElementById("toggle-bio");
    const bioSection = document.getElementById("Bio");

    toggleBio.addEventListener("click", function () {
        bioSection.classList.toggle("expanded");
        
        // Toggle visibility of p elements in the #Bio section
        const bioParagraphs = bioSection.querySelectorAll("p");
        bioParagraphs.forEach(function (paragraph) {
            paragraph.classList.toggle("hidden");
        });
    });

    const toggleProjects = document.getElementById("toggle-projects");
    const projectsSection = document.getElementById("project-videos");

    toggleProjects.addEventListener("click", function () {
        projectsSection.classList.toggle("expanded");

        // Toggle visibility of h5, h6, and iframe elements in the #project-videos section
        const projectHeadings = projectsSection.querySelectorAll("h5, h6, iframe");
        projectHeadings.forEach(function (element) {
            element.classList.toggle("hidden");
        });
    });
});

  