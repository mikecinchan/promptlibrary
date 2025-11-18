# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React + Vite application for managing and sharing AI prompts (primarily Midjourney prompts). It uses Firebase for authentication, data storage (Firestore), and image hosting (Storage). The app is deployed to GitHub Pages.

## Development Commands

- `npm run dev` - Start development server with hot module replacement
- `npm run build` - Build for production (outputs to `dist/`)
- `npm run lint` - Run ESLint on the codebase
- `npm run preview` - Preview production build locally
- `npm run deploy` - Deploy to GitHub Pages (runs `predeploy` automatically)

## Tech Stack

- **React 19** with hooks (useState, useEffect)
- **Vite 7** for build tooling and dev server
- **Tailwind CSS 4** for styling (PostCSS-based)
- **Firebase 11** for:
  - Authentication (email/password)
  - Firestore database (prompts collection)
  - Storage (prompt images)

## Architecture

### File Structure

- `src/App.jsx` - Main application component containing all UI and business logic
- `src/Firebase.js` - Firebase initialization and service exports (db, storage, auth)
- `src/main.jsx` - React application entry point
- `index.html` - HTML entry point with Vite script injection

### Firebase Integration

**Import Pattern**: The app imports from `./firebase` (lowercase) in App.jsx but the actual file is `Firebase.js` (capitalized). This works on case-insensitive filesystems but may cause issues on case-sensitive systems.

**Services Used**:
- Firestore collection: `prompts` with fields: `text`, `category`, `platform`, `imageUrl`, `createdAt`
- Storage path: `prompt-images/{timestamp}-{filename}`
- Auth: Email/password authentication

### State Management

All state is managed in the App component using React hooks:
- Authentication: `user`, `email`, `password`
- Prompts: `prompts` array, `isLoaded` flag
- Filtering: `searchQuery`, `filterCategory`, `filterPlatform`
- Form inputs: `newPrompt`, `newImage`, `newCategory`, `newPlatform`
- UI state: `previewImage`

### Key Categories and Platforms

**Categories**: Scenery, Emote, Character, Seasonal, Marketing, Wedding, Horror, Food, Nursery, Other

**Platforms**: ChatGPT, Midjourney, Bing, Gemini

## Deployment Configuration

- **GitHub Pages**: Configured with base path `/promptlibrary/` in `vite.config.js`
- **Homepage**: `https://mikecinchan.github.io/promptlibrary`
- Uses `gh-pages` package for automated deployment

## Important Notes

- Only authenticated users can add prompts; all users can view and search
- Images are uploaded to Firebase Storage before prompt creation
- Prompts are fetched once on mount and sorted by `createdAt` descending
- The app uses optimistic UI updates when adding new prompts
- Firebase config contains public API keys (normal for client-side Firebase apps)
