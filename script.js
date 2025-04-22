async function loadResume() {
    const response = await fetch('data.json');
    const data = await response.json();
    
    // Main content
    document.getElementById('name').innerText = data.name;
    document.getElementById('summary').innerText = data.summary;
    
    // Sidebar content
    document.getElementById('sidebar-name').innerText = data.name;
    document.getElementById('sidebar-title').innerText = data.titles[0];
    
    // Parse contact information
    const contactParts = data.contact.split('|');
    document.getElementById('location').innerText = contactParts[0].trim();
    document.getElementById('phone').innerText = contactParts[1].trim();
    document.getElementById('email').innerText = contactParts[2].trim();
    
    // Experience section with timeline
    const expSection = document.getElementById('experience-content');
    data.experience.forEach(job => {
        expSection.appendChild(createExperienceElement(job));
    });
    
    // Education section with timeline
    const eduSection = document.getElementById('education-content');
    data.education.forEach(edu => {
        eduSection.appendChild(createEducationElement(edu));
    });
    
    // Sidebar skills with vertical progress bars
    const sidebarSkillsSection = document.getElementById('sidebar-skills-content');
    data.skills.forEach(skill => {
        sidebarSkillsSection.appendChild(createSidebarSkillElement(skill));
    });
    
    // Sidebar certifications
    const sidebarCertSection = document.getElementById('sidebar-certifications-content');
    data.certifications.forEach(cert => {
        sidebarCertSection.appendChild(createSidebarCertificationElement(cert));
    });
    
    // Extra curriculars
    const extrasSection = document.getElementById('extras-content');
    data.extras.forEach(extra => {
        const li = document.createElement('li');
        li.textContent = extra;
        li.setAttribute("data-aos", "fade-right");
        li.setAttribute("data-aos-delay", "50");
        
        if (!extrasSection.querySelector('ul')) {
            const ul = document.createElement('ul');
            extrasSection.appendChild(ul);
        }
        
        extrasSection.querySelector('ul').appendChild(li);
    });
    
    setupTypingEffect(data.titles);
    setupDownloadButton();
    animateProgressBars();
    observeElements();
}

function createExperienceElement(job) {
    const element = document.createElement("div");
    element.setAttribute("data-aos", "fade-up");
    element.setAttribute("data-aos-delay", "100");
    element.className = "experience-item";
    
    const title = document.createElement("h3");
    title.innerHTML = `${job.title} at <span style="color: #4f46e5;">${job.company}</span>`;
    
    const duration = document.createElement("p");
    duration.innerHTML = `<strong>${job.duration}</strong>`;
    
    const details = document.createElement("p");
    details.textContent = job.details;
    
    element.appendChild(title);
    element.appendChild(duration);
    element.appendChild(details);
    
    return element;
}

function createEducationElement(edu) {
    const element = document.createElement("div");
    element.setAttribute("data-aos", "fade-up");
    element.setAttribute("data-aos-delay", "200");
    element.className = "education-item";
    
    const degree = document.createElement("h3");
    degree.innerHTML = `<strong>${edu.degree}</strong>`;
    
    const institution = document.createElement("p");
    institution.textContent = `${edu.institution} (${edu.duration})`;
    
    element.appendChild(degree);
    element.appendChild(institution);
    
    return element;
}

function createSidebarSkillElement(skill) {
    const element = document.createElement("div");
    element.className = "skill-item-sidebar";
    
    const progressBar = document.createElement("div");
    progressBar.className = "vertical-progress-bar";
    
    const progressFill = document.createElement("div");
    progressFill.className = "vertical-progress-fill";
    progressFill.style.height = "0%"; // Will be animated later
    progressFill.setAttribute("data-height", `${skill.level}%`);
    
    progressBar.appendChild(progressFill);
    
    const skillInfo = document.createElement("div");
    skillInfo.className = "skill-info";
    
    const skillName = document.createElement("span");
    skillName.className = "skill-name";
    skillName.textContent = skill.name;
    
    const skillPercentage = document.createElement("span");
    skillPercentage.className = "skill-percentage";
    skillPercentage.textContent = `${skill.level}%`;
    
    skillInfo.appendChild(skillName);
    skillInfo.appendChild(skillPercentage);
    
    element.appendChild(progressBar);
    element.appendChild(skillInfo);
    
    return element;
}

function createSidebarCertificationElement(cert) {
    const element = document.createElement("div");
    element.className = "certification-item-sidebar";
    
    const icon = document.createElement("div");
    icon.className = "certification-icon";
    icon.innerHTML = '<i class="fas fa-certificate"></i>';
    
    const text = document.createElement("span");
    text.textContent = cert;
    
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

function animateProgressBars() {
    setTimeout(() => {
        const progressFills = document.querySelectorAll('.vertical-progress-fill');
        progressFills.forEach(fill => {
            const targetHeight = fill.getAttribute('data-height');
            fill.style.height = targetHeight;
        });
    }, 500);
}

function setupDownloadButton() {
    const downloadButton = document.getElementById('download-resume');
    downloadButton.addEventListener('click', function() {
        window.open('Ashwin_Adhav_Resume.pdf', '_blank');
    });
}

function observeElements() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.hidden').forEach(element => {
        observer.observe(element);
    });
}

window.addEventListener('DOMContentLoaded', loadResume);
