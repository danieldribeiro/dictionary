import { Fragment } from "react";
import { Container } from "./styles";

export default function Meaning({partOfSpeech, noun, verb, adjective, adverb, examples, nounSynonyms, verbSynonyms, adjectiveSynonyms, adverbSynonyms}) {
  
  return (
    <Container>
      {partOfSpeech.map((part, partIndex) => {
        return (
          <div key={partIndex}>
            <div className="part-of-speech">
              <i>{part}</i>
              <hr/>
            </div>
            <ul>
              {part === 'noun' && noun.map((n, nounIndex) => (
                <Fragment key={nounIndex}>
                  <li>{n.definition}</li>
                  {nounIndex === noun.length - 1 && nounSynonyms != [] ?
                    <p className="synonyms">Synonyms: <span>{nounSynonyms}</span></p> : 
                    ''
                  }
                </Fragment>
              ))}
            </ul>
            
            <ul className="verbs">
              {part === 'verb' && verb.map((v, verbIndex) => (
                <Fragment key={verbIndex}>
                  <li>{v.definition}</li>
                  {examples.length === 1 ? 
                    verbIndex === verb.length - 1 && <p className="examples">{examples}</p> : <p>{examples[verbIndex]}</p>
                  }
                  {verbIndex === verb.length - 1 && verbSynonyms != [] ?
                    <p className="synonyms">Synonyms: <span>{verbSynonyms}</span></p> :
                    ''
                  }
                </Fragment>
              ))}
            </ul>

            <ul>
              {part === 'adjective' && adjective.map((adj, adjIndex) => (
                <Fragment key={adjIndex}>
                  <li>{adj.definition}</li>
                  {adjIndex === adjective.length - 1 && adjectiveSynonyms != [] ?
                    <p className="synonyms">Synonyms: <span>{adjectiveSynonyms}</span></p> :
                    ''
                  }
                </Fragment>
              ))}
            </ul>

            <ul>
              {part === 'adverb' && adverb.map((adv, advIndex) => (
                <Fragment key={advIndex}>
                  <li>{adv.definition}</li>
                  {advIndex === adverb.length - 1 && adverbSynonyms != [] ? 
                    <p className="synonyms">Synonyms: <span>{adverbSynonyms}</span></p> :
                    ''
                  }
                </Fragment>
              ))}
            </ul>
          </div>
        );
      })}
    </Container>
  );
}
