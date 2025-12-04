# Resume V2 - Modular Portfolio Website

A modern, modular resume website showcasing multiple professional roles with role-switching capability.

## 🚀 Features

- **Role Switching**: Toggle between Salesforce Developer, Data Scientist, and Full Stack Developer roles
- **Dark/Light Mode**: Theme toggle with localStorage persistence
- **Modular Architecture**: ES6 modules with component-based structure
- **Responsive Design**: Mobile-first, works on all devices
- **Smooth Animations**: Fade-in effects and smooth transitions
- **Modern UI**: Clean, professional design with CSS custom properties

## 📁 Project Structure

```
Resume_V2/
├── index.html                 # Main HTML file
├── css/
│   ├── main.css              # Global styles & CSS variables
│   └── components/           # Component-specific styles
│       ├── header.css
│       ├── sidebar.css
│       ├── experience.css
│       ├── projects.css
│       └── skills.css
├── js/
│   ├── main.js               # Application entry point
│   ├── components/           # Reusable UI components
│   │   ├── Sidebar.js
│   │   ├── Experience.js
│   │   ├── Projects.js
│   │   ├── Skills.js
│   │   ├── Certifications.js
│   │   └── Education.js
│   └── utils/                # Utility modules
│       ├── stateManager.js   # State management
│       └── dataLoader.js     # Data loading
├── data/                     # JSON data files
│   ├── salesforce.json       # Salesforce role data
│   ├── datascience.json      # Data Science role data
│   ├── fullstack.json        # Full Stack role data
│   └── shared.json           # Shared data (education, contact)
└── assets/
    └── images/
        └── profile.png       # Profile picture
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Custom properties, Grid, Flexbox
- **JavaScript ES6+**: Modules, async/await, classes
- **Font Awesome**: Icons
- **Google Fonts**: Inter & Fira Code

## 🎨 Design Features

### CSS Architecture
- CSS Custom Properties (CSS Variables) for theming
- Component-based CSS modules
- Responsive breakpoints for mobile, tablet, desktop
- Dark/light mode support
- Smooth transitions and animations

### JavaScript Architecture
- **ES6 Modules**: Clean separation of concerns
- **State Management**: Centralized state with StateManager
- **Data Loading**: Async data fetching with DataLoader
- **Component System**: Reusable render functions
- **Event Handling**: Delegated event listeners

## 📊 Role-Specific Content

### Salesforce Developer
- 8 certifications
- 3 superbadges
- Salesforce-specific projects and experience
- Focus on Apex, LWC, and Salesforce clouds

### Data Scientist
- Machine Learning projects
- Statistical analysis experience
- Python, R, and ML frameworks
- MSc Data Science background

### Full Stack Developer
- MERN stack projects
- Frontend and backend experience
- Modern JavaScript frameworks
- DevOps and deployment skills

## 🚦 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/ashwin2695/ashwin2695.github.io.git
   ```

2. **Navigate to Resume_V2**
   ```bash
   cd Resume_V2
   ```

3. **Open with a local server**
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx http-server
   
   # Using VS Code Live Server extension
   Right-click index.html > Open with Live Server
   ```

4. **View in browser**
   Open `http://localhost:8000`

## 📝 Customization

### Update Content
Edit the JSON files in the `data/` folder:
- `salesforce.json` - Salesforce role content
- `datascience.json` - Data Science role content
- `fullstack.json` - Full Stack role content
- `shared.json` - Contact info, education, etc.

### Update Styling
Edit CSS files in `css/` folder:
- `main.css` - Global styles and CSS variables
- `css/components/` - Component-specific styles

### Add New Components
1. Create component file in `js/components/`
2. Export render function
3. Import in `main.js`
4. Call in render method

## 🎯 Future Enhancements

- [ ] Add project screenshots/images
- [ ] Implement print-friendly version
- [ ] Add contact form
- [ ] GitHub integration for live project data
- [ ] Blog integration
- [ ] Analytics tracking
- [ ] Accessibility improvements (WCAG compliance)

## 📄 License

© 2025 Ashwin Dilip Adhav. All rights reserved.

## 🤝 Contributing

This is a personal portfolio project. Feel free to fork and customize for your own use!

---

**Built with ❤️ using modern web technologies**
