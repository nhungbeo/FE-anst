import Header from '../src/components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Animation from './components/Animation';
import ParticleEffect from './components/ParticleEffect';

function App() {
  return (
    <div className='App'>
      <ParticleEffect />
      <BrowserRouter>
        <Header />
        <Animation />
      </BrowserRouter>
    </div>
  );
}

export default App;
