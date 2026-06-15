# 🚀 AI Interview Platform

<p align="center">
  <strong>AI-Powered Mock Interview Platform for Technical & HR Preparation</strong>
</p>

<p align="center">
  Upload your resume, generate personalized interview questions, practice realistic interview rounds, and receive detailed AI-powered feedback to improve your interview performance.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-Frontend-blue?logo=react" />
  <img src="https://img.shields.io/badge/Node.js-Backend-green?logo=node.js" />
  <img src="https://img.shields.io/badge/MongoDB-Database-green?logo=mongodb" />
  <img src="https://img.shields.io/badge/OpenRouter-AI-purple" />
  <img src="https://img.shields.io/badge/Firebase-Authentication-orange?logo=firebase" />
  <img src="https://img.shields.io/badge/Razorpay-Payments-blue" />
  <img src="https://img.shields.io/badge/License-MIT-yellow" />
</p>

---

## 🎯 Overview

AI Interview Platform is a full-stack AI-powered SaaS application that helps students and professionals prepare for technical and HR interviews through personalized mock interview experiences.

Unlike traditional interview preparation tools that provide generic question sets, AI Interview Platform analyzes a candidate's resume and dynamically generates interview questions tailored to their skills, projects, technologies, and experience.

The platform combines Artificial Intelligence, Resume Intelligence, Secure Authentication, Payment Integration, and Performance Analytics into a complete interview preparation ecosystem.

---

## 📸 Screenshots

### 🏠 Landing Page

![Home](./client/assets/home.png)

### 🎤 AI Interview Session

![Interview](./client/assets/interview.png)

### 📄 Resume Analysis

![Resume Analysis](./client/assets/resume_analyse.png)

---

## ✨ Features

### 📄 Resume Intelligence

* PDF Resume Upload
* Resume Parsing & Analysis
* Skill Extraction
* Project Identification
* Experience Detection
* Candidate Profiling

### 🤖 AI Interview Generation

* Resume-Aware Question Generation
* Personalized Interview Sessions
* Context-Aware Follow-Up Questions
* Technical & HR Modes
* Dynamic Difficulty Levels

### 💻 Technical Interview Practice

* Data Structures & Algorithms
* Object-Oriented Programming
* DBMS
* Operating Systems
* Computer Networks
* System Design
* Web Development

### 💼 HR Interview Practice

* Behavioral Questions
* Leadership Assessment
* Communication Evaluation
* Team Collaboration Scenarios
* Conflict Resolution Questions

### 🧠 AI Feedback Engine

* Interview Score Generation
* Strength Analysis
* Weakness Detection
* Improvement Suggestions
* Personalized Recommendations

### 📊 Analytics Dashboard

* Interview History
* Performance Tracking
* Progress Reports
* Skill Analytics
* Historical Comparison

### 💳 SaaS Credit System

* Credit-Based Interview Access
* Usage Tracking
* Premium Features
* Razorpay Integration

### 🔐 Authentication & Security

* Google Authentication
* Firebase Authentication
* JWT Authorization
* Protected Routes
* Secure Sessions

---

## 💡 Why This Project?

Most interview preparation platforms provide generic questions that fail to reflect a candidate's actual skills and experiences.

AI Interview Platform solves this problem by using Artificial Intelligence to understand a user's resume and generate highly personalized interview experiences tailored specifically to their profile.

This provides a more realistic preparation environment, helping candidates improve confidence, communication skills, and technical knowledge before actual interviews.

---

## 🔄 User Workflow

```text
Sign In
   │
   ▼
Upload Resume
   │
   ▼
Resume Analysis
   │
   ▼
Interview Generation
   │
   ▼
Mock Interview Session
   │
   ▼
AI Evaluation
   │
   ▼
Performance Report
```

---

## 🚀 Feature Showcase

### 🎯 Resume-Based Interview Generation

Generate interview questions directly from:

* Skills
* Technologies
* Projects
* Work Experience
* Certifications

### 🎤 Realistic Interview Experience

Simulates real-world technical and HR interviews through AI-generated interactions.

### 🧠 AI Evaluation

Provides detailed feedback based on:

* Accuracy
* Communication
* Confidence
* Technical Depth
* Problem-Solving Ability

### 📈 Progress Tracking

Track improvement across multiple interview sessions through detailed analytics.

### 💳 Payment Integration

Secure Razorpay-powered credit purchases for premium interviews.

### 🔒 Secure Authentication

Google Sign-In using Firebase Authentication with JWT-secured APIs.

---

## 🏗️ Tech Stack

### Frontend

| Technology    | Purpose             |
| ------------- | ------------------- |
| React.js      | UI Development      |
| Tailwind CSS  | Styling             |
| Framer Motion | Animations          |
| React Router  | Routing             |
| Axios         | API Calls           |
| Vite          | Frontend Build Tool |

### Backend

| Technology | Purpose             |
| ---------- | ------------------- |
| Node.js    | Runtime Environment |
| Express.js | REST APIs           |
| JWT        | Authentication      |
| Multer     | File Uploads        |
| PDF Parser | Resume Parsing      |

### Database

| Technology | Purpose      |
| ---------- | ------------ |
| MongoDB    | Data Storage |
| Mongoose   | ODM          |

### Authentication

| Technology    | Purpose       |
| ------------- | ------------- |
| Firebase Auth | Google Login  |
| JWT           | Secure Access |

### AI Services

| Technology     | Purpose                        |
| -------------- | ------------------------------ |
| OpenRouter API | AI Interview Engine            |
| LLM Models     | Question Generation & Feedback |

### Payments

| Technology | Purpose            |
| ---------- | ------------------ |
| Razorpay   | Payment Processing |

### Deployment

| Technology    | Purpose          |
| ------------- | ---------------- |
| Render        | Backend Hosting  |
| MongoDB Atlas | Cloud Database   |
| Vercel        | Frontend Hosting |

---

## 🏛️ System Architecture

```text
                    ┌─────────────────┐
                    │      User       │
                    └────────┬────────┘
                             │
                             ▼

                 ┌─────────────────────┐
                 │   React Frontend    │
                 └────────┬────────────┘
                          │

        ┌─────────────────┼─────────────────┐
        ▼                 ▼                 ▼

 Firebase Auth      Razorpay        Resume Upload

                          │
                          ▼

                 ┌─────────────────────┐
                 │ Node.js + Express   │
                 └────────┬────────────┘
                          │

          ┌───────────────┼───────────────┐
          ▼               ▼               ▼

      MongoDB       OpenRouter AI     JWT Auth

                          │
                          ▼

                AI Interview Engine
                          │
                          ▼

                 Feedback & Analytics
```

---

## 📂 Project Structure

```text
AI-Interview-Platform
│
├── client
│   ├── assets
│   ├── components
│   ├── pages
│   ├── hooks
│   ├── services
│   ├── context
│   └── src
│
├── server
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── services
│   ├── utils
│   └── uploads
│
├── .gitignore
├── LICENSE
└── README.md
```

---

## ⚙️ Environment Variables

### Server (.env)

```env
PORT=3000

MONGODB_URL=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

OPENROUTER_API_KEY=your_openrouter_api_key

RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
```

### Client (.env)

```env
VITE_FIREBASE_APIKEY=your_firebase_api_key
VITE_FIREBASE_AUTHDOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECTID=your_firebase_project_id
VITE_FIREBASE_STORAGEBUCKET=your_firebase_storage_bucket
VITE_FIREBASE_MESSAGINGSENDERID=your_sender_id
VITE_FIREBASE_APPID=your_app_id

VITE_RAZORPAY_KEY_ID=your_razorpay_key_id

VITE_API_URL=http://localhost:3000/api
```

---

## 🛠️ Installation & Setup

### Clone Repository

```bash
git clone https://github.com/yourusername/AI-Interview-Platform.git

cd AI-Interview-Platform
```

### Install Backend Dependencies

```bash
cd server

npm install
```

### Install Frontend Dependencies

```bash
cd ../client

npm install
```

### Configure Environment Variables

Create `.env` files inside both client and server directories.

### Start Backend

```bash
cd server

npm run dev
```

### Start Frontend

```bash
cd client

npm run dev
```

### Open Browser

```text
http://localhost:5173
```

---

## 🧠 Engineering Challenges Solved

### Resume Parsing Pipeline

Built a workflow that converts uploaded PDF resumes into structured candidate profiles.

### AI Question Generation

Developed a prompt-engineering pipeline that generates personalized interview questions.

### AI Feedback System

Created structured evaluations from candidate responses.

### Credit-Based SaaS Architecture

Implemented interview credit tracking and premium access controls.

### Authentication Layer

Integrated Firebase Authentication with JWT-secured backend APIs.

### Scalable Backend Structure

Separated:

* Controllers
* Services
* Middleware
* Routes
* Utilities

for maintainability and scalability.

---

## 📊 Project Highlights

* AI-Powered Interview Generation
* Resume-Based Question Creation
* Technical & HR Interview Modes
* AI Feedback Reports
* Firebase Authentication
* Razorpay Integration
* SaaS Credit System
* Cloud Deployment
* Responsive UI
* Full-Stack MERN Architecture

---

## 🎓 Skills Demonstrated

* Full-Stack Development
* React.js
* Node.js
* MongoDB
* REST APIs
* JWT Authentication
* Firebase Authentication
* AI Integration
* Prompt Engineering
* Payment Gateway Integration
* SaaS Architecture
* Cloud Deployment
* Modern UI/UX

---

## 🤝 Contributing

Contributions are welcome!

```bash
Fork the repository

Create your feature branch

Commit your changes

Push to the branch

Open a Pull Request
```

---

## 📄 License

This project is licensed under the MIT License.

```text
MIT License

Copyright (c) 2026

Permission is hereby granted, free of charge,
to any person obtaining a copy of this software
and associated documentation files...
```

---

## 👨‍💻 Author

**Devesh Mehra**

* B.Tech (ECE), IIIT Allahabad
* Full Stack Developer
* Competitive Programmer
* AI & Software Engineering Enthusiast

---

<p align="center">
⭐ If you found this project helpful, please consider giving it a star on GitHub!
</p>
