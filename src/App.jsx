import { BrowserRouter } from "react-router-dom";

import Animation from "./components/Animation";
import Header from "./components/Header";
import ParticleEffect from "./components/ParticleEffect";
import ThemeProvider from "./components/Theme/ThemeProvider";
import ThemeSwitcher from "./components/Theme/ThemeSwitcher";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
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
