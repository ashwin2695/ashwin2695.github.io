// Main Application Entry Point
import { StateManager } from './utils/stateManager.js';
import { DataLoader } from './utils/dataLoader.js';
import { renderSidebar } from './components/Sidebar.js';
import { renderExperience } from './components/Experience.js';
import { renderProjects } from './components/Projects.js';
import { renderSkills } from './components/Skills.js';
import { renderCertifications } from './components/Certifications.js';
import { renderEducation } from './components/Education.js';

class ResumeApp {
    constructor() {
        this.state = new StateManager();
        this.dataLoader = new DataLoader();
        this.currentRole = 'salesforce'; // default role
        this.currentTheme = 'light';
    }

    async init() {
        try {
            // Load shared data
            console.log('Loading shared data...');
            const sharedData = await this.dataLoader.loadSharedData();
            this.state.setSharedData(sharedData);
            console.log('Shared data loaded:', sharedData);
            
            // Load default role data
            console.log('Loading role data for:', this.currentRole);
            await this.loadRoleData(this.currentRole);
            
            // Setup event listeners
            this.setupEventListeners();
            
            // Initial render
            console.log('Rendering...');
            this.render();
            
            console.log('Resume app initialized successfully');
        } catch (error) {
            console.error('Failed to initialize app:', error);
            document.body.innerHTML = `
                <div style="padding: 2rem; text-align: center;">
                    <h1>Error Loading Resume</h1>
                    <p>${error.message}</p>
                    <p>Please check the console for more details.</p>
                </div>
            `;
        }
    }

    async loadRoleData(role) {
        try {
            console.log(`Fetching ${role}.json...`);
            const data = await this.dataLoader.loadRoleData(role);
            console.log(`${role} data loaded:`, data);
            this.state.setRoleData(role, data);
            this.currentRole = role;
        } catch (error) {
            console.error(`Failed to load ${role} data:`, error);
            throw error;
        }
    }

    setupEventListeners() {
        // Role toggle buttons
        const roleButtons = document.querySelectorAll('.role-btn');
        roleButtons.forEach(btn => {
            btn.addEventListener('click', async (e) => {
                const role = e.currentTarget.dataset.role;
                if (role !== this.currentRole) {
                    await this.switchRole(role);
                }
            });
        });

        // Theme toggle
        const themeToggle = document.querySelector('.theme-toggle');
        themeToggle.addEventListener('click', () => {
            this.toggleTheme();
        });

        // Download resume button
        const downloadBtn = document.getElementById('downloadResume');
        downloadBtn.addEventListener('click', () => {
            this.downloadResume();
        });
    }

    async switchRole(newRole) {
        // Update active button
        document.querySelectorAll('.role-btn').forEach(btn => {
            btn.classList.remove('active');
            btn.setAttribute('aria-pressed', 'false');
        });
        document.querySelector(`[data-role="${newRole}"]`).classList.add('active');
        document.querySelector(`[data-role="${newRole}"]`).setAttribute('aria-pressed', 'true');

        // Update data-role attribute for CSS
        document.body.setAttribute('data-role', newRole);

        // Load new role data if not already loaded
        if (!this.state.hasRoleData(newRole)) {
            await this.loadRoleData(newRole);
        } else {
            this.currentRole = newRole;
        }

        // Re-render content with animation
        this.renderWithAnimation();
    }

    toggleTheme() {
        this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        document.body.setAttribute('data-theme', this.currentTheme);
        
        // Save preference
        localStorage.setItem('theme', this.currentTheme);
    }

    render() {
        const roleData = this.state.getRoleData(this.currentRole);
        const sharedData = this.state.getSharedData();

        if (!roleData || !sharedData) {
            console.error('Missing data for rendering');
            return;
        }

        // Update summary
        document.getElementById('summary').textContent = roleData.summary;

        // Update role badge
        document.getElementById('roleBadge').textContent = roleData.badge;

        // Render sidebar content
        renderSidebar(roleData, sharedData);

        // Render main sections
        renderExperience(roleData.experience);
        renderSkills(roleData.skills);
        renderCertifications(roleData.certifications);
        renderEducation(sharedData.education);
        
        // Handle projects section - only show standalone projects for non-Salesforce roles
        const standaloneProjectsSection = document.getElementById('standaloneProjectsSection');
        if (this.currentRole === 'salesforce') {
            // For Salesforce, projects are nested in experience, so hide standalone section
            standaloneProjectsSection.style.display = 'none';
        } else {
            // For other roles, show standalone projects
            standaloneProjectsSection.style.display = 'block';
            if (roleData.projects) {
                renderProjects(roleData.projects);
            }
        }

        // Update section titles
        document.getElementById('experienceTitle').textContent = 
            this.currentRole === 'salesforce' ? 'Salesforce Experience' : 'Professional Experience';
        document.getElementById('projectsTitle').textContent = 
            this.currentRole === 'salesforce' ? 'Key Salesforce Projects' : 'Featured Projects';
    }

    renderWithAnimation() {
        // Add fade out effect
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(20px)';
        });

        // Wait for animation, then render
        setTimeout(() => {
            this.render();
            
            // Fade in
            setTimeout(() => {
                sections.forEach((section, index) => {
                    setTimeout(() => {
                        section.style.transition = 'all 0.5s ease-out';
                        section.style.opacity = '1';
                        section.style.transform = 'translateY(0)';
                    }, index * 100);
                });
            }, 50);
        }, 300);
    }

    downloadResume() {
        const sharedData = this.state.getSharedData();
        const pdfPath = sharedData.resumePDF[this.currentRole];
        
        if (pdfPath) {
            const link = document.createElement('a');
            link.href = pdfPath;
            link.download = `Ashwin_Adhav_${this.currentRole}_Resume.pdf`;
            link.click();
        } else {
            // Fallback: use old resume
            const link = document.createElement('a');
            link.href = '../Resume_V1/Ashwin_Adhav_Resume.pdf';
            link.download = 'Ashwin_Adhav_Resume.pdf';
            link.click();
        }
    }

    loadSavedPreferences() {
        // Load theme preference
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            this.currentTheme = savedTheme;
            document.body.setAttribute('data-theme', savedTheme);
        }

        // Load role preference
        const savedRole = localStorage.getItem('lastRole');
        if (savedRole && ['salesforce', 'datascience', 'fullstack'].includes(savedRole)) {
            this.currentRole = savedRole;
        }
    }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const app = new ResumeApp();
    app.loadSavedPreferences();
    app.init();
});
