import { Container } from "./styles"

import { IoPlay } from 'react-icons/io5'

export default function Word({word, phonetic}){

  const synth = window.speechSynthesis;
  const voices = synth.getVoices();

  const handlePlay = (word) => {
    const utterThis = new SpeechSynthesisUtterance(word);
    utterThis.voice = voices[109]
    synth.speak(utterThis);
  }

  return (
    <Container>
      <div>
        <h1>{word}</h1>
        <p>{phonetic}</p>
      </div>
      <div className="player" onClick={() => handlePlay(word)}>
        <IoPlay/>
      </div>
    </Container>
  )
}