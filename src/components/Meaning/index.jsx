import { Container } from "./styles"

export default function Meaning({partOfSpeech, noun, verb}){
  return (
    <Container>
      {partOfSpeech.map((part, index) => {
        return (
          <div>
            <div key={index} className="part-of-speech">
              <i>{part}</i>
              <hr/>
            </div>
            <ul>
              {part === 'noun' && noun.map((n, index) => (
                <li key={index}>{n.definition}</li>
              ))}
            </ul>
            
            <ul>
              {part === 'verb' && verb.map((v, index) => (
                <li key={index}>{v.definition}</li>
              ))}
            </ul>
          </div>
        )
      })}
    </Container>
  )
}
