# 🚀 Itz-Zaib Portfolio Website

A modern, professional portfolio website built with Angular 20, featuring a dark theme with neon accents, smooth animations, and GitHub integration.

## ✨ Features

- **🎨 Modern Design**: Dark theme with neon purple/blue/green accents
- **📱 Responsive**: Mobile-first design for all devices
- **⚡ Smooth Animations**: Angular animations with fade/slide effects
- **🔗 GitHub Integration**: Automatically fetches your repositories
- **📝 Editable Content**: Easy-to-update JSON configuration
- **🎯 Professional Layout**: Perfect for hiring managers and recruiters

## 🛠️ Tech Stack

- **Frontend**: Angular 20 + TypeScript
- **Styling**: SCSS with CSS Variables
- **Animations**: Angular Animations
- **Icons**: Font Awesome 6
- **Fonts**: Helvetica Neue
- **Deployment**: Ready for GitHub Pages/Vercel

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd my-angular-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:4200`

## 📝 Customization Guide

### 1. Personal Information
Edit `src/app/data/portfolio-data.ts`:

```typescript
export const PORTFOLIO_CONFIG = {
  personal: {
    name: 'Your Name',
    title: 'Your Title',
    tagline: 'Your tagline',
    bio: 'Your bio...',
    github: 'https://github.com/yourusername',
    email: 'your.email@domain.com',
    linkedin: 'https://linkedin.com/in/yourprofile'
  }
};
```

### 2. Skills
Update the `SKILLS` array in the same file:

```typescript
export const SKILLS: Skill[] = [
  { name: 'Angular', icon: 'fab fa-angular', category: 'frontend' },
  { name: 'React', icon: 'fab fa-react', category: 'frontend' },
  // Add your skills...
];
```

### 3. Work Experience
Modify the `WORK_EXPERIENCE` array:

```typescript
export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    title: 'Your Job Title',
    company: 'Company Name',
    period: '2023 - Present',
    description: 'Job description...',
    technologies: ['Angular', 'TypeScript', 'Node.js']
  }
];
```

### 4. GitHub Integration
Update the GitHub username in `src/app/services/github.service.ts`:

```typescript
private readonly USERNAME = 'your-github-username';
```

### 5. Colors & Theme
Customize colors in `src/app/app.scss`:

```scss
:root {
  --neon-purple: #your-purple-color;
  --neon-blue: #your-blue-color;
  --neon-green: #your-green-color;
}
```

## 🎨 Design Features

### Color Scheme
- **Primary Background**: Deep black (#0a0a0a)
- **Secondary Background**: Dark gray (#111111)
- **Neon Accents**: Purple (#8b5cf6), Blue (#3b82f6), Green (#10b981)
- **Text**: White, light gray, and muted gray

### Typography
- **Primary Font**: Helvetica Neue
- **Fallback**: System fonts (San Francisco, Segoe UI, etc.)
- **Code Font**: Monaco/Menlo for code snippets

### Animations
- **Fade In**: Elements appear with smooth fade-in effects
- **Slide Animations**: Content slides in from left/right
- **Hover Effects**: Interactive elements with neon glows
- **Floating Blobs**: Animated background elements

## 📱 Responsive Breakpoints

- **Desktop**: 1024px+
- **Tablet**: 768px - 1023px
- **Mobile**: 320px - 767px

## 🚀 Deployment

### GitHub Pages
This repo includes a GitHub Actions workflow that builds and deploys automatically.

1. Push the project to a GitHub repository (branch: `main`)
2. In GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**
3. Push any commit to `main` (or run the workflow manually via **Actions**)

Your site will be available at:
- `https://<username>.github.io/Portfolio/`

### Vercel
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Angular
3. Deploy with zero configuration

### Netlify
1. Build: `npm run build`
2. Drag and drop the `dist` folder to Netlify
3. Configure custom domain if needed

## 🔧 Build Commands

```bash
# Development
npm start          # Start dev server
npm run build     # Build for production
npm run watch     # Build and watch for changes
npm test          # Run tests

# Production
npm run build     # Creates dist/ folder
```

## 📁 Project Structure

```
src/
├── app/
│   ├── data/           # Portfolio configuration
│   ├── services/       # GitHub API service
│   ├── app.ts         # Main component
│   ├── app.html       # Portfolio template
│   ├── app.scss       # Styles
│   └── app.config.ts  # App configuration
├── main.ts            # Bootstrap file
└── styles.scss        # Global styles
```

## 🌟 Key Components

### Hero Section
- Animated title with gradient text
- Call-to-action buttons
- Code window with syntax highlighting
- Floating animated blobs

### About Section
- Profile picture placeholder
- Editable bio
- Skills grid with hover effects

### Projects Section
- GitHub repository integration
- Search and filter functionality
- Project cards with stats
- Technology tags

### Experience Section
- Timeline layout
- Job details with technologies
- Responsive design

### Contact Section
- Contact form with validation
- Social media links
- Professional layout

## 🎯 SEO & Performance

- **Meta Tags**: Optimized for search engines
- **Performance**: Lazy loading and optimized images
- **Accessibility**: ARIA labels and semantic HTML
- **Mobile**: Touch-friendly interface

## 🔒 Security

- **XSS Protection**: Angular's built-in sanitization
- **CSRF Protection**: Form validation
- **HTTPS Ready**: Secure deployment ready

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

If you need help or have questions:
- Create an issue on GitHub
- Check the documentation
- Review the code comments

## 🎉 Acknowledgments

- **Angular Team**: For the amazing framework
- **Font Awesome**: For the beautiful icons
- **Google Fonts**: For Helvetica Neue
- **CSS Grid & Flexbox**: For modern layouts

---

**Built with ❤️ and Angular 20**

*Ready to showcase your skills and get hired! 🚀*
