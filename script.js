async function loadResume() {
    const response = await fetch('data.json');
    const data = await response.json();
    
    document.getElementById('name').innerText = data.name;
    document.getElementById('contact').innerText = data.contact;
    document.getElementById('summary').innerText = data.summary;
    
    const expSection = document.getElementById('experience-content');
    data.experience.forEach(job => {
        expSection.appendChild(createExperienceElement(job));
    });
    
    const eduSection = document.getElementById('education-content');
    data.education.forEach(edu => {
        eduSection.appendChild(createEducationElement(edu));
    });
    
    const certSection = document.getElementById('certifications-content');
    data.certifications.forEach(cert => {
        certSection.appendChild(createCertificationElement(cert));
    });
    
    const skillsSection = document.getElementById('skills-content');
    data.skills.forEach(skill => {
        skillsSection.appendChild(createSkillElement(skill));
    });
    
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

function createCertificationElement(cert) {
    const element = document.createElement("div");
    element.setAttribute("data-aos", "zoom-in");
    element.setAttribute("data-aos-delay", "150");
    element.className = "certification-item";
    
    const certText = document.createElement("p");
    certText.innerHTML = `<span style="color: #4f46e5;">✓</span> ${cert}`;
    
    element.appendChild(certText);
    
    return element;
}

function createSkillElement(skill) {
    const element = document.createElement("div");
    element.setAttribute("data-aos", "fade-right");
    element.setAttribute("data-aos-delay", "50");
    element.className = "skill-item";
    
    const skillName = document.createElement("p");
    skillName.textContent = skill.name;
    
    const progressContainer = document.createElement("div");
    progressContainer.className = "skill-progress-container";
    progressContainer.style.width = "100%";
    progressContainer.style.backgroundColor = "#e5e7eb";
    progressContainer.style.borderRadius = "10px";
    progressContainer.style.marginBottom = "15px";
    
    const progressBar = document.createElement("div");
    progressBar.className = "skill-progress-bar";
    progressBar.style.width = `${skill.level}%`;
    progressBar.style.backgroundColor = "#6366f1";
    progressBar.style.height = "10px";
    progressBar.style.borderRadius = "10px";
    progressBar.style.transition = "width 1.5s ease-in-out";
    
    progressContainer.appendChild(progressBar);
    element.appendChild(skillName);
    element.appendChild(progressContainer);
    
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
