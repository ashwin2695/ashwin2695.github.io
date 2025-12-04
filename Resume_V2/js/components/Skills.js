// Skills Component - Compact pill layout
export function renderSkills(skills) {
    const container = document.getElementById('skillsContent');
    
    const html = `
        <div class="skills-categories">
            ${Object.entries(skills).map(([category, skillsList]) => `
                <div class="skill-category">
                    <h3 class="skill-category-title">
                        <i class="fas fa-code"></i>
                        ${category}
                    </h3>
                    <div class="skills-pills">
                        ${skillsList.map(skill => `
                            <div class="skill-pill">
                                <span class="skill-name">${skill.name}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `).join('')}
        </div>
    `;
    
    container.innerHTML = html;
}
