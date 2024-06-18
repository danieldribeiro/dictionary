import { Container } from "./styles"

export default function Meaning({partOfSpeech, noun, verb}){

  return (
    <Container>

      {partOfSpeech.map((part, index) => {
        return (
          <div key={index} className="part-of-speech">
            <i>{part}</i>
            <hr/>
            {/* {noun.map((n, index) => {
              return (
                <p key={index}>{n}</p>
              )
            })} */}
          </div>
        )
      })}
    </Container>
  )
}