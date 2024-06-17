import { useEffect, useState } from "react";

import { Container } from "./styles";

import book from '../../assets/book-icon.svg';
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

export default function Header({theme, setTheme}) {
  const [fontFamily, setFontFamily] = useState('sans-serif');

  useEffect(() => {
    const body = document.body;
    body.classList.remove('sans-serif', 'serif', 'monospace');
    body.classList.add(fontFamily);
  }, [fontFamily]);

  const handleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  const handleFontFamily = (e) => {
    setFontFamily(e.target.value);
  };

  return (
    <Container>
      <img src={book} alt="Dictionary icon" className={theme === 'dark' ? 'dark-mode' : ''} />

      <select 
        name="font-selector" 
        title="font family selector" 
        className={theme === 'dark' ? 'dark-mode' : ''} 
        onChange={handleFontFamily}
        value={fontFamily}
      >
        <option value="sans-serif">Sans serif</option>
        <option value="serif">Serif</option>
        <option value="monospace">Monospace</option>
      </select>

      <span onClick={handleTheme}>
        {theme === 'dark' ? <IoSunnyOutline /> : <IoMoonOutline />}
      </span>
    </Container>
  );
}
