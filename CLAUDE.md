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
- Firestore operations: `addDoc` (create), `updateDoc` (edit), `getDocs` (read)

### State Management

All state is managed in the App component using React hooks:
- Authentication: `user`, `email`, `password`
- Prompts: `prompts` array, `isLoaded` flag
- Filtering: `searchQuery`, `filterCategory`, `filterPlatform`
- Form inputs: `newPrompt`, `newImage`, `newCategory`, `newPlatform`
- Edit state: `editingId`, `editText`, `editCategory`, `editPlatform`, `editImage`, `editImageUrl`
- UI state: `previewImage`

### Key Categories and Platforms

**Categories**: Scenery, Emote, Character, Seasonal, Marketing, Wedding, Horror, Food, Nursery, Other

**Platforms**: ChatGPT, Midjourney, Bing, Gemini, Grok

## Deployment Configuration

- **GitHub Pages**: Configured with base path `/promptlibrary/` in `vite.config.js`
- **Homepage**: `https://mikecinchan.github.io/promptlibrary`
- Uses `gh-pages` package for automated deployment

## Features

### Prompt Management
- **Create**: Only authenticated users can add new prompts with optional images
- **Read**: All users can view, search, and filter prompts
- **Update**: Authenticated users can edit existing prompts (text, category, platform, images)
  - Edit mode toggles inline on prompt cards
  - Images can be added, changed, or removed during editing
  - Changes saved to Firestore via `updateDoc`
- **Search & Filter**: Real-time filtering by search query, category, and platform

### Edit Functionality
When a user clicks "Edit" on a prompt card:
- Card switches to edit mode with inline form
- Can modify prompt text via textarea
- Can change category and platform via dropdowns
- Can add/change/remove images:
  - "Remove" button appears on existing images
  - "Add Image" or "Change Image" button for file selection
  - New images uploaded to Firebase Storage before updating document
- "Save" commits changes to Firestore and updates local state
- "Cancel" discards changes and returns to view mode

## Important Notes

- Only authenticated users can add or edit prompts; all users can view and search
- Edit button only appears on prompt cards when user is logged in
- Images are uploaded to Firebase Storage before prompt creation/update
- Prompts are fetched once on mount and sorted by `createdAt` descending
- The app uses optimistic UI updates when adding new prompts
- Edit updates apply immediately to both Firestore and local state
- Firebase config contains public API keys (normal for client-side Firebase apps)
