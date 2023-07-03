import { useState } from 'react'
import './App.css'
import About from './components/about'
import Navbar from './components/navbar'
import { createContext } from "react";
import Projects from './components/projects';

interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: '',
  toggleTheme: () => { },
});

function App() {
  const [theme, setTheme] = useState('dark');
  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  }


  return (

    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div className='main-container' id={theme}>
          <Navbar />
          <section><About /></section>
          <section><Projects /></section>
        </div>
      </ThemeContext.Provider>
    </>
  )
}

export default App
