// Education Component
export function renderEducation(education) {
    const container = document.getElementById('educationContent');
    
    const html = education.map(edu => `
        <div class="experience-item">
            <div class="experience-header">
                <h3 class="experience-title">${edu.degree}</h3>
                <p class="experience-company">${edu.institution}</p>
                <p class="experience-duration">
                    <i class="fas fa-calendar-alt"></i>
                    ${edu.duration}
                    ${edu.location ? `<span style="margin-left: 1rem;"><i class="fas fa-map-marker-alt"></i> ${edu.location}</span>` : ''}
                </p>
                ${edu.gpa ? `
                    <p style="color: var(--primary-color); font-weight: 500; margin-top: 0.5rem;">
                        <i class="fas fa-award"></i> ${edu.gpa}
                    </p>
                ` : ''}
            </div>
            ${edu.highlights && edu.highlights.length > 0 ? `
                <ul class="experience-highlights">
                    ${edu.highlights.map(highlight => `<li>${highlight}</li>`).join('')}
                </ul>
            ` : ''}
        </div>
    `).join('');
    
    container.innerHTML = html;
}
