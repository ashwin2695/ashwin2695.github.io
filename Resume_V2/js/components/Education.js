// Education Component - 2 column grid layout
export function renderEducation(education) {
    const container = document.getElementById('educationContent');
    
    const html = `
        <div class="education-grid">
            ${education.map(edu => `
                <div class="education-card">
                    <div class="education-header">
                        <h3 class="education-degree">${edu.degree}</h3>
                        <div class="education-institution">${edu.institution}</div>
                        <div class="education-meta">
                            <span class="education-location"><i class="fas fa-map-marker-alt"></i> ${edu.location}</span>
                            <span class="education-duration"><i class="far fa-calendar"></i> ${edu.duration}</span>
                        </div>
                        ${edu.gpa ? `<div class="education-gpa"><i class="fas fa-award"></i> ${edu.gpa}</div>` : ''}
                    </div>
                </div>
            `).join('')}
        </div>
    `;
    
    container.innerHTML = html;
}
