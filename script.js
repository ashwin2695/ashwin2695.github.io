async function loadResume() {
  const response = await fetch('data.json');
  const data = await response.json();

  document.getElementById('name').innerText = data.name;
  document.getElementById('contact').innerText = data.contact;
  document.getElementById('summary').innerText = data.summary;

  const expSection = document.getElementById('experience-content');
  data.experience.forEach(job => {
    expSection.innerHTML += `
      <h3>${job.title} at ${job.company}</h3>
      <p><strong>${job.duration}</strong></p>
      <p>${job.details}</p><br>
    `;
  });

  const eduSection = document.getElementById('education-content');
  data.education.forEach(edu => {
    eduSection.innerHTML += `
      <p><strong>${edu.degree}</strong><br>${edu.institution} (${edu.duration})</p><br>
    `;
  });

  const certSection = document.getElementById('certifications-content');
  data.certifications.forEach(cert => {
    certSection.innerHTML += `<li>${cert}</li>`;
  });

  const extraSection = document.getElementById('extras-content');
  data.extras.forEach(extra => {
    extraSection.innerHTML += `<li>${extra}</li>`;
  });

  // Typing animation using data.json titles
  let i = 0;
  const titleText = data.titles;
  function typeTitle() {
    if (i < titleText.length) {
      document.getElementById('name').innerText = titleText[i];
      i++;
      setTimeout(typeTitle, 2000); // Change text every 2 seconds
    }
  }
  typeTitle();
}

function revealOnScroll() {
  const reveals = document.querySelectorAll('.hidden');
  reveals.forEach((el) => {
    const windowHeight = window.innerHeight;
    const revealTop = el.getBoundingClientRect().top;
    const revealPoint = 150;

    if (revealTop < windowHeight - revealPoint) {
      el.classList.add('show');
    }
  });
}

window.onload = () => {
  loadResume();
  revealOnScroll();
};

window.addEventListener('scroll', revealOnScroll);
