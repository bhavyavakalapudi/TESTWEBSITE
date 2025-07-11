# Frontend-Only Batch Processing App

A React-based frontend application with simulated authentication and batch processing functionality.

## Features

- **Simulated Authentication**: Hardcoded login credentials (admin@test.com / password123)
- **Protected Routing**: Dashboard access requires authentication
- **Batch Processing Form**: Configure and start batch jobs with validation
- **Modern UI**: Built with React, Tailwind CSS, and shadcn/ui components
- **Form Validation**: Client-side validation with React Hook Form and Zod

## Quick Start

### Option 1: Use existing setup (with backend files)
```bash
npm install
npm run dev
```

### Option 2: Frontend-only setup (recommended)
```bash
# Replace package.json with frontend-only version
mv package.json package-fullstack.json
mv package-frontend-only.json package.json

# Replace vite config
mv vite.config.ts vite-fullstack.config.ts  
mv vite-frontend-only.config.ts vite.config.ts

# Install dependencies and start
npm install
npm run dev
```

## Hardcoded Credentials

- **Email**: admin@test.com
- **Password**: password123

## Project Structure

```
├── client/
│   ├── src/
│   │   ├── components/ui/     # shadcn/ui components
│   │   ├── pages/            # Login & Dashboard pages
│   │   ├── lib/              # Utilities & auth simulation
│   │   └── hooks/            # React hooks
│   └── index.html
├── shared/                   # Shared schemas (for validation)
└── package.json             # Frontend dependencies only
```

## Key Features

### Authentication Simulation
- Login form with email/password validation
- Simulated JWT token storage in localStorage
- Protected route middleware
- Logout functionality

### Batch Processing Form
- Three required fields with validation:
  - % of old patients to target (0-100)
  - Import Setup ID (positive integer)
  - Hourly Batch Count (1-100)
- Real-time form validation
- Success/error feedback via toast notifications

### UI Components
- Professional design with shadcn/ui
- Responsive layout
- Loading states and animations
- Form validation with error messages

## Technology Stack

- **React 18** with TypeScript
- **Vite** for development and building
- **Wouter** for client-side routing
- **TanStack Query** for state management
- **React Hook Form** + **Zod** for form handling
- **Tailwind CSS** + **shadcn/ui** for styling
- **Lucide React** for icons

## Development

The app runs entirely in the browser with no backend dependencies. All authentication and batch processing is simulated with JavaScript functions that mimic API responses.

## Deployment

Build the frontend for production:

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment to any static hosting service.