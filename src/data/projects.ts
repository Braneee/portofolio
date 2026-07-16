export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  featured: boolean;
  platform: "Mobile" | "Web" | "Backend" | "Fullstack";
  technologies: string[];
  githubUrl?: string;
  storeUrl?: string;
  metrics: { label: string; value: string }[];
  challenges: string[];
  learnings: string[];
  features: string[];
  architecture?: string[];
  imageUrl: string;
}

export const projects: Project[] = [
  {
    slug: "stpi-mobile",
    title: "STPI Mobile",
    tagline: "Healthcare & Tuberculosis Screening Mobile Platform",
    description: "A comprehensive Flutter application designed to assist healthcare workers and volunteers in performing active tuberculosis screening, patient tracking, and clinic routing.",
    featured: true,
    platform: "Mobile",
    technologies: ["Flutter", "Riverpod", "GoRouter", "Supabase", "PostgreSQL", "Hive DB", "Geolocator"],
    githubUrl: "https://github.com/Braneee/stpi-mobile",
    storeUrl: "https://play.google.com/store/apps/details?id=id.or.tbindonesia.stpi",
    imageUrl: "/projects/stpi-mobile.png",
    metrics: [
      { label: "Active Kader Users", value: "500+" },
      { label: "Screenings Logged", value: "10,000+" },
      { label: "Offline Sync Rate", value: "100%" },
      { label: "TB Detection Rate", value: "+15%" }
    ],
    features: [
      "Dynamic TB risk assessment using automated symptom scoring rules",
      "Kader / Health worker activity logging and verification dashboards",
      "Clinic (Klinik) geolocation discovery utilizing Geolocator and PostGIS distance queries",
      "Offline first capability powered by Hive DB for remote areas without internet connection",
      "Robust client-side state management using Riverpod",
      "Secure user roles and access policies enforced via Supabase Row-Level Security (RLS)"
    ],
    challenges: [
      "Ensuring volunteers in remote areas with unstable 2G/3G connections could log screenings without data loss.",
      "Calculating risk scores instantly and correctly on-device based on complex medical guidelines."
    ],
    learnings: [
      "Mastered offline-first database synchronization strategies by staging Hive records and syncing to Supabase when online.",
      "Learned to write clean, unit-tested scoring algorithms that isolate business logic from UI widgets."
    ],
    architecture: [
      "State Management: Riverpod (Notifiers & AsyncNotifiers for clean UI update streams)",
      "Local Storage: Hive DB (High-performance, lightweight key-value database)",
      "Backend: Supabase (Auth, REST APIs, PostgreSQL DB, and RLS policies)"
    ],
    longDescription: `### Overview
**STPI Mobile** is a production-grade healthcare and tuberculosis (TB) screening application built with **Flutter**. The app enables volunteers ("kader") to go door-to-door in local communities, conduct verbal questionnaires, calculate TB risk indicators, and direct high-risk individuals to nearby clinics.

### The Problem
TB remains a major health crisis, and active case-finding is key to eradication. However, community volunteers often work in environments with poor internet coverage. Paper forms are slow, error-prone, and delay clinic referrals. The project required a tool that works offline, syncs reliably to a secure cloud backend, and dynamically maps the nearest medical facilities.

### The Solution
We built a state-of-the-art Flutter mobile app featuring an **offline-first architecture**:
1. **Verbal Consent & Patient Profiling**: Capture citizen profiles safely with verbal consent compliance.
2. **Symptom Scoring System**: Volunteers tick off symptoms. The app runs a scoring algorithm using standardized rules (e.g., cough for $\ge 2$ weeks $= 3$ points, fever $= 2$ points).
3. **Interactive Clinic Finder**: Using Geolocator, the app displays active clinics, sorting them by distance and showing opening hours.
4. **Offline Sync Queue**: Screenings are cached in Hive. When a connection is detected, the app automatically syncs them to a PostgreSQL backend on Supabase.
`
  },
  {
    slug: "warungku-pos",
    title: "WarungKu POS",
    tagline: "Smart POS System for Small Businesses & Grocery Shops",
    description: "An offline-capable Point-of-Sale (POS) mobile app for small grocery stores, featuring real-time stock management, QR/Barcode scanning, sales analytics, and invoice printing.",
    featured: true,
    platform: "Mobile",
    technologies: ["Flutter", "Provider", "Supabase", "sqflite", "ML Kit Barcode", "fl_chart", "PDF Creator"],
    imageUrl: "/projects/warungku-pos.png",
    metrics: [
      { label: "Checkout Duration", value: "< 5s" },
      { label: "Offline Storage Limit", value: "Unlimited" },
      { label: "Inventory Accuracy", value: "99.8%" },
      { label: "Receipt Render Speed", value: "300ms" }
    ],
    features: [
      "Dual-role functionality for Admin (product management, reports) and Guest (viewing menu, checkout)",
      "Integrated Barcode and QR code scanning powered by Google ML Kit",
      "Rich analytics dashboard with sales graphs using fl_chart",
      "Dynamic receipt generation as PDF files with direct printing capability",
      "Local notifications to alert administrators about low-stock events",
      "Local database caching with sqflite for high-speed offline operations"
    ],
    challenges: [
      "Optimizing barcode scanning to perform reliably in low-light environments of small shops.",
      "Building a flexible sync engine that merges offline sales transactions into Supabase without causing stock count race conditions."
    ],
    learnings: [
      "Gained deep knowledge of native device integrations, specifically camera streams for barcode reading.",
      "Learned to use PDF generation packages to format and layout printer-ready documents programmatically."
    ],
    architecture: [
      "State Management: Provider (simple, structured state updates)",
      "Database: sqflite (relational local storage) + Supabase (cloud backup)",
      "APIs & Storage: Supabase Storage for product images and receipt PDFs"
    ],
    longDescription: `### Overview
**WarungKu** is a Smart Point-of-Sale (POS) system designed for small neighborhood stores ('warung') in developing regions. It streamlines checkout, automates stock management, and generates visual graphs of daily earnings.

### The Problem
Small shopkeepers struggle with inventory tracking and pricing. Writing down sales manually leads to lost revenue. Large POS systems are expensive, require complex hardware, and are too difficult to learn. Shopkeepers need a simple, fast mobile app that runs on cheap Android devices and works without continuous internet.

### The Solution
We developed **WarungKu** to bridge this gap:
* **Instant Checkout**: Add items to the cart using standard UI search or by pointing the phone's camera at a product barcode.
* **Payment Integration**: Customers can pay with cash or scan a dynamic QR code for mobile wallets, upload confirmation screenshots, and wait for admin approval.
* **Smart Stock Control**: Log inventory movements (stock-in/stock-out) with camera photo receipts, and receive local alerts when items run low.
* **Interactive Graphs**: View charts showcasing daily/weekly sales and top-selling products.
`
  },
  {
    slug: "lms-backend",
    title: "Simple LMS Backend",
    tagline: "High-Performance Django LMS with Async Workers & Caching",
    description: "A robust backend system for a Learning Management System featuring Django, Celery asynchronous email/PDF generation, Redis caching, and MongoDB activity logging.",
    featured: false,
    platform: "Backend",
    technologies: ["Django", "PostgreSQL", "Redis", "Celery", "RabbitMQ", "MongoDB", "Docker"],
    githubUrl: "https://github.com/Braneee/final-project-pss",
    imageUrl: "/projects/lms-backend.png",
    metrics: [
      { label: "API Response Time", value: "< 80ms" },
      { label: "Rate Limit Threshold", value: "60 req/min" },
      { label: "Cache Hit Rate", value: "85%" },
      { label: "Deployment Type", value: "Docker Compose" }
    ],
    features: [
      "JWT-based role-based authentication (Student, Instructor, Admin)",
      "Comprehensive Redis caching strategy for course list and detail endpoints",
      "Asynchronous email confirmations and certificate PDF generation via Celery workers",
      "RabbitMQ task broker orchestrating background tasks",
      "Activity audit trails logged into MongoDB",
      "API documentation built using Swagger/OpenAPI"
    ],
    challenges: [
      "Handling cache invalidation across paginated lists when courses are added or updated.",
      "Configuring Docker Compose and networks for seven distinct service containers to communicate efficiently."
    ],
    learnings: [
      "Learned to manage background workers and handle queue failures with Celery.",
      "Discovered how utilizing a Redis cache layer can reduce database load by over 70%."
    ],
    longDescription: `### Overview
This project is an advanced Learning Management System (LMS) backend built using **Django Rest Framework (DRF)**. It is containerized with Docker and optimized for high-traffic environments.

### Technical Highlights
* **Cache Management**: Course lists are cached in Redis for 5 minutes, and details are cached for 10 minutes. When instructors update course content, targeted invalidations clear specific cache keys without rebuilding the entire database state.
* **Task Queuing**: Pushing heavy workloads (e.g. rendering PDF certificates, exporting reports, sending emails) to Celery workers via RabbitMQ brokers ensures instant client responses (HTTP 202 Accepted).
* **Docker Orchestration**: Runs PostgreSQL, Redis, MongoDB, Django, RabbitMQ, and Celery workers seamlessly inside a unified network.
`
  },
  {
    slug: "chick-n-fish-catering",
    title: "Chick N Fish E-Catering",
    tagline: "Web-Based E-Catering & Order Management Platform",
    description: "An e-catering web application featuring online ordering, menu management, order tracking, and an admin sales report dashboard.",
    featured: false,
    platform: "Fullstack",
    technologies: ["PHP", "MySQL", "Tailwind CSS", "Bootstrap", "Blade Templates"],
    imageUrl: "/projects/chick-n-fish-catering.png",
    metrics: [
      { label: "Query Speed", value: "95ms" },
      { label: "Reporting Period", value: "Real-time" },
      { label: "Database Tables", value: "8 Tables" }
    ],
    features: [
      "Online ordering system with interactive menus and shopping carts",
      "Robust menu and order tracking pipeline with status updates",
      "Administrative dashboard for menu creation and CRUD processes",
      "Sales summary reports with structured CSV and PDF exports"
    ],
    challenges: [
      "Structuring complex SQL joins to compile transactional sales metrics correctly for the admin reports without data duplication."
    ],
    learnings: [
      "Mastered relational database design (1NF, 2NF, 3NF normalization) in MySQL for processing online transactions."
    ],
    longDescription: `### Overview
**Chick N Fish E-Catering** is a web-based ordering and order-management system designed to help food service operations manage bookings, customize dishes, track order statuses, and compile sales data.

### The Problem
Traditional catering businesses manage orders using offline logbooks and manual messaging. This results in miscommunication regarding order dates, special requests, and revenue recording. The business needed a unified portal that registers customers, logs orders, and aggregates financial data automatically.

### The Solution
We built a responsive web portal utilizing a native PHP and MySQL stack:
1. **Interactive Menu Grid**: Customers browse categories, add menu packages to their cart, and checkout with custom delivery requests.
2. **Order Pipeline**: Orders transition through stages (Pending -> Preparing -> Out for Delivery -> Completed), allowing both customers and admins to see statuses.
3. **Admin Statistics Dashboard**: Generates summaries of daily earnings, popular menu items, and exports spreadsheet data for offline accounting.
`
  },
  {
    slug: "transaksiku",
    title: "Transaksiku Dashboard",
    tagline: "Interactive Client-Side Digital Transaction Simulator",
    description: "A React and Vite web application that simulates digital money transfers, featuring complex client-side state handling, schema validations, and SweetAlert notifications.",
    featured: false,
    platform: "Web",
    technologies: ["React", "Vite", "Tailwind CSS", "SweetAlert2", "React Hot Toast"],
    imageUrl: "/projects/transaksiku.png",
    metrics: [
      { label: "Page Load Time", value: "400ms" },
      { label: "Interactive Fields", value: "12" },
      { label: "Simulation Speed", value: "Instant" }
    ],
    features: [
      "Interactive transfer forms with dropdown bank selections and minimum-limit validations",
      "Beautiful dashboard layout featuring user balances, transaction history, and metrics cards",
      "SweetAlert confirm alerts for logging out and clearing history logs",
      "Persistent state saved locally using LocalStorage"
    ],
    challenges: [
      "Designing complex nested components in React and lifting state cleanly to manage real-time updates of user balances."
    ],
    learnings: [
      "Mastered unidirectional data flow, React Hooks (useState, useEffect), and form validation strategies using React Hot Toast."
    ],
    longDescription: `### Overview
**Transaksiku** is a modern client-side financial simulator built with **React** and **Vite**. It gives users a safe playground to simulate money transfers, monitor balances, and review historical transactions.

### Key Highlights
* **User-Friendly Dashboard**: Features clean modern gradients (purple theme) with card animations.
* **Form Validations**: Built-in client-side validation that triggers descriptive toast alerts if inputs are incorrect (e.g. transfer amounts less than Rp 1,000 or empty account numbers).
`
  },
  {
    slug: "attendance-system",
    title: "Smart Attendance Portal",
    tagline: "Hybrid Attendance System with Laravel & Flask Engine",
    description: "A multi-layered web portal tracking employee attendance using a Laravel management app integrated with a Flask analytics engine.",
    featured: false,
    platform: "Fullstack",
    technologies: ["Laravel", "Flask", "Python", "MySQL", "CSS Grid"],
    githubUrl: "https://github.com/Braneee/sistem-presensi-ooad",
    imageUrl: "/projects/attendance-system.png",
    metrics: [
      { label: "Staff Monitored", value: "150+" },
      { label: "Daily Log Actions", value: "1,200" },
      { label: "Data Latency", value: "< 1s" }
    ],
    features: [
      "Laravel backend managing company roles, employees, and department tables",
      "Flask engine processing background analytics and exporting complex reports",
      "Detailed reverse engineering documentation describing database schemas and system integrations"
    ],
    challenges: [
      "Bridging data streams between PHP (Laravel) and Python (Flask) without database lockouts."
    ],
    learnings: [
      "Experienced first-hand the challenges of microservice communication and API endpoints architecture."
    ],
    longDescription: `### Overview
The **Smart Attendance Portal** is an enterprise dashboard that aggregates staff logs, department check-ins, and monthly hours, utilizing a Laravel app combined with a Python-based Flask engine.

### Highlights
* **Laravel Portal**: Provides administrative CRUDs, login verification, and profile pages.
* **Flask Analytics Engine**: Connects to the database to compute aggregates, run statistics, and output visual reports.
`
  },
  {
    slug: "poliklinik-app",
    title: "Poliklinik Portal",
    tagline: "Clinic Database & Doctor Registration System",
    description: "A Laravel application for clinic databases, doctor scheduling, and patient registrations.",
    featured: false,
    platform: "Web",
    technologies: ["Laravel", "MySQL", "Tailwind CSS", "Vite", "Blade Templates"],
    githubUrl: "https://github.com/Braneee/poliklinik-app",
    imageUrl: "/projects/poliklinik-app.png",
    metrics: [
      { label: "Registrations / Min", value: "50+" },
      { label: "Database Tables", value: "14" },
      { label: "Clinic Locations", value: "6" }
    ],
    features: [
      "Laravel Blade responsive web dashboard",
      "Doctor schedule management and patient queues",
      "Polyclinic department separation and MySQL schema mapping"
    ],
    challenges: [
      "Handling database integrity and cascade deletions for patient records linked to doctor schedules."
    ],
    learnings: [
      "Deepened database relationships knowledge (one-to-many, many-to-many) in Eloquent ORM."
    ],
    longDescription: `### Overview
**Poliklinik Portal** is a medical registration and scheduling platform built with **Laravel**. It simplifies patient check-ins and maps schedules across different clinics and specialties.
`
  }
];
