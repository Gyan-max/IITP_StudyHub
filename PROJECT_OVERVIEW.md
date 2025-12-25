IITP StudyHub
A Centralized Academic Preparation Platform for IIT Patna Students

1. Project Idea
IITP StudyHub is a dedicated academic web platform designed exclusively for IIT Patna students to help them prepare for semester exams, quizzes, mid-semesters, end-semesters, and competitive exams. The platform aims to centralize high-quality study resources, structured roadmaps, and exam-oriented guidance in one trusted place.
Problem Statement
Study resources are scattered across WhatsApp groups, Google Drives, seniors’ folders, and random websites
No single structured roadmap for subjects and semesters
New students struggle to identify important topics and previous year question trends
Solution
Create a single, structured, student-centric platform that:
Organizes subjects semester-wise
Provides curated notes and PYQs
Guides students with clear preparation roadmaps

2. Vision & Mission
Vision
To become the most trusted academic companion for IIT Patna students, improving academic performance through structured learning and guidance.
Mission
Simplify exam preparation
Reduce dependency on scattered resources
Encourage peer-to-peer academic collaboration
Build a sustainable knowledge repository for future batches

3. Target Users
Undergraduate students of IIT Patna
First-year students needing structured guidance
Seniors preparing for core exams
Students preparing for competitive exams (GATE, JAM, etc.)

4. Core Features (MVP)
Phase 1 – Minimum Viable Product
Semester-wise subject listing
Syllabus breakdown for each subject
Important topics highlighted
Previous Year Question (PYQ) repository
Curated study resources (PDFs, links)
Simple search functionality

5. Advanced Features (Planned)
Phase 2 – Student-Centric Enhancements
Login using IIT Patna email ID
Bookmark topics and resources
Progress tracking per subject
Exam countdown and reminders
Phase 3 – Smart & Collaborative Features
AI-based topic recommendation
Difficulty tagging of PYQs
Collaborative notes and discussion forum
Contributor system for seniors and toppers

6. Technology Stack
Frontend
React.js with Vite
Tailwind CSS for styling
React Router for navigation
Backend (Initial)
Firebase Authentication
Firestore database
Firebase Storage for PDFs
Backend (Advanced)
Flask / FastAPI
REST APIs
PostgreSQL / MongoDB
Deployment
Vercel / Netlify (Frontend)
Firebase / Cloud Run (Backend)

7. Project Folder Structure
```
IITP_StudyHub/
│
├── frontend/                      # React + Vite Frontend
│   ├── public/
│   │   ├── logo.png
│   │   └── favicon.ico
│   │
│   ├── src/
│   │   ├── assets/               # Images, icons, static files
│   │   │   ├── images/
│   │   │   └── icons/
│   │   │
│   │   ├── components/           # Reusable components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── SearchBar.jsx
│   │   │   ├── SubjectCard.jsx
│   │   │   └── ResourceCard.jsx
│   │   │
│   │   ├── pages/                # Page components
│   │   │   ├── Home.jsx
│   │   │   ├── Semesters.jsx
│   │   │   ├── SubjectDetail.jsx
│   │   │   ├── PYQs.jsx
│   │   │   ├── Resources.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Profile.jsx
│   │   │   └── Admin.jsx
│   │   │
│   │   ├── context/              # Context API for state management
│   │   │   ├── AuthContext.jsx
│   │   │   └── DataContext.jsx
│   │   │
│   │   ├── hooks/                # Custom React hooks
│   │   │   ├── useAuth.js
│   │   │   └── useFetch.js
│   │   │
│   │   ├── services/             # API calls and Firebase config
│   │   │   ├── firebase.js
│   │   │   ├── api.js
│   │   │   └── auth.js
│   │   │
│   │   ├── utils/                # Utility functions
│   │   │   ├── constants.js
│   │   │   └── helpers.js
│   │   │
│   │   ├── styles/               # Global styles
│   │   │   └── index.css
│   │   │
│   │   ├── App.jsx               # Main App component
│   │   ├── main.jsx              # Entry point
│   │   └── routes.jsx            # Route definitions
│   │
│   ├── .env                      # Environment variables
│   ├── .gitignore
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── postcss.config.js
│
├── backend/                      # Backend API (Flask/FastAPI)
│   ├── app/
│   │   ├── __init__.py
│   │   ├── main.py               # Main application file
│   │   │
│   │   ├── routes/               # API route handlers
│   │   │   ├── __init__.py
│   │   │   ├── auth.py
│   │   │   ├── subjects.py
│   │   │   ├── resources.py
│   │   │   └── admin.py
│   │   │
│   │   ├── models/               # Database models
│   │   │   ├── __init__.py
│   │   │   ├── user.py
│   │   │   ├── subject.py
│   │   │   └── resource.py
│   │   │
│   │   ├── services/             # Business logic
│   │   │   ├── __init__.py
│   │   │   ├── auth_service.py
│   │   │   └── resource_service.py
│   │   │
│   │   ├── utils/                # Utility functions
│   │   │   ├── __init__.py
│   │   │   └── helpers.py
│   │   │
│   │   └── config.py             # Configuration settings
│   │
│   ├── tests/                    # Unit tests
│   │   └── test_api.py
│   │
│   ├── requirements.txt          # Python dependencies
│   ├── .env                      # Environment variables
│   ├── .gitignore
│   └── README.md
│
├── database/                     # Database scripts and migrations
│   ├── schema.sql
│   └── seed_data.sql
│
├── docs/                         # Documentation
│   ├── API.md                    # API documentation
│   ├── SETUP.md                  # Setup instructions
│   └── CONTRIBUTING.md           # Contribution guidelines
│
├── resources/                    # Study materials storage
│   ├── notes/
│   ├── pyqs/
│   └── syllabus/
│
├── .git/                         # Git repository
├── .gitignore                    # Global gitignore
├── README.md                     # This file
└── LICENSE                       # License file
```

8. System Architecture (High-Level)
User accesses web application
Frontend fetches data from Firebase / Backend APIs
Authenticated users access personalized features
Admin panel manages resources and moderation

9. Development Roadmap
Month 1 – Foundation
Finalize features
Design UI wireframes
Set up frontend project
Firebase integration
Month 2 – Core Development
Subject & semester pages
Upload and manage resources
Implement authentication
Month 3 – Enhancements
Progress tracking
Search & filters
UI/UX improvements
Month 4 – Advanced Features
AI recommendations
Discussion forum
Analytics dashboard

10. Impact & Benefits
For Students
Saves time
Clear preparation path
Reduced exam stress
For Institute
Academic consistency
Knowledge preservation
Improved overall performance

11. Scalability & Future Scope
Expansion to other IITs
GATE & competitive exam sections
Mobile app
Mentorship and doubt-solving sessions


12. Conclusion
IITP StudyHub is not just a website but a long-term academic ecosystem designed to empower students with clarity, structure, and confidence. With proper execution, it can significantly improve academic preparation and student outcomes at IIT Patna.

