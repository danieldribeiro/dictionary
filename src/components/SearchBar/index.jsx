import { useState } from "react";
import { Container, ErrorMessage } from "./styles";

import { IoSearchOutline } from "react-icons/io5";

export default function SearchBar({theme, handleWord, fetchError}){

  const [word, setWord] = useState(null)
  const [error, setError] = useState(false)

  
  const handleSubmit = () => {
    if(word === null){
      setError(true)
    } else {
      handleWord(word)
    }
  }

  const resetErro = () => {
    setError(false)
    fetchError(false)
  }

  return (
    <>
      <Container thememode={theme} error={error.toString()} fetchError={fetchError.toString()}>
        <input 
          type="text" 
          placeholder="Search any word..." 
          name='search-bar'
          thememode={theme} 
          onChange={e => setWord(e.target.value)} 
          onFocus={resetErro}
        />
        <IoSearchOutline onClick={handleSubmit}/>
      </Container>
      {error &&  <ErrorMessage>Whoops, it can't be empty...</ErrorMessage>}
      {fetchError && <ErrorMessage>Check the word and try again</ErrorMessage>}
    </>
  )
}
