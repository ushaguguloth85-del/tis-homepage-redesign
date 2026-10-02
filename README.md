# Tulas International School - Homepage Redesign

A modern, responsive homepage redesign for Tulas International School (TIS), built as a frontend developer assessment project.

## Tech Stack

- React
- Vite
- JavaScript
- CSS
- Framer Motion
- Lucide React

## Features

- Responsive desktop, tablet and mobile layouts
- Animated hero section
- Scroll-triggered animations
- Custom cursor for desktop
- Scroll progress indicator
- Light/Dark theme switcher
- Responsive mobile navigation
- Smooth scrolling between sections
- Reusable React components
- Official TIS-inspired content and imagery
- Accessible buttons, links and image alt text

## Main Sections

- Hero
- About TIS
- Life at TIS / Statistics
- Academics
- Campus Life
- Admissions
- Contact
- Footer

## Project Structure

```text
src/
├── components/
│   ├── animation/
│   │   ├── CustomCursor.jsx
│   │   ├── CustomCursor.css
│   │   ├── ScrollProgress.jsx
│   │   ├── ScrollProgress.css
│   │   ├── ThemeToggle.jsx
│   │   └── ThemeToggle.css
│   │
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   ├── Navbar.css
│   │   ├── Footer.jsx
│   │   └── Footer.css
│   │
│   └── sections/
│       ├── Hero.jsx
│       ├── Hero.css
│       ├── About.jsx
│       ├── About.css
│       ├── Stats.jsx
│       ├── Stats.css
│       ├── Academics.jsx
│       ├── Academics.css
│       ├── Campus.jsx
│       ├── Campus.css
│       ├── Admissions.jsx
│       ├── Admissions.css
│       ├── Contact.jsx
│       └── Contact.css
│
├── data/
│   └── siteData.js
│
├── App.jsx
├── App.css
├── index.css
└── main.jsx
