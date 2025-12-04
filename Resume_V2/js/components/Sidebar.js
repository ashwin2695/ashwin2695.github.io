// Sidebar Component
export function renderSidebar(roleData, sharedData) {
    const sidebarContent = document.getElementById('sidebarContent');
    
    // Build sidebar sections based on role
    let html = '';

    // Skills/Tools section
    if (roleData.tools && roleData.tools.length > 0) {
        html += `
            <div class="sidebar-section">
                <h3><i class="fas fa-tools"></i> Tools & Technologies</h3>
                <div class="skills-pills">
                    ${roleData.tools.map(tool => `
                        <div class="skill-tag">${tool}</div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    // Core Competencies
    if (roleData.coreCompetencies && roleData.coreCompetencies.length > 0) {
        html += `
            <div class="sidebar-section">
                <h3><i class="fas fa-star"></i> Core Competencies</h3>
                <div class="badge-list">
                    ${roleData.coreCompetencies.map(comp => `
                        <div class="badge-item">
                            <i class="fas fa-check-circle"></i>
                            <span>${comp}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    // Superbadges (for Salesforce role)
    if (roleData.superbadges && roleData.superbadges.length > 0) {
        html += `
            <div class="sidebar-section">
                <h3><i class="fas fa-award"></i> Superbadges</h3>
                <div class="badge-list">
                    ${roleData.superbadges.map(badge => `
                        <div class="badge-item">
                            <i class="fas fa-medal"></i>
                            <span>${badge}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    sidebarContent.innerHTML = html;
}
