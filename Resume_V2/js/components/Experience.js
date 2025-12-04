// Experience Component
export function renderExperience(experiences) {
    const container = document.getElementById('experienceContent');
    
    const html = experiences.map(exp => `
        <div class="experience-item">
            <div class="experience-header">
                <h3 class="experience-title">${exp.title}</h3>
                <p class="experience-company">${exp.company}</p>
                <p class="experience-duration">
                    <i class="fas fa-calendar-alt"></i>
                    ${exp.duration}
                    ${exp.location ? `<span style="margin-left: 1rem;"><i class="fas fa-map-marker-alt"></i> ${exp.location}</span>` : ''}
                </p>
            </div>
            <p class="experience-description">${exp.description}</p>
            
            ${exp.responsibilities && exp.responsibilities.length > 0 ? `
                <div style="margin-top: 1rem;">
                    <h4 style="color: var(--primary-color); font-size: 1rem; margin-bottom: 0.5rem;">Key Responsibilities:</h4>
                    <ul class="experience-highlights">
                        ${exp.responsibilities.map(resp => `<li>${resp}</li>`).join('')}
                    </ul>
                </div>
            ` : ''}
            
            ${exp.highlights && exp.highlights.length > 0 ? `
                <ul class="experience-highlights">
                    ${exp.highlights.map(highlight => `<li>${highlight}</li>`).join('')}
                </ul>
            ` : ''}
            
            ${exp.technologies && exp.technologies.length > 0 ? `
                <div class="project-tags" style="margin-top: 1rem;">
                    ${exp.technologies.map(tech => `
                        <span class="project-tag">${tech}</span>
                    `).join('')}
                </div>
            ` : ''}
            
            ${exp.projects && exp.projects.length > 0 ? `
                <div class="nested-projects">
                    <h4 style="color: var(--primary-color); font-size: 1.1rem; margin: 1.5rem 0 1rem 0; display: flex; align-items: center; gap: 0.5rem;">
                        <i class="fas fa-project-diagram"></i>
                        Key Projects at ${exp.company}
                    </h4>
                    <div class="projects-list">
                        ${exp.projects.map(project => `
                            <div class="nested-project-card">
                                <div class="project-header-inline">
                                    <h5 class="nested-project-title">
                                        <i class="fas fa-arrow-right" style="color: var(--primary-color); font-size: 0.9rem;"></i>
                                        ${project.title}
                                    </h5>
                                </div>
                                <p class="project-description">${project.description}</p>
                                ${project.achievements && project.achievements.length > 0 ? `
                                    <ul class="project-achievements">
                                        ${project.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
                                    </ul>
                                ` : ''}
                                ${project.technologies && project.technologies.length > 0 ? `
                                    <div class="project-tags" style="margin-top: 0.75rem;">
                                        ${project.technologies.map(tech => `
                                            <span class="project-tag">${tech}</span>
                                        `).join('')}
                                    </div>
                                ` : ''}
                            </div>
                        `).join('')}
                    </div>
                </div>
            ` : ''}
        </div>
    `).join('');
    
    container.innerHTML = html;
}
