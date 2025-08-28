// ============================================================================
// PROJECTS DATA MANAGEMENT SYSTEM 
// ============================================================================
// This file contains all project data in a centralized, easily manageable format.
// To add a new project: Add an object to the PROJECTS_DATA array
// To remove a project: Remove the object from the PROJECTS_DATA array
// To modify a project: Edit the corresponding object properties

const PROJECTS_DATA = [
    {
        id: 'distributed-payment',
        featured: true,
        category: 'backend',
        title: 'Distributed Payment System',
        shortDescription: 'Built a distributed backend architecture supporting scalable payments and real-time transaction processing with high availability.',
        description: 'A comprehensive distributed backend architecture built to handle scalable payment processing with real-time transaction capabilities and high availability guarantees.',
        challenges: [
            'Ensuring data consistency across distributed services',
            'Implementing fault tolerance and recovery mechanisms',
            'Optimizing for high throughput and low latency',
            'Building secure payment processing workflows'
        ],
        solutions: [
            'Implemented eventual consistency with SAGA pattern',
            'Used circuit breakers and retry mechanisms',
            'Optimized database queries and implemented caching',
            'Added comprehensive security layers and encryption'
        ],
        technologies: ['Node.js', 'Docker', 'Kubernetes', 'Redis', 'PostgreSQL', 'RabbitMQ'],
        features: [
            'Handles 50M+ requests per month',
            '99.9% uptime with load balancing',
            'Real-time transaction processing',
            'Microservices architecture',
            'Automated scaling and deployment'
        ],
        links: [
            { text: 'View Repository', url: '#', icon: 'fab fa-github' },
            { text: 'Live Demo', url: '#', icon: 'fas fa-external-link-alt' }
        ]
    },
    {
        id: 'healthcare-api',
        featured: true,
        category: 'backend',
        title: 'Healthcare Management API',
        shortDescription: 'RESTful APIs powering 10+ microservices for secure patient data management, appointment scheduling, and reporting systems.',
        description: 'RESTful API ecosystem powering multiple microservices for secure patient data management, appointment scheduling, and comprehensive reporting systems.',
        challenges: [
            'HIPAA compliance and data security',
            'Real-time appointment synchronization',
            'Scalable reporting and analytics',
            'Multi-tenant architecture design'
        ],
        solutions: [
            'Implemented end-to-end encryption and audit trails',
            'Built real-time WebSocket connections for updates',
            'Created efficient data aggregation pipelines',
            'Designed isolated tenant data architecture'
        ],
        technologies: ['Python', 'FastAPI', 'PostgreSQL', 'JWT', 'Docker', 'Redis'],
        features: [
            'HIPAA compliant data handling',
            'Real-time appointment system',
            'Advanced reporting dashboard',
            'Multi-tenant architecture',
            'Automated backup and recovery'
        ],
        links: [
            { text: 'View Repository', url: '#', icon: 'fab fa-github' },
            { text: 'Documentation', url: '#', icon: 'fas fa-book' }
        ]
    },
    {
        id: 'realtime-chat',
        featured: true,
        category: 'fullstack',
        title: 'Real-time Chat Application',
        shortDescription: 'WebSocket-based messaging platform with real-time communication, file sharing, and scalable architecture for thousands of concurrent users.',
        icon: '💬',
        headerStyle: 'background: linear-gradient(135deg, #7c3aed, #5b21b6)',
        description: 'WebSocket-based messaging platform with real-time communication, file sharing capabilities, and scalable architecture supporting thousands of concurrent users.',
        challenges: [
            'Scaling WebSocket connections',
            'Message persistence and delivery guarantees',
            'File upload and sharing security',
            'Real-time presence and typing indicators'
        ],
        solutions: [
            'Implemented horizontal scaling with Redis pub/sub',
            'Built message queuing with acknowledgments',
            'Added secure file upload with virus scanning',
            'Created efficient presence tracking system'
        ],
        technologies: ['Node.js', 'Socket.io', 'MongoDB', 'Redis', 'React', 'AWS S3'],
        features: [
            'Real-time messaging with WebSockets',
            'File sharing with drag-and-drop',
            'Group chat and private messaging',
            'Supports 10K+ concurrent users',
            'Message encryption and security'
        ],
        links: [
            { text: 'View Repository', url: '#', icon: 'fab fa-github' },
            { text: 'Live Demo', url: '#', icon: 'fas fa-external-link-alt' }
        ]
    },
    {
        id: 'ml-recommendation',
        featured: false,
        category: 'ml',
        title: 'E-commerce Recommendation Engine',
        shortDescription: 'Machine learning powered recommendation system for e-commerce platforms with real-time personalization and fast API deployment capabilities.',
        icon: '🤖',
        headerStyle: 'background: linear-gradient(135deg, #dc2626, #b91c1c)',
        description: 'Machine learning powered recommendation system for e-commerce platforms with real-time personalization and fast API deployment capabilities.',
        challenges: [
            'Real-time recommendation generation',
            'Handling cold start problems',
            'A/B testing framework implementation',
            'Model deployment and versioning'
        ],
        solutions: [
            'Built hybrid recommendation algorithms',
            'Implemented content-based fallbacks',
            'Created comprehensive A/B testing platform',
            'Automated ML model deployment pipeline'
        ],
        technologies: ['Python', 'TensorFlow', 'Flask', 'Docker', 'MongoDB', 'Apache Kafka'],
        features: [
            'Machine learning powered suggestions',
            'Real-time personalization engine',
            'Comprehensive A/B testing framework',
            '95% recommendation accuracy',
            'Scalable ML model serving'
        ],
        links: [
            { text: 'View Repository', url: '#', icon: 'fab fa-github' },
            { text: 'Research Paper', url: '#', icon: 'fas fa-file-alt' }
        ]
    },
    {
        id: 'task-management',
        featured: false,
        category: 'fullstack',
        title: 'Task Management System',
        shortDescription: 'Collaborative task management platform with real-time updates, team collaboration features, and project tracking capabilities.',
        icon: '📋',
        headerStyle: 'background: linear-gradient(135deg, #ea580c, #c2410c)',
        description: 'Collaborative task management platform with real-time updates, team collaboration features, and project tracking capabilities.',
        challenges: [
            'Real-time collaboration synchronization',
            'Complex permissions and role management',
            'Scalable notification system',
            'Cross-platform compatibility'
        ],
        solutions: [
            'Implemented WebSocket-based real-time updates',
            'Built flexible RBAC system',
            'Created efficient notification queue',
            'Developed responsive web application'
        ],
        technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'JWT'],
        features: [
            'Real-time collaborative editing',
            'Advanced project tracking',
            'Team collaboration tools',
            'Mobile responsive design',
            'Automated progress reports'
        ],
        links: [
            { text: 'View Repository', url: '#', icon: 'fab fa-github' },
            { text: 'Live Demo', url: '#', icon: 'fas fa-external-link-alt' }
        ]
    },
    {
        id: 'api-gateway',
        featured: false,
        category: 'backend',
        title: 'Microservices API Gateway',
        shortDescription: 'Centralized API gateway with advanced rate limiting, authentication, load balancing, and service discovery capabilities.',
        icon: '🚪',
        headerStyle: 'background: linear-gradient(135deg, #0891b2, #0e7490)',
        description: 'Centralized API gateway with advanced rate limiting, authentication, load balancing, and service discovery capabilities.',
        challenges: [
            'High throughput request handling',
            'Service discovery and health checks',
            'Advanced rate limiting strategies',
            'Security and authentication layers'
        ],
        solutions: [
            'Built high-performance Go-based gateway',
            'Implemented automatic service discovery',
            'Created flexible rate limiting algorithms',
            'Added comprehensive security middleware'
        ],
        technologies: ['Go', 'Redis', 'Consul', 'Docker', 'Prometheus'],
        features: [
            'High-throughput request processing',
            'Dynamic service discovery',
            'Advanced rate limiting',
            'Security middleware stack',
            'Comprehensive monitoring'
        ],
        links: [
            { text: 'View Repository', url: '#', icon: 'fab fa-github' },
            { text: 'Documentation', url: '#', icon: 'fas fa-book' }
        ]
    },
    {
        id: 'inventory-system',
        featured: false,
        category: 'backend',
        title: 'Inventory Management API',
        shortDescription: 'Comprehensive REST API for warehouse inventory management with real-time stock tracking, automated alerts, and analytics.',
        icon: '📦',
        headerStyle: 'background: linear-gradient(135deg, #9333ea, #7c3aed)',
        description: 'Comprehensive REST API for warehouse inventory management with real-time stock tracking, automated alerts, and analytics.',
        challenges: [
            'Real-time inventory synchronization',
            'Complex inventory calculations',
            'Automated alerting system',
            'Integration with multiple systems'
        ],
        solutions: [
            'Built event-driven architecture',
            'Implemented efficient calculation algorithms',
            'Created intelligent alerting system',
            'Developed flexible integration APIs'
        ],
        technologies: ['Python', 'Django', 'PostgreSQL', 'Celery', 'Redis'],
        features: [
            'Real-time stock tracking',
            'Automated reorder alerts',
            'Advanced inventory analytics',
            'Multi-warehouse support',
            'Third-party integrations'
        ],
        links: [
            { text: 'View Repository', url: '#', icon: 'fab fa-github' },
            { text: 'API Documentation', url: '#', icon: 'fas fa-code' }
        ]
    },
    {
        id: 'blockchain-voting',
        featured: false,
        category: 'blockchain',
        title: 'Blockchain Voting System',
        shortDescription: 'Decentralized voting platform using smart contracts with transparent ballot counting and immutable vote records.',
        icon: '🗳️',
        headerStyle: 'background: linear-gradient(135deg, #e11d48, #be185d)',
        description: 'Decentralized voting platform using smart contracts with transparent ballot counting and immutable vote records.',
        challenges: [
            'Smart contract security',
            'Scalable blockchain deployment',
            'User experience optimization',
            'Vote privacy and transparency balance'
        ],
        solutions: [
            'Implemented audited smart contracts',
            'Used layer 2 scaling solutions',
            'Built intuitive web interface',
            'Created zero-knowledge proof system'
        ],
        technologies: ['Solidity', 'Web3.js', 'React', 'MetaMask', 'IPFS'],
        features: [
            'Decentralized vote storage',
            'Transparent ballot counting',
            'Immutable vote records',
            'Zero-knowledge privacy',
            'Smart contract automation'
        ],
        links: [
            { text: 'View Repository', url: '#', icon: 'fab fa-github' },
            { text: 'Smart Contract', url: '#', icon: 'fas fa-code' }
        ]
    }
];

// ============================================================================
// PROJECT CATEGORIES CONFIGURATION
// ============================================================================
const PROJECT_CATEGORIES = [
    { id: 'all', name: 'All Projects', icon: 'fas fa-th' },
    { id: 'backend', name: 'Backend', icon: 'fas fa-server' },
    { id: 'fullstack', name: 'Full Stack', icon: 'fas fa-layer-group' },
    { id: 'ml', name: 'Machine Learning', icon: 'fas fa-brain' },
    { id: 'blockchain', name: 'Blockchain', icon: 'fab fa-bitcoin' }
];

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Get all projects
 * @returns {Array} All projects
 */
function getAllProjects() {
    return PROJECTS_DATA;
}

/**
 * Get featured projects only
 * @returns {Array} Featured projects
 */
function getFeaturedProjects() {
    return PROJECTS_DATA.filter(project => project.featured);
}

/**
 * Get projects by category
 * @param {string} category - Category ID
 * @returns {Array} Filtered projects
 */
function getProjectsByCategory(category) {
    if (category === 'all') return PROJECTS_DATA;
    return PROJECTS_DATA.filter(project => project.category === category);
}

/**
 * Get project by ID
 * @param {string} id - Project ID
 * @returns {Object|null} Project object or null if not found
 */
function getProjectById(id) {
    return PROJECTS_DATA.find(project => project.id === id) || null;
}

/**
 * Get all available categories
 * @returns {Array} Project categories
 */
function getProjectCategories() {
    return PROJECT_CATEGORIES;
}