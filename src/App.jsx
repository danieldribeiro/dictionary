import { useEffect, useState } from "react";

import Header from "./components/Header"
import SearchBar from "./components/SearchBar"

function App() {

  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const body = document.body;
    body.classList.toggle('dark-mode', theme === 'dark');
  }, [theme]);

  return (
  <>
      <Header 
        theme={theme}
        setTheme={setTheme}
      />
      <SearchBar 
        placeholder='Search for any word...'
        theme={theme}
        setTheme={setTheme}
      />
  </>
  )
}

export default App
