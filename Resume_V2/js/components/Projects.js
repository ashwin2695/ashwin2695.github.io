// Projects Component
export function renderProjects(projects) {
    const container = document.getElementById('projectsContent');
    
    const html = `
        <div class="projects-grid">
            ${projects.map(project => `
                <div class="project-card">
                    <div class="project-header">
                        <div class="project-icon">
                            <i class="fas ${project.icon || 'fa-project-diagram'}"></i>
                        </div>
                        ${project.link ? `
                            <div class="project-links">
                                <a href="${project.link}" target="_blank" class="project-link">
                                    <i class="fas fa-external-link-alt"></i>
                                </a>
                            </div>
                        ` : ''}
                    </div>
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                    ${project.achievements && project.achievements.length > 0 ? `
                        <ul class="project-achievements">
                            ${project.achievements.map(achievement => `
                                <li>${achievement}</li>
                            `).join('')}
                        </ul>
                    ` : ''}
                    ${project.details ? `
                        <p class="project-description" style="font-size: 0.9rem; color: var(--text-muted);">
                            ${project.details}
                        </p>
                    ` : ''}
                    ${project.technologies && project.technologies.length > 0 ? `
                        <div class="project-tags">
                            ${project.technologies.map(tech => `
                                <span class="project-tag">${tech}</span>
                            `).join('')}
                        </div>
                    ` : ''}
                </div>
            `).join('')}
        </div>
    `;
    
    container.innerHTML = html;
}
