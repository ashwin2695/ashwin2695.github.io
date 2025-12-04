// Skills Component
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
                    <div class="skills-grid">
                        ${skillsList.map(skill => `
                            <div class="skill-item">
                                <div class="skill-name">${skill.name}</div>
                                <div class="skill-bar">
                                    <div class="skill-progress" style="width: ${skill.level}%"></div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `).join('')}
        </div>
    `;
    
    container.innerHTML = html;
    
    // Animate skill bars
    setTimeout(() => {
        const skillBars = container.querySelectorAll('.skill-progress');
        skillBars.forEach((bar, index) => {
            setTimeout(() => {
                bar.style.width = bar.style.width; // Trigger animation
            }, index * 50);
        });
    }, 100);
}
