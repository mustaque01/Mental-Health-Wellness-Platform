# MindWell - Mental Health & Wellness Platform

<div align="center">
  <img src="https://images.pexels.com/photos/3820295/pexels-photo-3820295.jpeg?auto=compress&cs=tinysrgb&w=800" alt="MindWell Banner" width="100%" height="300" style="object-fit: cover; border-radius: 10px;">
  
  <h3>🧠 A comprehensive mental health platform for tracking moods, journaling, and connecting with support</h3>
  
  [![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge)](https://courageous-banoffee-7b83b0.netlify.app)
  [![React](https://img.shields.io/badge/React-18.3.1-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.1-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
</div>

## 🌟 Features

### 🎯 Core Features
- **🔐 User Authentication** - Secure login/signup with role-based access (User/Therapist)
- **📊 Daily Mood Tracking** - Log emotions with interactive charts and analytics
- **📝 Guided Journaling** - Daily prompts with sentiment analysis
- **📚 Mental Health Resources** - Curated articles, videos, and self-help content
- **🧠 Mental Health Assessment** - Interactive quizzes with personalized recommendations
- **💬 Anonymous Community** - Safe space for sharing experiences and support
- **👩‍⚕️ Therapist Directory** - Find and connect with licensed mental health professionals
- **🚨 Emergency Support** - Quick access to crisis helplines and resources

### 🎨 Design Features
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- **Beautiful UI/UX** - Modern, calming design with smooth animations
- **Accessibility** - WCAG compliant with proper contrast and navigation
- **Dark/Light Theme** - Comfortable viewing in any environment

## 🚀 Live Demo

Visit the live application: [https://courageous-banoffee-7b83b0.netlify.app](https://courageous-banoffee-7b83b0.netlify.app)

### Demo Credentials
- **Email**: demo@mindwell.com
- **Password**: demo123
- **Role**: User and Therapist

## 🛠️ Tech Stack

### Frontend
- **React 18.3.1** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **Recharts** - Beautiful data visualizations
- **React Router** - Client-side routing
- **Zustand** - Lightweight state management
- **Lucide React** - Beautiful, customizable icons

### Development Tools
- **Vite** - Fast build tool and dev server
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing
- **TypeScript ESLint** - TypeScript-specific linting rules

### Deployment
- **Netlify** - Continuous deployment and hosting

## 📦 Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager
- Git

### 1. Clone the Repository
```bash
git clone https://github.com/mustaque01/mindwell-platform.git
cd mindwell-platform
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 3. Environment Setup
Create a `.env` file in the root directory:
```env
VITE_APP_NAME=MindWell
VITE_API_URL=http://localhost:3001
```

### 4. Start Development Server
```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:3000`

### 5. Build for Production
```bash
npm run build
# or
yarn build
```

## 📁 Project Structure

```
mindwell-platform/
├── public/                 # Static assets
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── emergency/     # Emergency support components
│   │   └── layout/        # Layout components (Navbar, etc.)
│   ├── pages/            # Page components
│   │   ├── Dashboard.tsx
│   │   ├── MoodTracker.tsx
│   │   ├── Journal.tsx
│   │   ├── Resources.tsx
│   │   ├── Quiz.tsx
│   │   ├── Community.tsx
│   │   ├── TherapistDirectory.tsx
│   │   └── Profile.tsx
│   ├── stores/           # Zustand state management
│   │   ├── authStore.ts
│   │   ├── moodStore.ts
│   │   ├── journalStore.ts
│   │   └── emergencyStore.ts
│   ├── App.tsx           # Main application component
│   ├── main.tsx          # Application entry point
│   └── index.css         # Global styles
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## 🎯 Key Components

### Authentication System
- Role-based authentication (User/Therapist)
- Secure login/logout functionality
- User profile management

### Mood Tracking
- Daily mood logging with emoji scale (1-10)
- Emotion tagging system
- Interactive charts showing mood trends
- Historical data visualization

### Journaling System
- Daily writing prompts
- Rich text editor
- Sentiment analysis
- Private entry storage

### Community Features
- Anonymous posting option
- Category-based discussions
- Moderation system
- Safe space guidelines

### Emergency Support
- Crisis helpline integration
- Emergency contact information
- Quick access button
- Resource recommendations

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint

# Type Checking
npm run type-check   # Run TypeScript compiler check
```

## 🎨 Customization

### Styling
The project uses Tailwind CSS for styling. You can customize:
- Colors in `tailwind.config.js`
- Global styles in `src/index.css`
- Component-specific styles using Tailwind classes

## 🆘 Support & Resources

### Mental Health Resources
- **National Suicide Prevention Lifeline**: 988
- **Crisis Text Line**: Text HOME to 741741
- **International Association for Suicide Prevention**: [https://www.iasp.info/resources/Crisis_Centres/](https://www.iasp.info/resources/Crisis_Centres/)

### Technical Support
- Create an issue on GitHub
- Check existing issues and discussions
- Review documentation

## 🙏 Acknowledgments

- **Design Inspiration**: Modern mental health platforms
- **Icons**: Lucide React icon library
- **Images**: Pexels for stock photography
- **Community**: Mental health advocacy organizations

## 📊 Project Status

- ✅ Core features implemented
- ✅ Responsive design completed
- ✅ Authentication system
- ✅ Mood tracking with charts
- ✅ Journaling system
- ✅ Resource library
- ✅ Community features
- ✅ Emergency support
- 🔄 Backend integration (planned)
- 🔄 Real-time notifications (planned)
- 🔄 Mobile app (planned)

---

<div align="center">
  <p>Made with ❤️ for mental health awareness</p>
  <p>If you find this project helpful, please consider giving it a ⭐</p>
</div>
