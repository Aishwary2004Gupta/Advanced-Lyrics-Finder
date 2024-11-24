# 🎵 Advanced-Lyrics-Finder

A beautiful, modern web application for searching and discovering song lyrics. Built with React, Firebase Authentication, and the Genius API.

![LyricsFinder Preview](https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80&w=1200&h=400)

## ✨ Features

- 🔐 Secure user authentication (signup/login)
- 🔍 Search songs by title or artist
- 📱 Responsive design for all devices
- 🎨 Beautiful, modern UI with Tailwind CSS
- 🎵 Integration with Genius API for accurate lyrics data

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Firebase account
- Genius API account

### Setup Instructions

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd lyrics-finder
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure Firebase**
- Go to [Firebase Console](https://console.firebase.google.com/)
- Create a new project
- Enable Authentication (Email/Password)
- Go to Project Settings > General
- Register a web app and copy the Firebase config

4. **Get Genius API Key**
- Visit [Genius API Clients](https://genius.com/api-clients)
- Create an API Client
- Copy your Client Access Token

5. **Set up environment variables**
Create a `.env.local` file in the project root:
```env
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_GENIUS_API_KEY=your_genius_access_token
```

6. **Start the development server**
```bash
npm run dev
```

## 🛠️ Built With

- [React](https://reactjs.org/) - Frontend framework
- [Vite](https://vitejs.dev/) - Build tool
- [Firebase](https://firebase.google.com/) - Authentication
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Genius API](https://docs.genius.com/) - Lyrics data
- [Lucide React](https://lucide.dev/) - Icons

## 📱 Features Overview

### Authentication
- Secure signup and login with email/password
- Protected routes for authenticated users
- Persistent user sessions

### Lyrics Search
- Real-time search functionality
- Beautiful song cards with album artwork
- Direct links to full lyrics on Genius
- Artist and song information display

### User Interface
- Responsive design for all screen sizes
- Modern, clean aesthetic
- Smooth animations and transitions
- Intuitive navigation

## 🔒 Security

- Environment variables for sensitive data
- Firebase Authentication for secure user management
- CORS-compliant API requests
- Protected API endpoints

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Genius](https://genius.com/) for providing the lyrics API
- [Firebase](https://firebase.google.com/) for authentication services
- [Unsplash](https://unsplash.com/) for beautiful images
