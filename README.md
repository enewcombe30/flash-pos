# Flash-POS Frontend

> Modern React-based Point-of-Sale interface built with TypeScript, Redux Toolkit, and React Query for seamless restaurant order management.

[![React](https://img.shields.io/badge/React-19.0-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF.svg)](https://vitejs.dev/)
[![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-2.x-764ABC.svg)](https://redux-toolkit.js.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.x-38B2AC.svg)](https://tailwindcss.com/)

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [State Management](#state-management)
- [Component Documentation](#component-documentation)
- [Testing](#testing)
- [Building for Production](#building-for-production)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Overview

Flash-POS Frontend is a modern, responsive Point-of-Sale interface designed for restaurant environments. Built with React 19 and TypeScript, it provides an intuitive touch-friendly interface for order management, recipe display, ingredient tracking, and allergen information management.

The application leverages Redux Toolkit for state management, React Query for efficient server state synchronization, and Framer Motion for smooth animations, creating a seamless user experience for restaurant staff.

## Features

### Core Functionality

- **Order Management**: Create, edit, and manage customer orders in real-time
- **Recipe Display**: Browse and view detailed recipe information with ingredients
- **Ingredient Management**: Track ingredients with allergen and dietary information
- **Interactive Keyboard**: Virtual keyboard support for quick text input
- **Number Pad**: Custom number pad for efficient numeric entry
- **Product Modals**: Comprehensive product editing and customization interfaces

### User Experience

- **Touch-Optimized**: Designed for tablet and touchscreen devices
- **Responsive Design**: Works seamlessly across different screen sizes
- **Dark Mode Support**: Eye-friendly interface for various lighting conditions
- **Animations**: Smooth transitions with Framer Motion
- **Accessibility**: Built with accessibility best practices

### Technical Features

- **Type Safety**: Full TypeScript implementation
- **State Management**: Redux Toolkit with typed hooks
- **Server State**: React Query for efficient data fetching and caching
- **Hot Module Replacement**: Instant updates during development with Vite
- **Code Quality**: ESLint configuration with React-specific rules

## Tech Stack

### Core

- **React** 19.0 - UI library
- **TypeScript** 5.x - Type-safe JavaScript
- **Vite** 6.x - Build tool and dev server

### State Management

- **Redux Toolkit** 2.x - Application state management
- **React Query** 5.x - Server state management

### Styling

- **TailwindCSS** 3.x - Utility-first CSS framework
- **Framer Motion** 12.x - Animation library

### UI Components

- **React Simple Keyboard** - Virtual keyboard component

### Testing

- **Jest** 30.x - Testing framework
- **React Testing Library** - Component testing utilities

### Development Tools

- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18.0.0 or higher)
- **npm** (v9.0.0 or higher)
- **Git**
- **Backend API** running (see Backend README)

## Installation

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/flash-pos.git
cd flash-pos/POS
```

2. **Install dependencies**

```bash
npm install
```

## Configuration

Create a `.env` file in the POS root directory with the following variables:

```env
# API Configuration
VITE_API_BASE_URL=http://localhost:5001/api

# Application Configuration
VITE_APP_NAME=Flash-POS
VITE_APP_VERSION=1.0.0

# Feature Flags (optional)
VITE_ENABLE_DEV_TOOLS=true
```

**Note**: All Vite environment variables must be prefixed with `VITE_` to be exposed to the application.

## Running the Application

### Development Mode

Start the development server with hot reload:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Preview Production Build

Build and preview the production version locally:

```bash
npm run build
npm run preview
```

### Linting

Run ESLint to check code quality:

```bash
npm run lint
```

### Testing

Run the test suite:

```bash
npm test
```

## Project Structure

```
POS/
├── public/
│   └── images/              # Static images and assets
├── src/
│   ├── api/
│   │   └── getRecipeRequests.ts  # API request functions
│   ├── assets/                   # Images, fonts, etc.
│   ├── components/
│   │   ├── Button.tsx            # Reusable button component
│   │   ├── Counter.tsx           # Counter component
│   │   ├── RecipeList.tsx        # Recipe list display
│   │   ├── EditModal/            # Product editing modals
│   │   │   ├── ProductModal.tsx
│   │   │   ├── useProductModal.tsx
│   │   │   ├── AllergyModal/
│   │   │   ├── EditProductModal/
│   │   │   ├── IngredientModal/
│   │   │   ├── NoteModal/
│   │   │   └── ProductList/
│   │   ├── Keyboard/             # Virtual keyboard
│   │   ├── NumberPad/            # Number pad component
│   │   ├── OrderPad/             # Order management
│   │   ├── ProductComponent/     # Product display
│   │   └── SideBar/              # Navigation sidebar
│   ├── constants/
│   │   ├── allergies.ts          # Allergen definitions
│   │   ├── dummyData.ts          # Mock data for development
│   │   ├── editModalConstants.ts # Modal configuration
│   │   └── sidebarButtons.ts     # Sidebar configuration
│   ├── hooks/
│   │   └── useBackToLogin.ts     # Custom hooks
│   ├── pages/
│   │   ├── login/                # Login page
│   │   └── mainPage/             # Main POS interface
│   ├── state/
│   │   ├── store.ts              # Redux store configuration
│   │   ├── counter/              # Counter slice
│   │   ├── keyboard/             # Keyboard state slice
│   │   ├── login/                # Auth state slice
│   │   ├── modal/                # Modal state slice
│   │   ├── numberPad/            # Number pad state slice
│   │   └── orders/               # Order state slice
│   ├── svgs/
│   │   ├── CheckIcon.tsx         # SVG components
│   │   ├── ThumbsUp.tsx
│   │   └── TrashCan.tsx
│   ├── types/
│   │   ├── allergyTypes.ts       # Type definitions
│   │   ├── dummyDataTypes.ts
│   │   ├── orderTypes.ts
│   │   └── recipeTypes.ts
│   ├── App.tsx                   # Root component
│   ├── App.css                   # App-level styles
│   ├── main.tsx                  # Application entry point
│   └── index.css                 # Global styles
├── .eslintrc.config.js           # ESLint configuration
├── jest.config.cjs               # Jest configuration
├── postcss.config.cjs            # PostCSS configuration
├── tailwind.config.js            # Tailwind configuration
├── tsconfig.json                 # TypeScript configuration
├── vite.config.ts                # Vite configuration
└── package.json                  # Dependencies and scripts
```

## State Management

### Redux Store Structure

The application uses Redux Toolkit with the following slices:

- **counter**: Example counter state (can be removed in production)
- **keyboard**: Virtual keyboard state and visibility
- **login**: Authentication and user session state
- **modal**: Modal visibility and content management
- **numberPad**: Number pad state and input handling
- **orders**: Order management and line item tracking

### React Query

React Query is used for:

- Fetching recipes from the backend
- Caching server data
- Automatic background refetching
- Optimistic updates

Example usage:

```typescript
import { useQuery } from "@tanstack/react-query";
import { getRecipes } from "@/api/getRecipeRequests";

const { data, isLoading, error } = useQuery({
  queryKey: ["recipes"],
  queryFn: getRecipes,
});
```

## Component Documentation

### Core Components

#### Button

Reusable button component with variants and sizes.

```typescript
<Button variant="primary" size="md" onClick={handleClick}>
  Click Me
</Button>
```

#### NumberPad

Custom number pad for numeric input with backspace and clear functionality.

#### Keyboard

Virtual keyboard component for text input, integrated with Redux state.

#### EditModal

Complex modal system for editing products, ingredients, allergens, and notes.

### Custom Hooks

#### useProductModal

Manages product modal state and operations.

#### useBackToLogin

Handles navigation back to the login screen.

## Testing

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run tests with coverage
npm test -- --coverage
```

### Testing Structure

- Unit tests: Component logic and utilities
- Integration tests: Component interactions
- Test files: Located alongside components with `.test.ts` or `.test.tsx` extension

Example test:

```typescript
import { render, screen } from "@testing-library/react";
import Button from "./Button";

test("renders button with text", () => {
  render(<Button>Click me</Button>);
  expect(screen.getByText("Click me")).toBeInTheDocument();
});
```

## Building for Production

### Create Production Build

```bash
npm run build
```

This generates optimized static files in the `dist/` directory.

### Build Optimization

Vite automatically:

- Minifies JavaScript and CSS
- Optimizes images and assets
- Generates source maps
- Code splits for optimal loading
- Tree-shakes unused code

## Deployment

### Deployment Platforms

#### Vercel

```bash
npm install -g vercel
vercel
```

#### Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

#### Traditional Hosting

Upload the contents of the `dist/` directory to your web server.

### Environment Variables

Ensure production environment variables are set:

```env
VITE_API_BASE_URL=https://api.yourdomain.com/api
VITE_APP_NAME=Flash-POS
VITE_ENABLE_DEV_TOOLS=false
```

## Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style
- Write TypeScript with proper types (avoid `any`)
- Add tests for new features
- Update documentation as needed
- Use meaningful commit messages
- Ensure ESLint passes before committing

### Code Style

- Use functional components with hooks
- Prefer `const` over `let`
- Use arrow functions for callbacks
- Destructure props and state
- Keep components small and focused

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## Roadmap

- [ ] User authentication and role management
- [ ] Offline mode with service workers
- [ ] Print receipt functionality
- [ ] Multi-language support (i18n)
- [ ] Advanced order history and analytics
- [ ] Split payment functionality
- [ ] Table management system
- [ ] Kitchen display system integration
- [ ] Customer-facing display
- [ ] Mobile app version (React Native)

## Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Lighthouse score: 90+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Bundle size: < 500KB (gzipped)

## Support

For questions or issues:

- Open an issue on GitHub
- Contact: support@flash-pos.com
- Documentation: [docs.flash-pos.com](https://docs.flash-pos.com)

---

**Built with ❤️ by the Flash-POS Team**
