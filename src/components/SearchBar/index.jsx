import { Container } from "./styles";

import { IoSearchOutline } from "react-icons/io5";

export default function SearchBar({ children, theme, setTheme, ...rest }){
  return (
    <Container {...rest} $themeMode={theme} name='search-bar'>
    </Container>
  )
}
