# Yizhao Li Portfolio

A personal 3D developer portfolio built with React, Vite, Tailwind CSS, and Three.js. The site introduces my background, highlights selected projects, showcases technical skills, and includes a contact form powered by EmailJS.

## Live Demo

[View the site on GitHub Pages](https://xiananou.github.io/Protfolio/)

## Features

- 3D hero section and animated canvas background
- Responsive single-page portfolio layout
- Experience, tech stack, and project showcase sections
- Project cards with GitHub repository links
- Contact form integrated with EmailJS
- GitHub Pages deployment via GitHub Actions

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- Framer Motion
- Three.js
- React Three Fiber
- React Three Drei
- EmailJS

## Project Sections

- `Hero`: introduction and landing view
- `About`: personal summary
- `Experience`: professional experience timeline
- `Tech`: technology icons and skills
- `Works`: featured portfolio projects
- `Contact`: EmailJS-powered contact form with 3D earth canvas

## Featured Projects

### AI Agent Platform

AI-powered assistant that can browse websites and complete repetitive online tasks such as data collection, form filling, and workflow automation.

Repository: [BrowserAgent](https://github.com/xiananou/BrowserAgent)

### Jobs Dashboard

A dashboard for monitoring automated jobs, task status, logs, and performance across a single web interface.

Repository: [JobDashBoard](https://github.com/xiananou/JobDashBoard)

### FlowMap

An Android navigation application that visualizes real-time traffic information and supports intelligent multi-mode route planning.

Repository: [TrafficNow_V1](https://github.com/xiananou/TrafficNow_V1)

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install

```bash
npm install
```

### Run Locally

```bash
npm run dev
```

Open `http://localhost:5173` in your browser.

### Production Build

```bash
npm run build
npm run preview
```

## Environment Variables

Create a `.env` file in the project root:

```env
VITE_APP_EMAILJS_SERVICE_ID=your_service_id
VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
VITE_APP_CONTACT_TO_NAME=Yizhao
VITE_APP_CONTACT_TO_EMAIL=your_email@example.com
```

Notes:

- `.env.example` contains the expected variable names.
- `.env` is ignored by git and should not be committed.
- After editing `.env`, restart the Vite dev server.

## EmailJS Setup

1. Create an EmailJS account.
2. Connect an email service such as Gmail or Outlook.
3. Create a template that uses:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{to_name}}`
   - `{{to_email}}`
   - `{{message}}`
4. Copy your `Service ID`, `Template ID`, and `Public Key` into `.env`.

Recommended template fields:

- `To Email`: `{{to_email}}`
- `From Name`: `{{from_name}}`
- `Reply To`: `{{from_email}}`
- `From Email`: use the service default email address

## Deploying to GitHub Pages

This repository is configured for GitHub Pages deployment through GitHub Actions.

### One-time GitHub setup

1. Push the project to the `main` branch of this repository.
2. In GitHub, open `Settings` -> `Pages`.
3. Set `Source` to `GitHub Actions`.
4. In `Settings` -> `Secrets and variables` -> `Actions` -> `Variables`, add:
   - `VITE_APP_EMAILJS_SERVICE_ID`
   - `VITE_APP_EMAILJS_TEMPLATE_ID`
   - `VITE_APP_EMAILJS_PUBLIC_KEY`
   - `VITE_APP_CONTACT_TO_NAME`
   - `VITE_APP_CONTACT_TO_EMAIL`

After that, every push to `main` will trigger deployment automatically.

## Repository Structure

```text
src/
  assets/
  components/
  constants/
  hoc/
  utils/
.github/
  workflows/
```

## Available Scripts

- `npm run dev`: start the development server
- `npm run build`: create a production build
- `npm run preview`: preview the production build locally

## License

This project is for personal portfolio use.
