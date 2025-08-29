// ============================================================================
// PROJECTS DATA MANAGEMENT SYSTEM 
// ============================================================================
// This file contains all project data in a centralized, easily manageable format.
// To add a new project: Add an object to the PROJECTS_DATA array
// To remove a project: Remove the object from the PROJECTS_DATA array
// To modify a project: Edit the corresponding object properties

const PROJECTS_DATA = [
    {
        id: 'Breast Cancer Prediction',
        featured: true,
        category: 'dl',
        title: 'Breast Cancer Prediction using AlexNet',
        shortDescription: 'Developed an AI-powered breast cancer detection system using AlexNet deep learning architecture to classify mammography images with 99.57% accuracy.',
        description: 'A comprehensive deep learning solution for breast cancer detection that applies the AlexNet convolutional neural network to analyze full-field digital mammography images. The system classifies mammograms into benign and malignant categories using BI-RADS classification criteria, achieving exceptional diagnostic accuracy through advanced image processing and data augmentation techniques.',
        challenges: [
            'Limited availability of high-quality mammography datasets',
            'Class imbalance between benign and malignant image samples',
            'Optimizing hyperparameters for medical imaging classification',
            'Ensuring model generalization to unseen mammography data'
        ],
        solutions: [
            'Implemented extensive data augmentation with rotation, flipping, and translation',
            'Balanced dataset from 300:100 to 5400:5400 images per class',
            'Systematic hyperparameter tuning with learning rates from 0.1 to 0.0001',
            'Applied rigorous train-test split (70:30) for robust validation'
        ],
        technologies: ['Python', 'PyTorch', 'MATLAB', 'AlexNet', 'OpenCV', 'Digital Image Processing', 'Convolutional Neural Networks'],
        features: [
            'Achieves 99.57% test accuracy and 99.62% training accuracy',
            'Processes full-field digital mammography (FFDM) images',
            'Implements BI-RADS classification system (benign vs malignant)',
            'Advanced data augmentation pipeline with 18x dataset expansion',
            'Real-time mammography image classification capability'
        ],
        links: [
            { text: 'View Report', url: 'https://drive.google.com/file/d/1bm8t4xFsR82j3h43g5qDHVQPrbm1jsyR/view?usp=sharing', icon: 'fas fa-file-pdf' }
        ]
    }
,
    {
        id: 'Mess Menu API',
        featured: true,
        category: 'backend',
        title: 'Automated Mess-Menu API',
        shortDescription: 'Transforms Excel mess menus into JSON in < 10 s, serving 15k+ daily requests for 10k+ students with 99.9% uptime.',
        description: 'A Node.js microservice that ingests Excel-based dining-hall menus, converts them to normalized JSON in under 10 seconds (99.4 % faster than manual work), and exposes REST endpoints consumed by campus apps. Hosted on an Ubuntu droplet (DigitalOcean) behind an Nginx reverse proxy for secure, high-availability delivery.',
        challenges: [
            'Manual Excel-to-database conversion took ~30 minutes per update',
            'Needed to handle 15,000+ daily API hits without downtime',
            'Ensuring reliable data storage and quick look-ups for 10,000+ users',
            'Secure, scalable deployment on a budget VPS'
        ],
        solutions: [
            'Built an end-to-end converter using Node.js and the xlsx library to parse Excel → JSON',
            'Implemented caching and connection pooling; achieved 99.9 % uptime under 15k RPS peak',
            'Used MongoDB for flexible, efficient storage of menu data',
            'Deployed on DigitalOcean Ubuntu server with Nginx reverse proxy and automated SSL'
        ],
        technologies: ['Node.js', 'Express', 'MongoDB', 'Nginx', 'DigitalOcean', 'REST API', 'xlsx'],
        features: [
            'Excel → JSON conversion in <10 s (30 min → 0.17 min)',
            'Handles 15k+ daily requests with 99.9 % uptime',
            'Serves daily mess menus to 10k+ students',
            'Stateless design—easy horizontal scaling',
            'HTTPS secured via Nginx reverse proxy'
        ],
        links: [
            { text: 'View Repository', url: 'https://github.com/arshit21/ssms_menu', icon: 'fab fa-github' }
        ]
    },
    {
        id: 'Urban Health Impact NN',
        featured: true,
        category: 'ml',
        title: 'Hierarchical Multimodal Neural Network for Urban-Health Risk',
        shortDescription: 'Predicts a 1-10 Health-Impact Score for Indian cities by fusing pollution, weather, urban and geo data; MSE 0.4455, R² 0.67.',
        description: 'A TensorFlow/Keras framework that ingests multi-source urban data—air pollutants, weather, city metadata and composite indices—to estimate a city-level Health-Impact Score. Five dedicated subnetworks (N1–N5) encode each modality; two aggregators and cross-layer fusion with residual links combine embeddings, yielding an accurate, interpretable risk metric for policy makers.',
        challenges: [
            'Integrating heterogeneous datasets (pollution monitors, meteorology, census, urban activity) with inconsistent spatial granularity and missing values',
            'Capturing non-linear cross-domain interactions that drive health outcomes',
            'Balancing model complexity with interpretability for public-health stakeholders',
            'Preventing overfitting while achieving strong generalization across 50+ Indian cities'
        ],
        solutions: [
            'Merged five open datasets, standardized city names, encoded categorical regions, normalized numeric features and applied missing-value pruning',
            'Designed five TensorFlow subnetworks for pollutants, weather, geo, urban profile and composite metrics, each producing low-dimensional embeddings',
            'Implemented hierarchical aggregation layers (N11, N12), cross-layer fusion and residual connections to capture high-order feature interactions',
            'Tuned hyper-parameters with early stopping, achieving MSE 0.4455, MAE 0.568 and R² 0.67 on validation data'
        ],
        technologies: ['Python', 'TensorFlow', 'Keras', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
        features: [
            'Predicts Health-Impact Score (1–10) with RMSE 0.668',
            'Explains 67 % of variance in health-impact target (R² 0.67)',
            'Modular subnetworks for pollutants, weather, urban metrics and geography',
            'Cross-layer fusion + residual links capture fine-grained interactions',
            'Scalable pipeline—from data ingestion to model evaluation—in pure TensorFlow/Keras'
        ],
        links: [
            { text: 'Code + Presentation', url: 'https://drive.google.com/drive/folders/1pFjx-OEwMKRIuJaUPX7S6Scm2wciK0bc?usp=sharing', icon: 'fas fa-file-powerpoint' }
        ]
    },
        {
        id: 'Amazon-Clone-API-Go',
        featured: false,
        category: 'backend',
        title: 'Amazon-Style E-Commerce API (Go)',
        shortDescription: 'High-throughput Go API that powers a mini-Amazon clone—handles 200+ daily orders and 5k-item catalog for 10k users on a DigitalOcean droplet.',
        description: 'A production-ready backend written in Go that replicates core Amazon shopping flows. REST endpoints manage user auth, product browsing, cart logic, checkout, and order history. Deployed behind an Nginx reverse proxy on an Ubuntu droplet, the service talks to a tuned PostgreSQL schema (~100k rows) via sqlx, maintaining sub-100 ms median latency under load.',
        challenges: [
            'Designing a stateless Go service that scales horizontally while preserving session security',
            'Writing efficient SQL for a ~5,000-product catalog and 200 daily orders without ORM overhead',
            'Keeping 99.9 % uptime on a single low-cost VPS'
        ],
        solutions: [
            'Adopted clean-architecture pattern in Go; leveraged goroutines and channels for non-blocking I/O',
            'Normalized PostgreSQL schema, added composite indexes, batched writes for order inserts',
            'Fronted the droplet with Nginx (TLS + caching) and systemd health-checks; automated backups',
        ],
        technologies: ['Go', 'Gin', 'PostgreSQL', 'sqlx', 'Nginx', 'DigitalOcean', 'JWT', 'Docker'],
        features: [
            'JWT-based auth & refresh tokens',
            'Searchable 5k-item catalog; paginated & filtered in SQL',
            'Atomic checkout with stock locking; 200+ orders/day',
            'Admin endpoints for product CRUD and order analytics',
            'Containerized CI/CD pipeline → zero-downtime deploys'
        ],
        links: [
            { text: 'View Repository', url: 'https://github.com/arshit21/amazon_clone_go', icon: 'fab fa-github' }
        ]
    },
    {
        id: 'Sports-Gear-Shop',
        featured: false,
        category: 'backend',
        title: 'Django E-Commerce for Sports Goods',
        shortDescription: 'Backend in Django for a site selling sports equipment; supports 10k registered shoppers and 200 daily purchases with simulated payment flow.',
        description: 'Built with Django, this store delivers a responsive catalog of bats, balls and fitness gear. Custom views handle registration, login, cart, manually simulated payments and order fulfillment. A PostgreSQL backend stores 100k+ rows of users, inventory and transactions. Hosted on DigitalOcean with Gunicorn served through an SSL-terminating Nginx reverse proxy.',
        challenges: [
            'Separating read/write traffic so catalog pages stay fast during checkout spikes',
            'Implementing granular model permissions for staff vs. customers',
            'Automating nightly inventory sync while site remains live',
            'Budget hosting while guaranteeing SSL and backup recovery'
        ],
        solutions: [
            'Enabled Django’s select_related/prefetch to cut query count; moved heavy reports to async Celery workers',
            'Used Django Groups & DRF permissions to lock down admin APIs',
            'Cron-driven import updates quantities from supplier CSVs without downtime',
            'Docker-compose deploy on DigitalOcean; Nginx handles HTTPS, static assets and cache headers'
        ],
        technologies: ['Python', 'Django', 'Django REST Framework', 'PostgreSQL', 'Celery', 'Redis', 'Nginx', 'DigitalOcean'],
        features: [
            'Product catalog (~5k SKUs) with faceted search',
            'Secure JWT/Session auth plus social login',
            'Checkout pipeline: cart → address → payment → invoice email',
            'Admin dashboard for stock, discounts and sales KPIs',
        ],
        links: [
            { text: 'View Repository', url: 'https://github.com/arshit21/ecommerce', icon: 'fab fa-github' },
        ]
    },
    {
        id: 'BT-RealEstate-Backend',
        featured: false,
        category: 'backend',
        title: 'Django Real-Estate Platform',
        shortDescription: 'Server-rendered real-estate listing site built during Udemy’s “Python Django Dev to Deployment” course; handles property search, agent dashboards and inquiry e-mails.',
        description: 'Capstone backend developed while completing Brad Traversy’s Udemy course (certificate ID UC-3ab5660f-9346-466f-8007-842c8f173912). The app lets visitors browse, filter and paginate residential listings, view agent profiles, and submit contact forms that trigger e-mail leads. Admins manage listings, photos and users through Django Admin. Deployed on a DigitalOcean droplet with Gunicorn behind an SSL-terminating Nginx reverse proxy.',
        challenges: [
            'Learning Django’s MTV pattern, ORM and admin while following a structured course',
            'Building paginated, searchable listings without external JS frameworks',
            'Sending inquiry e-mails securely from a low-cost VPS',
            'Configuring production-grade deployment (Gunicorn, Nginx, SSL) on DigitalOcean'
        ],
        solutions: [
            'Implemented listing, realtor and user models; leveraged Django Admin for CRUD',
            'Added keyword, city, bedroom and price filters with QuerySet chaining',
            'Integrated SMTP-based e-mail for lead notifications',
            'Provisioned Ubuntu droplet, set up Gunicorn service file and Nginx reverse proxy with Let’s Encrypt certificates'
        ],
        technologies: ['Python', 'Django', 'Django ORM', 'PostgreSQL', 'Gunicorn', 'Nginx', 'DigitalOcean', 'Bootstrap'],
        features: [
            'SEO-friendly listing and realtor detail pages',
            'Contact form → e-mail lead pipeline',
            'Pagination & dynamic search filters',
            'Role-based dashboards for realtors vs. admins',
            'Course-backed implementation with verifiable Udemy certificate'
        ],
        links: [
            { text: 'View Repository', url: 'https://github.com/arshit21/btre_project', icon: 'fab fa-github' },
            { text: 'Course', url: 'https://www.udemy.com/course/python-django-dev-to-deployment/', icon: 'fas fa-play' },
            { text: 'Certificate', url: 'https://www.udemy.com/certificate/UC-3ab5660f-9346-466f-8007-842c8f173912/', icon: 'fas fa-certificate' }
        ]
    },

    {
        id: 'CLI-Notes-Manager',
        featured: false,
        category: 'cli',
        title: 'Command-Line Notes Application (Intro to Node.js)',
        shortDescription: 'First-steps Node.js tool that lets you add, list, search and delete notes straight from the terminal.',
        description: 'An introductory project built to gain hands-on familiarity with Node.js basics—module imports, argument parsing and file-system I/O. The utility (written in plain JavaScript with the yargs library) lets users manage notes from the command line and persists data to a local JSON file. The codebase demonstrates clean modular structure without any external database or framework overhead.',
        challenges: [
            'Learning Node.js core APIs while delivering a useful CLI',
            'Designing an intuitive UX entirely in the terminal',
            'Handling edge cases such as duplicate titles and malformed input'
        ],
        solutions: [
            'Used yargs for robust command parsing and auto-generated help',
            'Implemented asynchronous fs operations to store notes in a single JSON file',
            'Added validation guards to prevent duplicates and ensure safe file writes',
            'Separated concerns into modules—commands, utilities and data layer—for clarity'
        ],
        technologies: ['Node.js', 'JavaScript', 'yargs', 'fs'],
        features: [
            'Terminal CRUD: add, list, search, delete',
            'Instant duplicate-title detection',
            'Colorized console output for readability',
            'Zero external services—runs offline'
        ],
        links: [
            { text: 'View Repository', url: 'https://github.com/arshit21/notes-application', icon: 'fab fa-github' }
        ]
    },
    {
        id: 'Task-Manager-Django',
        featured: false,
        category: 'backend',
        title: 'Django Task-Manager (Intro Project)',
        shortDescription: 'Beginner-level web app built while learning Django—lets users create, update and track tasks with a clean Bootstrap UI.',
        description: 'An introductory Django project developed to grasp the framework’s fundamentals: models, views, templates and the ORM. The app offers basic task CRUD, status toggling and simple filtering. Data is stored in SQLite for quick local development; pages are rendered server-side using Django Templates and styled with vanilla CSS/Bootstrap.',
        challenges: [
            'Understanding Django’s MTV architecture from scratch',
            'Implementing relational models and migrations for tasks vs. statuses',
            'Providing form validation and CSRF-secured POST flows without relying on third-party packages',
            'Keeping the codebase modular and readable while experimenting with new concepts'
        ],
        solutions: [
            'Defined Task and Status models with auto-timestamp fields; ran initial and incremental migrations',
            'Built class-based views (List, Create, Update, Delete) to minimize boilerplate',
            'Used Django’s built-in Form and Messages frameworks for validation and user feedback',
            'Structured the project into reusable templates and static asset folders, mirroring Django best-practices'
        ],
        technologies: ['Python', 'Django', 'SQLite', 'Bootstrap', 'HTML', 'CSS', 'JavaScript'],
        features: [
            'Task CRUD with completion toggle',
            'Server-rendered pages—no JS frameworks',
            'Bootstrap-based responsive layout',
            'Flash messages for success/error states',
            'Ready for upgrade to PostgreSQL & deployment'
        ],
        links: [
            { text: 'View Repository', url: 'https://github.com/arshit21/task_manager', icon: 'fab fa-github' }
        ]
    },
    {
        id: 'Library-OOP-Demo',
        featured: false,
        category: 'python',
        title: 'Library-Management System (Intro to OOP)',
        shortDescription: 'Console-based Python project that applies core object-oriented concepts to manage books, members and loans.',
        description: 'Built as a first foray into Python OOP, this small-scale library system defines Book, Member and Library classes with methods for lending, returning and donating titles. All data lives in in-memory lists, keeping the focus on class design, encapsulation and interaction rather than persistence layers or GUIs.',
        challenges: [
            'Understanding class relationships and responsibilities from scratch',
            'Avoiding tightly coupled code while passing objects between modules',
            'Handling edge cases such as double-borrows or invalid returns in a clean, exception-safe way'
        ],
        solutions: [
            'Modeled core entities—Book, Member, Library—as separate classes with clear interfaces',
            'Used dunder methods (__str__, __repr__) for readable logs and debugging',
            'Implemented validation logic inside class methods to enforce invariants and surface helpful errors',
            'Documented each class with docstrings to reinforce best practices picked up during learning'
        ],
        technologies: ['Python', 'Object-Oriented Programming'],
        features: [
            'Add, borrow, return and donate books via simple console prompts',
            'Real-time availability checks prevent duplicate lending',
            'Automatic tracking of each member’s current loans',
            'Lightweight codebase (<300 LOC) ideal for newcomers to study'
        ],
        links: [
            { text: 'View Repository', url: 'https://github.com/arshit21/library_management', icon: 'fab fa-github' }
        ]
    }


];

// ============================================================================
// PROJECT CATEGORIES CONFIGURATION
// ============================================================================
const PROJECT_CATEGORIES = [
    { id: 'all', name: 'All Projects', icon: 'fas fa-th' },
    { id: 'backend', name: 'Backend', icon: 'fas fa-server' },
    { id: 'ml', name: 'Machine Learning', icon: 'fas fa-project-diagram' },
    {id: 'dl', name: 'Deep Learning', icon: 'fas fa-brain'},
    {id: 'cli', name: 'CLI', icon: 'fas fa-terminal' },
    {id: 'python', name: 'Python', icon: 'fab fa-python'}
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