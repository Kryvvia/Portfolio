# Kryvvia — Premium AI & Software Development Agency

Welcome to the official repository of **Kryvvia**, a premium software engineering and AI research agency founded by Sandeep Naik, Nikshitha Vadthyavath, and Samadhan Ghorpade. 

This repository powers our digital portal, showcasing our capabilities, client case studies, engineering blogs, and research publications.

---

## 🚀 Technical Architecture

* **Frontend Framework:** Next.js (Page Router)
* **UI Library:** React 19
* **Styling Engine:** Tailwind CSS & Custom CSS Custom Properties
* **Animations:** Framer Motion (smooth entrance transitions & mouse-following glow components)
* **Icons:** Lucide React
* **Production Ops:** Docker containers, automated GitHub Actions CI/CD pipeline, AWS EC2, S3 static assets storage, and CloudFront CDN.

---

## 📁 Directory Structure

```text
kryvvia/
├── components/       # Custom React widgets (Hero, FAQ, Testimonials, Team card views)
├── data/             # Central data models (blogs, case studies)
├── pages/            # Next.js pages and dynamic dynamic routes
│   ├── team/         # Dynamic developer bio pages & custom shell consoles
│   ├── projects/     # Dynamic case study directories
│   └── blog/         # Dynamic engineering articles
├── public/           # Developer avatars, project cover cards, and favicon assets
├── styles/           # Global styles and tailwind directives
└── package.json      # Dependencies and execution commands
```

---

## 🛠️ Running Locally

Follow these instructions to start the development workspace locally:

### 1. Install Dependencies
```bash
npm install
```

### 2. Launch Local Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 3. Production Build
Ensure code compiles cleanly with no static rendering failures:
```bash
npm run build
npm run start
```
