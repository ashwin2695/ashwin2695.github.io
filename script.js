async function loadResume() {
    const response = await fetch('data.json');
    const data = await response.json();

    document.getElementById('name').innerText = data.name;
    document.getElementById('contact').innerText = data.contact;
    document.getElementById('summary').innerText = data.summary;

    const expSection = document.getElementById('experience-content');
    data.experience.forEach(job => {
        expSection.innerHTML += `<h3>${job.title} at ${job.company}</h3><p><strong>${job.duration}</strong></p><p>${job.details}</p><br>`;
    });

    const eduSection = document.getElementById('education-content');
    data.education.forEach(edu => {
        eduSection.innerHTML += `<p><strong>${edu.degree}</strong><br>${edu.institution} (${edu.duration})</p><br>`;
    });

    const certSection = document.getElementById('certifications-content');
    data.certifications.forEach(cert => {
        certSection.innerHTML += `<li>${cert}</li>`;
    });

    const extraSection = document.getElementById('extras-content');
    data.extras.forEach(extra => {
        extraSection.innerHTML += `<li>${extra}</li>`;
    });
}

window.onload = loadResume;
