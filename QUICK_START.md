# Quick Start Guide - Resume V2

## 🎯 What's Been Built

A modern, modular resume website with:
✅ **3 switchable roles**: Salesforce Developer, Data Scientist, Full Stack Developer
✅ **Dark/Light mode** with localStorage persistence  
✅ **Component-based architecture** using ES6 modules
✅ **Fully responsive** - mobile, tablet, desktop
✅ **Smooth animations** and professional UI

---

## 🚀 How to View Locally

### Option 1: Python HTTP Server (Recommended)
```bash
cd Resume_V2
python -m http.server 8000
```
Then open: `http://localhost:8000`

### Option 2: VS Code Live Server
1. Install "Live Server" extension in VS Code
2. Right-click `index.html`
3. Select "Open with Live Server"

### Option 3: Node.js HTTP Server
```bash
cd Resume_V2
npx http-server
```

---

## 📤 Deploying to GitHub Pages

### Step 1: Copy files to root (when ready)
```bash
# Move Resume_V2 contents to root for deployment
cd Resume_V2
Copy-Item * ..\ -Recurse -Force
```

### Step 2: Commit and push
```bash
git add .
git commit -m "Deploy Resume V2 - Modular architecture with role switching"
git push origin main
```

### Step 3: Visit your site
`https://ashwin2695.github.io/`

---

## 🎨 Customization Tips

### Update Your Data
Edit these JSON files in `data/` folder:
- **salesforce.json** - Your Salesforce experience & projects
- **datascience.json** - Your Data Science/ML work
- **fullstack.json** - Your Full Stack development projects
- **shared.json** - Contact info, education

### Change Colors
Edit `css/main.css` - look for `:root` section:
```css
:root {
    --primary-color: #0176D3;  /* Change main color */
    --secondary-color: #5B47FB;
    /* ... more colors */
}
```

### Add New Sections
1. Create component in `js/components/YourComponent.js`
2. Add render function
3. Import in `main.js`
4. Add to HTML and call in render()

---

## 🔧 Troubleshooting

### Issue: Page loads but content is blank
**Fix**: Open browser console (F12) and check for errors. Likely a JSON syntax error.

### Issue: CSS not loading properly
**Fix**: Check file paths in `index.html` - must be relative to index.html location.

### Issue: Role switching doesn't work
**Fix**: Make sure you're viewing via HTTP server, not directly opening file (file://)

### Issue: Profile image not showing
**Fix**: Update `shared.json` to point to correct image path, or add your image to `assets/images/`

---

## 📋 Features Breakdown

### Header
- Role toggle buttons (Salesforce/Data Science/Full Stack)
- Dark/light mode toggle
- Responsive mobile menu

### Sidebar
- Profile image with role badge
- Contact information
- Tools & technologies
- Core competencies
- Download resume button

### Main Content
- Professional summary
- Experience timeline
- Projects grid with icons
- Skills with progress bars
- Certifications grid
- Education

### Interactivity
- Smooth role transitions
- Fade-in animations
- Hover effects
- Theme persistence

---

## 🎓 Learning Resources

This resume demonstrates:
- **ES6 Modules** - Code organization
- **State Management** - Centralized data handling
- **Component Architecture** - Reusable UI components
- **CSS Variables** - Dynamic theming
- **Responsive Design** - Mobile-first approach
- **Async JavaScript** - Data loading with fetch
- **localStorage** - Saving user preferences

---

## 📸 Adding Project Screenshots

1. Add images to `assets/images/projects/`
2. Update project data in JSON files:
```json
{
  "title": "My Project",
  "image": "assets/images/projects/myproject.png",
  ...
}
```

---

## 🌐 Next Steps

1. ✅ **Review content** - Check all three roles for accuracy
2. ✅ **Add real projects** - Update with your actual projects  
3. ✅ **Update images** - Add project screenshots, better profile pic
4. ✅ **Test mobile** - Check on real mobile devices
5. ✅ **SEO** - Add meta tags for better search visibility
6. ✅ **Analytics** - Add Google Analytics (optional)
7. ✅ **Deploy** - Push to GitHub Pages

---

## 💡 Pro Tips

- **Keep data updated**: Regularly update JSON files with new projects/skills
- **Use consistent styling**: Follow the established design patterns
- **Test before deploy**: Always test locally before pushing to production
- **Mobile first**: Always check mobile view - most visitors will be on mobile
- **Accessibility**: Use semantic HTML and ARIA labels (already included)

---

**Need help?** Check the README.md for more detailed documentation!
