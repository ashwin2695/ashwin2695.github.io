async function loadResume() {
    const response = await fetch('data.json');
    const data = await response.json();
    
    // Sidebar content
    document.getElementById('sidebar-name').innerText = data.name;
    
    // Parse contact information
    const contactParts = data.contact.split('|');
    document.getElementById('location').innerText = contactParts[0].trim();
    document.getElementById('phone').innerText = contactParts[1].trim();
    document.getElementById('email').innerText = contactParts[2].trim();
    
    // Summary
    document.getElementById('summary').innerText = data.summary;
    
    // Core competencies
    const competenciesSection = document.getElementById('core-competencies-content');
    data.coreCompetencies.forEach(competency => {
        competenciesSection.appendChild(createCompetencyElement(competency));
    });
    
    // Experience section
    const expSection = document.getElementById('experience-content');
    data.experience.forEach(job => {
        expSection.appendChild(createExperienceElement(job));
    });
    
    // Projects section
    const projectsSection = document.getElementById('projects-content');
    data.projects.forEach(project => {
        projectsSection.appendChild(createProjectElement(project));
    });
    
    // Education section
    const eduSection = document.getElementById('education-content');
    data.education.forEach(edu => {
        eduSection.appendChild(createEducationElement(edu));
    });
    
    // Skills section by category
    const skillsSection = document.getElementById('skills-content');
    
    // Group skills by category
    const skillsByCategory = {};
    data.skills.forEach(skill => {
        if (!skillsByCategory[skill.category]) {
            skillsByCategory[skill.category] = [];
        }
        skillsByCategory[skill.category].push(skill);
    });
    
    // Create sections for each category
    Object.keys(skillsByCategory).forEach(category => {
        const categoryContainer = document.createElement('div');
        categoryContainer.className = 'skills-category';
        
        const categoryTitle = document.createElement('div');
        categoryTitle.className = 'skills-category-title';
        categoryTitle.textContent = category;
        
        categoryContainer.appendChild(categoryTitle);
        
        skillsByCategory[category].forEach(skill => {
            categoryContainer.appendChild(createSkillElement(skill));
        });
        
        skillsSection.appendChild(categoryContainer);
    });
    
    // External tools section
    const toolsSection = document.getElementById('external-tools-content');
    data.externalTools.forEach(tool => {
        toolsSection.appendChild(createToolElement(tool));
    });
    
    // Certifications section
    const certSection = document.getElementById('certifications-content');
    data.certifications.forEach(cert => {
        certSection.appendChild(createCertificationCard(cert));
    });
    
    // Superbadges section
    const superbadgesSection = document.getElementById('superbadges-content');
    data.superbadges.forEach(badge => {
        superbadgesSection.appendChild(createSuperbadgeElement(badge));
    });
    
    // Extra curriculars
    const extrasSection = document.getElementById('extras-content');
    const extrasList = document.createElement('ul');
    extrasList.className = 'extras-list';
    
    data.extras.forEach(extra => {
        const li = document.createElement('li');
        li.textContent = extra;
        extrasList.appendChild(li);
    });
    
    extrasSection.appendChild(extrasList);
    
    // Add cloud animations to content sections
    document.querySelectorAll('.content-section').forEach(section => {
        const cloud = document.createElement('div');
        cloud.className = 'cloud-animation';
        section.style.position = 'relative';
        section.appendChild(cloud);
    });
    
    // Setup typing effect
    setupTypingEffect(data.titles);
    
    // Setup download button
    setupDownloadButton();
}

function createCompetencyElement(competency) {
    const element = document.createElement('div');
    element.className = 'competency-item';
    element.setAttribute('data-aos', 'fade-up');
    
    const icon = document.createElement('i');
    icon.className = 'fas fa-check-circle';
    
    const text = document.createElement('span');
    text.textContent = competency;
    
    element.appendChild(icon);
    element.appendChild(text);
    
    return element;
}

function createExperienceElement(job) {
    const element = document.createElement('div');
    element.className = 'experience-item';
    element.setAttribute('data-aos', 'fade-up');
    
    const header = document.createElement('div');
    header.className = 'experience-header';
    
    const title = document.createElement('div');
    title.innerHTML = `<span class="job-title">${job.title}</span> at <span class="company">${job.company}</span>`;
    
    const duration = document.createElement('div');
    duration.className = 'job-duration';
    duration.textContent = job.duration;
    
    header.appendChild(title);
    header.appendChild(duration);
    
    const details = document.createElement('p');
    details.textContent = job.details;
    
    element.appendChild(header);
    element.appendChild(details);
    
    return element;
}

function createProjectElement(project) {
    const element = document.createElement('div');
    element.className = 'project-item';
    element.setAttribute('data-aos', 'fade-up');
    
    const title = document.createElement('div');
    title.className = 'project-title';
    title.textContent = project.title;
    
    const details = document.createElement('p');
    details.className = 'project-details';
    details.textContent = project.details;
    
    element.appendChild(title);
    element.appendChild(details);
    
    return element;
}

function createEducationElement(edu) {
    const element = document.createElement('div');
    element.className = 'education-item';
    element.setAttribute('data-aos', 'fade-up');
    
    const degree = document.createElement('div');
    degree.className = 'degree';
    degree.textContent = edu.degree;
    
    const institution = document.createElement('div');
    institution.className = 'institution';
    institution.textContent = `${edu.institution} (${edu.duration})`;
    
    element.appendChild(degree);
    element.appendChild(institution);
    
    return element;
}

function createSkillElement(skill) {
    const element = document.createElement('div');
    element.className = 'skill-item';
    
    const icon = document.createElement('i');
    icon.className = 'fas fa-check';
    
    const text = document.createElement('span');
    text.textContent = skill.name;
    
    element.appendChild(icon);
    element.appendChild(text);
    
    return element;
}

function createToolElement(tool) {
    const element = document.createElement('div');
    element.className = 'tool-item';
    
    const icon = document.createElement('i');
    icon.className = 'fas fa-tools';
    
    const text = document.createElement('span');
    text.textContent = tool;
    
    element.appendChild(icon);
    element.appendChild(text);
    
    return element;
}

function createCertificationCard(cert) {
    const element = document.createElement('div');
    element.className = 'certification-card';
    element.setAttribute('data-aos', 'fade-up');
    
    const icon = document.createElement('i');
    icon.className = 'fas fa-certificate';
    
    const text = document.createElement('span');
    text.textContent = cert;
    
    element.appendChild(icon);
    element.appendChild(text);
    
    return element;
}

function createSuperbadgeElement(badge) {
    const element = document.createElement('div');
    element.className = 'superbadge-item';
    
    const icon = document.createElement('i');
    icon.className = 'fas fa-award';
    
    const text = document.createElement('span');
    text.textContent = badge;
    
    element.appendChild(icon);
    element.appendChild(text);
    
    return element;
}

function setupTypingEffect(titles) {
    const titleElement = document.getElementById('title-text');
    let currentTitleIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    function type() {
        const currentTitle = titles[currentTitleIndex];
        
        if (isDeleting) {
            titleElement.textContent = currentTitle.substring(0, currentCharIndex - 1);
            currentCharIndex--;
            typingSpeed = 50;
        } else {
            titleElement.textContent = currentTitle.substring(0, currentCharIndex + 1);
            currentCharIndex++;
            typingSpeed = 100;
        }
        
        if (!isDeleting && currentCharIndex === currentTitle.length) {
            isDeleting = true;
            typingSpeed = 1000; // Pause at the end
        } else if (isDeleting && currentCharIndex === 0) {
            isDeleting = false;
            currentTitleIndex = (currentTitleIndex + 1) % titles.length;
            typingSpeed = 500; // Pause before typing next title
        }
        
        setTimeout(type, typingSpeed);
    }
    
    type();
}

function setupDownloadButton() {
    const downloadButton = document.getElementById('download-resume');
    downloadButton.addEventListener('click', function() {
        window.open('Ashwin_Adhav_Resume.pdf', '_blank');
    });
}

window.addEventListener('DOMContentLoaded', loadResume);
