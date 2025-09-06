import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Analytics } from "@vercel/analytics/react";
import Header from './components/Header';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import ProjectsPage from './components/ProjectsPage';
import Footer from './components/Footer';
import Education from './components/Education';
import NotFound from './components/NotFound'; 
import './App.css';

const PortfolioLayout = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };

  const handleNavigate = path => {
    const sectionId = path === '/' ? 'home' : path.substring(1);
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const handleContextMenu = e => e.preventDefault();
    const handleKeyDown = e => {
      if (
        (e.ctrlKey || e.metaKey) &&
        (e.key === 'u' ||
          e.key === 's' ||
          (e.shiftKey && e.key === 'I') ||
          (e.shiftKey && e.key === 'J') ||
          e.key === 'c')
      ) {
        e.preventDefault();
      }
    };
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  return (
    <div className={`app ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <Header
        isDarkMode={isDarkMode}
        onToggleTheme={toggleDarkMode}
        onNavigate={handleNavigate}
      />
      <div className="main-content">
        <section id="home" className="scroll-section">
          <Home />
        </section>
        <section id="education" className="scroll-section">
          <Education isDarkMode={isDarkMode} />
        </section>
        <section id="about" style={{ scrollMarginTop: '130px' }}>
          <About />
        </section>
        <section id="projects" className="scroll-section">
          <ProjectsPage />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
      <div className="footer-section">
        <Footer onNavigate={handleNavigate} />
      </div>
    </div>
  );
};


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PortfolioLayout />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Analytics />
    </BrowserRouter>
  );
};

export default App;
