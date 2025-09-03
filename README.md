# Helmart Joyería - Unified Navbar System

## Overview
This project now uses a unified navbar system that works across all HTML pages. The navbar is loaded dynamically using JavaScript, ensuring consistency and easy maintenance.

## Files Structure

### Core Navbar Files
- **`navbar.html`** - Contains the HTML structure of the navbar
- **`navbar.js`** - JavaScript that loads the navbar and adds mobile functionality
- **`style.css`** - Contains all the navbar styling and responsive design

### HTML Pages
- **`index.html`** - Home page with collections and products
- **`servicios.html`** - Services page
- **`nosotros.html`** - About us page
- **`contacto.html`** - Contact page

## How It Works

1. **Dynamic Loading**: Each HTML page includes `navbar.js` which fetches the navbar HTML from `navbar.html`
2. **Automatic Insertion**: The navbar is automatically inserted at the beginning of each page's body
3. **Responsive Design**: The navbar automatically adapts to mobile devices with a hamburger menu
4. **Consistent Styling**: All navbar styles are defined in `style.css` and applied consistently

## Features

### Desktop Navigation
- Fixed position navbar with backdrop blur effect
- Smooth hover animations with underline effects
- Logo with gradient background
- Responsive container with proper spacing

### Mobile Navigation
- Hamburger menu button (☰) that appears on screens smaller than 768px
- Dropdown menu with smooth animations
- Touch-friendly navigation items
- Automatic menu closing when clicking outside

### Responsive Breakpoints
- **Desktop**: Full horizontal navigation
- **Tablet**: Adjusted spacing and sizing
- **Mobile**: Hamburger menu with vertical navigation

## Customization

### Adding New Navigation Items
To add new navigation items, edit `navbar.html`:

```html
<ul class="nav-menu">
    <li><a href="index.html#colecciones">Colecciones</a></li>
    <li><a href="index.html#productos">Productos</a></li>
    <li><a href="servicios.html">Servicios</a></li>
    <li><a href="nosotros.html">Nosotros</a></li>
    <li><a href="contacto.html">Contactar</a></li>
    <!-- Add new items here -->
    <li><a href="new-page.html">New Page</a></li>
</ul>
```

### Styling Changes
All navbar styling is in `style.css`. Key classes:
- `.navbar` - Main navbar container
- `.nav-container` - Inner container for content
- `.logo` - Logo section
- `.nav-menu` - Navigation menu list
- `.mobile-menu-btn` - Mobile menu button

### Adding New Pages
To add a new page with the navbar:

1. Create your HTML file
2. Add `<script src="navbar.js"></script>` before the closing `</body>` tag
3. The navbar will automatically load

## Browser Compatibility
- Modern browsers with ES6+ support
- Mobile browsers (iOS Safari, Chrome Mobile)
- Desktop browsers (Chrome, Firefox, Safari, Edge)

## Performance
- Navbar loads asynchronously
- Minimal impact on page load times
- Efficient event handling for mobile menu
- Smooth animations with CSS transitions

## Maintenance
- **Single Source of Truth**: Navbar HTML is in one file (`navbar.html`)
- **Easy Updates**: Change navbar once, updates everywhere
- **Consistent Behavior**: All pages use the same navbar logic
- **Responsive by Default**: No need to update individual pages for mobile changes
