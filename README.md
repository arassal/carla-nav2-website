# CARLA Nav2 Professional Website

Professional presentation website for the CARLA + ROS2 Navigation Stack project.

## Overview

This is a standalone, easy-to-update website designed to showcase your autonomous navigation research project. It pulls content from simple data files, making updates quick and painless.

## Features

✅ **Professional Design**
- Modern, responsive layout
- Dark theme optimized for tech projects
- Smooth animations and interactions

✅ **Easy Content Management**
- Update project information in `data.js`
- Add new updates in seconds
- No build process required

✅ **Integration Ready**
- Links to GitHub repository
- Team member profiles
- Performance metrics display
- Capability showcase

✅ **Mobile Friendly**
- Responsive across all devices
- Touch-optimized navigation
- Fast loading

## File Structure

```
carla-nav2-website/
├── index.html          # Main website structure
├── styles.css          # Professional styling (1000+ lines)
├── script.js           # Dynamic functionality
├── data.js             # Easy-to-update content
└── README.md           # This file
```

## How to Update

### 1. Add Project Updates

Open `data.js` and add to the `projectUpdates` array:

```javascript
{
    date: "June 26, 2026",
    title: "New Feature Released",
    description: "Description of what was accomplished..."
}
```

Updates appear on the Updates section automatically.

### 2. Update Team Information

Edit `teamInfo` object in `data.js`:

```javascript
const teamInfo = {
    leader: {
        name: "Your Name",
        github: "username",
        // ... rest of fields
    },
    mentees: [
        // Add mentee objects here
    ]
};
```

### 3. Update Performance Metrics

Edit `performanceMetrics` object:

```javascript
const performanceMetrics = {
    controlLoop: {
        value: "20",
        unit: "Hz",
        description: "Deterministic control cycle"
    }
    // ... other metrics
};
```

### 4. Add New Capabilities

Add to `capabilities` array:

```javascript
{
    icon: "📊",
    title: "New Capability",
    description: "Description here",
    features: ["Feature 1", "Feature 2", "Feature 3"]
}
```

### 5. Update Validation Status

Modify `validationStatus` object:

```javascript
const validationStatus = {
    newSystem: {
        name: "System Name",
        items: [
            "Validation item 1",
            "Validation item 2"
        ]
    }
};
```

### 6. Add Images

Place images in the website directory and reference them:

```html
<img src="your-image.png" alt="Description">
```

The website automatically pulls diagrams from GitHub:

```html
<img src="https://raw.githubusercontent.com/arassal/carla-nav2-avl/main/assets/architecture-advanced.svg" alt="Architecture">
```

## Deployment Options

### Option 1: GitHub Pages (Free, Recommended)

1. Create a new repository: `carla-nav2-website`
2. Upload these files to `main` branch
3. Go to Settings → Pages → Select "main" branch as source
4. Your site will be live at `https://yourusername.github.io/carla-nav2-website`

### Option 2: Netlify (Free)

1. Connect your GitHub repository
2. Auto-deploys on every push
3. Custom domain support

### Option 3: Self-hosted

1. Upload files to your web server
2. No build process needed
3. Works with any static hosting

### Option 4: Local Development

```bash
# Install simple server (optional)
python -m http.server 8000

# Open in browser
# http://localhost:8000
```

## Customization

### Change Colors

Edit CSS variables in `styles.css`:

```css
:root {
    --primary: #00d9ff;    /* Primary cyan */
    --secondary: #00ff88;  /* Secondary green */
    --accent: #ff6b9d;     /* Accent pink */
    --warning: #ffa500;    /* Warning orange */
    /* ... other colors */
}
```

### Change Fonts

In `styles.css`:

```css
body {
    font-family: 'Your Font', sans-serif;
}
```

### Add Navigation Links

Edit the navbar in `index.html`:

```html
<ul class="nav-links">
    <li><a href="#home">Home</a></li>
    <li><a href="#your-section">Your Section</a></li>
</ul>
```

## Update Workflow

### Quick Update Process

1. Make changes to `data.js`
2. Refresh browser
3. Content updates automatically
4. Test on mobile
5. Commit and push (if using GitHub)

### Adding New Sections

1. Add section to `index.html`
2. Style with CSS (reference existing styles)
3. Load data in `script.js`
4. Add data to `data.js`

## Performance Tips

- Keep image sizes optimized (use SVG for diagrams)
- Minimize CSS and JS for production
- Use lazy loading for heavy images
- Cache assets locally

## Browser Support

- Chrome/Chromium ✓
- Firefox ✓
- Safari ✓
- Edge ✓
- Mobile browsers ✓

## Analytics (Optional)

Add Google Analytics to `index.html` `<head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_ID');
</script>
```

## SEO Optimization

Edit meta tags in `index.html`:

```html
<meta name="description" content="Your project description...">
<meta name="keywords" content="CARLA, ROS2, autonomous driving, ...">
<meta name="author" content="AVL Mentor Team">
```

## Troubleshooting

**Updates not showing?**
- Check browser cache (Ctrl+F5)
- Verify `data.js` syntax is correct
- Check browser console for errors

**Images not loading?**
- Verify image paths are correct
- Check GitHub URLs are accessible
- Ensure images are in correct format

**Styling issues?**
- Clear browser cache
- Check CSS syntax in browser DevTools
- Verify no conflicting CSS

## Maintenance

### Regular Tasks

- [ ] Update project updates monthly
- [ ] Check performance metrics
- [ ] Update team information if changes
- [ ] Test on mobile devices
- [ ] Verify all links work
- [ ] Check for broken images

### Monthly Checklist

- Update `projectUpdates` with progress
- Verify metrics are current
- Check validation status
- Update team information if needed

## Future Enhancements

Potential additions:

- [ ] Blog section for longer articles
- [ ] Search functionality
- [ ] Dark/Light mode toggle
- [ ] Multi-language support
- [ ] Comments/feedback form
- [ ] Video embeds
- [ ] Download resources (PDFs, slides)
- [ ] News feed integration

## Support & Questions

For website customization questions:

1. Check this README
2. Review `data.js` comments
3. Check GitHub repository
4. Review HTML/CSS structure

## License

Website code: Open source
Project: See https://github.com/arassal/carla-nav2-avl

---

**Ready to update?** Edit `data.js` and refresh your browser! 🚀
