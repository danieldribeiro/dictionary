import { useEffect, useState } from "react";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Word from "./components/Word";
import Meaning from "./components/Meaning";

import { RiExternalLinkLine } from "react-icons/ri";

function App() {
  const [theme, setTheme] = useState('light');
  const [word, setWord] = useState(null);
  const [phonetic, setPhonetic] = useState(null);
  const [meanings, setMeanings] = useState([]);
  const [partOfSpeech, setPartOfSpeech] = useState([]);
  const [noun, setNoun] = useState([]);
  const [verb, setVerb] = useState([]);
  const [adjective, setAdjective] = useState([]);
  const [adverb, setAdverb] = useState([]);
  const [examples, setExamples] = useState([]);
  const [nounSynonyms, setNounSynonyms] = useState([]);
  const [verbSynonyms, setVerbSynonyms] = useState([]);
  const [adjectiveSynonyms, setAdjectiveSynonyms] = useState([]);
  const [adverbSynonyms, setAdverbSynonyms] = useState([]);
  const [fetchError, setFetchError] = useState(false);

  const handleWord = (word) => {
    setWord(word);
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Palavra não encontrada');
        }
        return response.json();
      })
      .then(data => {
        if (data[0]) {
          const fetchedMeanings = data[0].meanings;
          const partsOfSpeech = fetchedMeanings.map(meaning => meaning.partOfSpeech);

          setMeanings(fetchedMeanings);
          setWord(data[0].word);
          setPhonetic(data[0].phonetic);
          setPartOfSpeech(partsOfSpeech);

          const nounDefinitions = [];
          const verbDefinitions = [];
          const adjectiveDefinitions = [];
          const adverbDefinitions = [];
          const examples = []
          const nounSynonyms = []
          const verbSynonyms = []
          const adjectiveSynonyms = []
          const adverbSynonyms = []

          fetchedMeanings.forEach(mean => {
            if (mean.partOfSpeech === 'noun') {
              nounDefinitions.push(...mean.definitions);
              nounSynonyms.push(mean.synonyms)
            } else if (mean.partOfSpeech === 'verb') {
              verbDefinitions.push(...mean.definitions);
              verbSynonyms.push(...mean.synonyms)
              mean.definitions.forEach(definition => {
                examples.push(definition.example)
              })
            } else if (mean.partOfSpeech === 'adjective'){
              adjectiveDefinitions.push(...mean.definitions);
              adjectiveSynonyms.push(...mean.synonyms)
            } else if (mean.partOfSpeech === 'adverb'){
              adverbDefinitions.push(...mean.definitions);
              adverbSynonyms.push(...mean.synonyms)
            }
          })

          setNoun(nounDefinitions);
          setVerb(verbDefinitions);
          setAdjective(adjectiveDefinitions);
          setAdverb(adverbDefinitions);
          setExamples(examples);
          setNounSynonyms(nounSynonyms.join('').replace(/,/g, ', '))
          setVerbSynonyms(verbSynonyms.join(', ').replace(/,/g, ', '))
          setAdjectiveSynonyms(adjectiveSynonyms.join(', ').replace(/,/g, ', '))
          setAdverbSynonyms(adverbSynonyms.join(', ').replace(/,/g, ', '))

          setFetchError(false);
        } else {
          setFetchError(true);
        }
      })
      .catch(error => {
        setFetchError(true);
      });
  }

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
        fetchError={fetchError}
      />

      { word && !fetchError && 
        <>
          <Word
            word={word}
            phonetic={phonetic}
          />

          <Meaning
            partOfSpeech={partOfSpeech}
            noun={noun}
            verb={verb}
            adjective={adjective}
            adverb={adverb}
            examples={examples}
            nounSynonyms={nounSynonyms}
            verbSynonyms={verbSynonyms}
            adjectiveSynonyms={adjectiveSynonyms}
            adverbSynonyms={adverbSynonyms}
          />
        </>
      }

      <p className="source">
        Source
        <a href="https://en.wiktionary.org/wiki/keyboard">https://en.wiktionary.org/wiki/keyboard</a> 
        {<RiExternalLinkLine/>}
      </p>
    </>
  )
}

export default App;
