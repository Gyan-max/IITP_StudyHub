# IITP StudyHub Frontend

A modern, responsive web application built with React, Vite, and Tailwind CSS for IIT Patna students.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/       # Reusable UI components
├── pages/           # Page components
├── utils/           # Utility functions and constants
├── services/        # API service layer (to be implemented)
├── context/         # React Context providers
├── hooks/           # Custom React hooks
├── assets/          # Static assets (images, icons)
├── App.jsx          # Main application component
├── main.jsx         # Application entry point
└── index.css        # Global styles with Tailwind
```

## 🎨 Tech Stack

- **React 18** - UI Library
- **Vite** - Build Tool & Dev Server
- **React Router v6** - Client-side routing
- **Tailwind CSS v3** - Utility-first CSS framework
- **Lucide React** - Icon library

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🔧 Configuration

### Tailwind CSS
Custom colors and theme configuration in `tailwind.config.js`

### Vite
Build and dev server configuration in `vite.config.js`

## 🌐 Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_URL=your_api_url
VITE_FIREBASE_API_KEY=your_firebase_key
```

## 📝 Code Style

- Use functional components with hooks
- Follow React best practices
- Use Tailwind utility classes for styling
- Keep components small and reusable

## 🤝 Contributing

1. Follow the existing code structure
2. Write clean, readable code
3. Test your changes thoroughly
4. Create meaningful commit messages

## 📄 License

This project is for IIT Patna students only.
