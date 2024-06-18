import { useState } from "react";
import { Container, ErrorMessage } from "./styles";

import { IoSearchOutline } from "react-icons/io5";

export default function SearchBar({theme, handleWord}){

  const [word, setWord] = useState(null)
  const [error, setError] = useState(false)

  
  const handleSubmit = () => {
    if(word === null){
      setError(true)
    } else {
      handleWord(word)
    }
  }

  return (
    <>
      <Container thememode={theme} name='search-bar' error={error.toString()}>
        <input type="text" placeholder="Search any word..." thememode={theme} onChange={e => setWord(e.target.value)}/>
        <IoSearchOutline onClick={handleSubmit}/>
      </Container>
      {error == true &&  <ErrorMessage>Whoops, it can't be empty...</ErrorMessage>}
    </>
  )
}
