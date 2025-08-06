# 🌿 Saaral Bakes - Artisan Bakery Website

A beautiful, nature-themed React website for Saaral Bakes, an artisan bakery located in Coimbatore, Tamil Nadu.

## ✨ Features

- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **Nature-Inspired UI** - Custom color palette with earth tones and green gradients
- **Interactive Elements** - Smooth scrolling, animations, and hover effects
- **Modern React** - Built with React 18 and functional components
- **SEO Optimized** - Meta tags and semantic HTML structure
- **Fast Loading** - Optimized assets and minimal dependencies

## 🎨 Design Elements

- **Monsoon Green** (#2D5F3F) - Primary brand color
- **Mist Green** (#7FB069) - Secondary brand color  
- **Morning Dew** (#E8F5E1) - Light accent color
- **Earth Brown** (#8B6F47) - Grounding accent color
- Beautiful gradients and natural animations
- Typography: Merriweather (headings) + Open Sans (body)

## 🚀 Local Development

### Prerequisites
- Node.js 16+ installed
- npm or yarn package manager

### Getting Started

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm start
   ```

3. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (irreversible)

## 🌐 Netlify Deployment

This project is configured for easy deployment on Netlify.

### Automatic Deployment (Recommended)

1. **Push to Git Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Connect to Netlify**
   - Go to [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Connect your Git repository
   - Build settings are automatically detected from `netlify.toml`

3. **Deploy Settings**
   - Build command: `npm run build` (auto-detected)
   - Publish directory: `build` (auto-detected)
   - Node version: 18 (configured in netlify.toml)

### Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy build folder**
   - Go to [Netlify](https://netlify.com)
   - Drag and drop the `build` folder to deploy

## 📁 Project Structure

```
saaral-bakes/
├── public/
│   ├── index.html          # Main HTML template
│   └── _redirects          # Netlify SPA routing
├── src/
│   ├── components/         # React components
│   │   ├── Navbar.js      # Navigation component
│   │   ├── Hero.js        # Hero section
│   │   ├── About.js       # About section
│   │   ├── Products.js    # Products showcase
│   │   ├── Location.js    # Location information
│   │   ├── Contact.js     # Contact form
│   │   ├── Footer.js      # Footer component
│   │   └── ScrollToTop.js # Scroll to top button
│   ├── App.js             # Main App component
│   ├── App.css            # Styles
│   └── index.js           # Entry point
├── netlify.toml           # Netlify configuration
├── package.json           # Dependencies and scripts
└── README.md             # This file
```

## 🏪 Business Information

- **Name**: Saaral Bakes
- **Location**: Gandhipuram, Coimbatore, Tamil Nadu
- **Speciality**: Artisan breads and natural baked goods
- **Philosophy**: Using organic, locally-sourced ingredients with traditional baking methods

## 🛠️ Technical Features

- React 18 with hooks (useState, useEffect)
- Responsive CSS Grid and Flexbox layouts
- Smooth scrolling navigation
- Intersection Observer for animations
- Form handling with validation
- Mobile-first design approach
- SEO-optimized structure

## 📱 Contact Integration

- Click-to-call phone numbers
- WhatsApp ordering support
- Contact form with validation
- Location with nearby landmarks

## 🌱 Sustainability Focus

The website emphasizes:
- Organic and locally-sourced ingredients
- Traditional baking methods
- Eco-friendly practices
- Connection to Coimbatore's agricultural heritage

---

Made with 💚 for Saaral Bakes, Coimbatore