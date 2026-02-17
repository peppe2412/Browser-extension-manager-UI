## Project Overview

This is a **Browser Extensions Manager UI**—an interactive dashboard for managing browser extensions. You can toggle extensions between active/inactive states, filter them by status, remove them from the list, switch between light and dark themes, and enjoy a responsive design that works on all devices.

## Features Implemented

### ✅ Core Functionality
- **Toggle Extensions**: Click the checkbox on any extension to activate or deactivate it
- **Filter System**: Use the "All", "Active", and "Inactive" buttons to filter extensions
- **Persistent State**: Extension statuses are saved to localStorage and persist across sessions
- **Theme Switching**: Toggle between light and dark modes with the sun/moon button in the header
- **Responsive Design**: Optimized layout for both desktop (3-column grid) and mobile (1-column) views

### ✅ Technical Implementation
- **Dynamic Data Loading**: Extensions data loaded from `data.json` via fetch API
- **Theme Management**: CSS custom properties (variables) for seamless theme switching
- **DOM Manipulation**: JavaScript handles filtering, state management, and UI updates
- **Local Storage**: Active/inactive states persisted in browser storage

## Project Structure

```
browser-extensions-manager-ui/
├── index.html          # Main HTML structure
├── style.css           # All styling (light/dark themes)
├── main.js             # Core functionality (filtering, checkboxes, data management)
├── theme.js            # Theme switching logic
├── data.json           # Extension data source
├── assets/
│   ├── images/         # Logos, icons (sun, moon, logo)
│   └── fonts/          # NotoSans Regular & Bold fonts
├── AGENTS.md           # AI assistant guidelines
└── CLAUDE.md           # Claude tool pointer
```

## How to Use

1. **Open the app** in your browser
2. **View extensions** in the grid layout
3. **Toggle status** by clicking the checkbox on each extension
4. **Filter by status** using the buttons at the top
5. **Switch themes** using the sun/moon button in the header
6. Your choices are automatically saved!

## Technologies Used

- **HTML5** - Semantic structure
- **CSS3** - Flexbox, Grid, CSS variables, media queries
- **Vanilla JavaScript** - DOM manipulation, event handling, localStorage
- **Fetch API** - Dynamic data loading

## Browser Support

Works on all modern browsers that support:
- CSS Custom Properties (CSS variables)
- ES6 JavaScript (arrow functions, template literals)
- Fetch API
- localStorage


# [Project online](https://peppe2412.github.io/Browser-extension-manager-UI/)
