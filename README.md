# Are You Coming to Training?

A fun single-page web app that asks users if they're coming to training.
The "No" button runs away from your cursor so you can never click it.

## Live Demo

https://training-please-come.netlify.app/

## Features

- "No" button dodges your cursor on desktop
- Works on mobile too — the button runs away from your finger
- Clean, minimal dark UI

## Tech Stack

- **React** — UI and button logic
- **Vite** — frontend build tool and dev server
- **Docker** — containerization for deployment

## Running Locally

### With Docker
```bash
docker compose up --build

### Without Docker
cd frontend
npm install
npm run dev

## Project Structure
training-rsvp/
├── frontend/
│   ├── src/
│   │   ├── App.jsx       # Main page + button logic
│   │   ├── main.jsx      # React entry point
│   │   └── index.css     # Styles
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── Dockerfile
└── docker-compose.yml
