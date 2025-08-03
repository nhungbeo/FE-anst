import Header from '../src/components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Animation from './components/Animation';
import ParticleEffect from './components/ParticleEffect';
import ThemeProvider from './components/Theme/ThemeProvider';
import ThemeSwitcher from './components/Theme/ThemeSwitcher';

function App() {
  return (
    <ThemeProvider>
      <div className='App'>
        <ParticleEffect />
        <ThemeSwitcher />
        <BrowserRouter>
          <Header />
          <Animation />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
