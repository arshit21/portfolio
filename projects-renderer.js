// ============================================================================
// DYNAMIC PROJECT RENDERER - FIXED VERSION
// ============================================================================

class ProjectRenderer {
    constructor() {
        this.featuredContainer = document.getElementById('featured-projects');
        this.allProjectsContainer = document.getElementById('all-projects-grid');
        this.filterContainer = document.querySelector('.filter-buttons');
        this.initialize();
    }

    initialize() {
        this.renderFeaturedProjects();
        this.renderAllProjects();
        this.renderFilterButtons();
        this.initializeProjectCards(); // Fixed: Now uses event delegation
        this.initializeFiltering();
    }

    renderFeaturedProjects() {
        if (!this.featuredContainer) return;

        const featuredProjects = getFeaturedProjects();
        this.featuredContainer.innerHTML = featuredProjects.map(project => 
            this.generateProjectCardHTML(project)
        ).join('');
    }

    renderAllProjects() {
        if (!this.allProjectsContainer) return;

        const allProjects = getAllProjects();
        this.allProjectsContainer.innerHTML = allProjects.map(project => 
            this.generateProjectCardHTML(project)
        ).join('');
    }

    renderFilterButtons() {
        if (!this.filterContainer) return;

        const categories = getProjectCategories();
        this.filterContainer.innerHTML = categories.map((category, index) => `
            <button class="filter-btn ${index === 0 ? 'active' : ''}" data-filter="${category.id}">
                <i class="${category.icon}"></i>
                ${category.name}
            </button>
        `).join('');
    }

    generateProjectCardHTML(project) {
    const featuresHTML = project.technologies.slice(0, 3).map(tech => `
        <span class="feature">${tech}</span>
    `).join('');

    return `
        <div class="project-card fade-in" data-project="${project.id}" data-category="${project.category}">
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.shortDescription}</p>
                <div class="project-features">
                    ${featuresHTML}
                    ${project.technologies.length > 3 ? `<span class="feature">+${project.technologies.length - 3} more</span>` : ''}
                </div>
            </div>
        </div>
    `;
}

    // FIXED: This method now uses event delegation instead of direct attachment
    initializeProjectCards() {
        // Use event delegation on document to catch clicks on dynamically created project cards
        document.addEventListener('click', (e) => {
            const projectCard = e.target.closest('.project-card');
            if (projectCard) {
                e.preventDefault();
                const projectId = projectCard.getAttribute('data-project');
                const project = getProjectById(projectId);
                
                if (project) {
                    this.openProjectModal(project);
                }
            }
        });
    }

    generateModalHTML(project) {
        const challengesHTML = project.challenges.map(challenge => `
            <li>${challenge}</li>
        `).join('');

        const solutionsHTML = project.solutions.map(solution => `
            <li>${solution}</li>
        `).join('');

        const featuresHTML = project.features.map(feature => `
            <li>${feature}</li>
        `).join('');

        const technologiesHTML = project.technologies.map(tech => `
            <span class="tech-tag">${tech}</span>
        `).join('');

        const linksHTML = project.links ? project.links.map(link => `
            <a href="${link.url}" class="btn btn--primary" target="_blank" rel="noopener noreferrer">
                <i class="${link.icon}"></i>
                ${link.text}
            </a>
        `).join('') : '';

        return `
            <div class="modal-overlay"></div>
            <div class="modal-content">
                <button class="modal-close">&times;</button>
                <div class="modal-header">
                    <h2>${project.title}</h2>
                </div>
                <div class="modal-body">
                    <div class="project-section">
                        <div class="project-description">
                            <p>${project.description}</p>
                        </div>
                    </div>

                    <div class="project-section">
                        <h3>Technologies Used</h3>
                        <div class="tech-stack">
                            ${technologiesHTML}
                        </div>
                    </div>

                    <div class="project-section">
                        <h3>Key Features</h3>
                        <ul class="feature-list">
                            ${featuresHTML}
                        </ul>
                    </div>

                    <div class="project-section">
                        <div class="challenges-solutions">
                            <div class="challenges">
                                <h4>Challenges</h4>
                                <ul>
                                    ${challengesHTML}
                                </ul>
                            </div>
                            <div class="solutions">
                                <h4>Solutions</h4>
                                <ul>
                                    ${solutionsHTML}
                                </ul>
                            </div>
                        </div>
                    </div>

                    ${linksHTML ? `
                    <div class="project-section">
                        <div class="project-links">
                            ${linksHTML}
                        </div>
                    </div>
                    ` : ''}
                </div>
            </div>
        `;
    }

    openProjectModal(project) {
        const modal = document.createElement('div');
        modal.className = 'project-modal';
        modal.innerHTML = this.generateModalHTML(project);

        const modalStyles = document.createElement('style');
        modalStyles.textContent = `
            .project-modal {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                z-index: 50000;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 20px;
            }
            .modal-overlay {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(0, 0, 0, 0.8);
                backdrop-filter: blur(5px);
                pointer-events: auto;
            }
            .modal-content {
                background: var(--color-surface);
                border-radius: var(--radius-lg);
                max-width: 800px;
                max-height: 90vh;
                width: 100%;
                position: relative;
                z-index: 1;
                overflow-y: auto;
                border: 1px solid var(--color-card-border);
            }
            .modal-close {
                position: absolute;
                top: 16px;
                right: 16px;
                background: none;
                border: none;
                font-size: 24px;
                color: var(--color-text);
                cursor: none !important;
                width: 32px;
                height: 32px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: background var(--duration-fast) ease;
                z-index: 10;
            }
            .modal-close:hover {
                background: var(--color-secondary);
            }
            .modal-header {
                padding: 32px 32px 0;
                border-bottom: 1px solid var(--color-card-border);
                padding-bottom: 16px;
                margin-bottom: 24px;
            }
            .modal-header h2 {
                color: var(--color-text);
                margin: 0;
            }
            .modal-body {
                padding: 0 32px 32px;
            }
            .project-section {
                margin-bottom: 32px;
            }
            .project-section h3 {
                color: var(--color-primary);
                margin-bottom: 16px;
                font-size: var(--font-size-xl);
            }
            .project-section h4 {
                color: var(--color-text);
                margin-bottom: 12px;
            }
            .project-description p {
                color: var(--color-text-secondary);
                line-height: 1.6;
                font-size: var(--font-size-lg);
            }
            .feature-list, .challenges ul, .solutions ul {
                list-style: none;
                padding: 0;
            }
            .feature-list li, .challenges li, .solutions li {
                padding: 8px 0;
                color: var(--color-text-secondary);
                position: relative;
                padding-left: 24px;
            }
            .feature-list li::before {
                content: '✓';
                position: absolute;
                left: 0;
                color: var(--color-success);
                font-weight: bold;
            }
            .challenges li::before {
                content: '⚠';
                position: absolute;
                left: 0;
                color: var(--color-warning);
            }
            .solutions li::before {
                content: '💡';
                position: absolute;
                left: 0;
            }
            .challenges-solutions {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 24px;
            }
            .project-links {
                display: flex;
                gap: 16px;
                margin-top: 32px;
                padding-top: 24px;
                border-top: 1px solid var(--color-card-border);
            }
            @media (max-width: 768px) {
                .challenges-solutions {
                    grid-template-columns: 1fr;
                }
                .modal-content {
                    width: 95%;
                    margin: 16px;
                }
                .modal-header, .modal-body {
                    padding-left: 20px;
                    padding-right: 20px;
                }
                .project-links {
                    flex-direction: column;
                }
            }
        `;

        document.head.appendChild(modalStyles);
        document.body.appendChild(modal);
        ;

        // Close modal functionality
        const closeModal = () => {
            if (document.body.contains(modal)) {
                document.body.removeChild(modal);
            }
            if (document.head.contains(modalStyles)) {
                document.head.removeChild(modalStyles);
            }
        };

        modal.querySelector('.modal-close').addEventListener('click', closeModal);
        modal.querySelector('.modal-overlay').addEventListener('click', closeModal);
        modal.querySelector('.modal-content').addEventListener('click', (e) => {
            e.stopPropagation();
        });

        const escapeHandler = (e) => {
            if (e.key === 'Escape') {
                closeModal();
                document.removeEventListener('keydown', escapeHandler);
            }
        };
        document.addEventListener('keydown', escapeHandler);
    }

    // FIXED: This method now also uses event delegation
    initializeFiltering() {
        document.addEventListener('click', (e) => {
            const filterBtn = e.target.closest('.filter-btn');
            if (filterBtn) {
                e.preventDefault();
                const filter = filterBtn.getAttribute('data-filter');

                // Update active filter button
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                filterBtn.classList.add('active');

                // Filter projects with smooth animation
                const allProjectCards = document.querySelectorAll('#all-projects-grid .project-card');
                allProjectCards.forEach((card, index) => {
                    const category = card.getAttribute('data-category');
                    if (filter === 'all' || category === filter) {
                        card.style.display = 'block';
                        card.classList.remove('hidden');
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, index * 50);
                    } else {
                        card.style.opacity = '0';
                        card.style.transform = 'translateY(20px)';
                        setTimeout(() => {
                            card.style.display = 'none';
                            card.classList.add('hidden');
                        }, 300);
                    }
                });
            }
        });
    }
}

// Initialize the project renderer when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    new ProjectRenderer();
});