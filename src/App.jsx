import { useEffect, useState } from "react";

import Header from "./components/Header"
import SearchBar from "./components/SearchBar"
import Word from "./components/Word";
import Meaning from "./components/Meaning";

function App() {
  const [theme, setTheme] = useState('light');
  const [word, setWord] = useState(null)
  const [phonetic, setPhonetic] = useState(null)
  const [meanings, setMeanings] = useState([])
  const [partOfSpeech, setPartOfSpeech] = useState([])

  const [noun, setNoun] = useState([])
  const [verb, setVerb] = useState([])

  const handleWord = (word) => {
    setWord(word)
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data[0]) {
          setMeanings(data[0].meanings);
          setWord(data[0].word);
          setPhonetic(data[0].phonetic);
          
          const partsOfSpeech = data[0].meanings.map(meaning => meaning.partOfSpeech);
          setPartOfSpeech(partsOfSpeech);

          meanings.forEach(mean => {
            if (mean.partOfSpeech === 'noun') {
              for(let i = 0; i < mean.definitions.length; i++){
                noun.push(mean.definitions[i])
              }
            } else if (mean.partOfSpeech ==='verb') {
              for(let i = 0; i < mean.definitions.length; i++){
                verb.push(mean.definitions[i])
              }
            }
          })
        }
      })
    }

    console.log(noun)
    console.log(verb)

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
        theme={theme}
        handleWord={handleWord}
      />

      { word != null && 
        <>
          <Word
            word={word}
            phonetic={phonetic}
          />

          <Meaning
            /* meanings={meanings} */
            partOfSpeech={partOfSpeech}
            noun={noun}
            verb={verb}
          />
        </>
      }
      
  </>
  )
}

export default App
