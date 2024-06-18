import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

/* font-family: "Roboto", sans-serif; */
/* font-family: "Merriweather", serif; */
/* font-family: "Inconsolata", monospace; */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    color: ${({ theme }) => theme.COLORS.BLACK};

    -webkit-font-smoothing: antialiased;
    width: 100vw;
    height: 100vh;
  }

  .sans-serif{
    font-family: "Roboto", sans-serif;
  }

  .serif{
    font-family: "Merriweather", serif;
  }

  .monospace{
    font-family: "Inconsolata", monospace;
  }

  .dark-mode{
    background-color: ${({ theme }) => theme.COLORS.BLACK};
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  #root{
    max-width: 800px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 24px;
  }

  body, input, button, textarea, select {
    font-size: 16px;
    outline: none;
  }

  a {
    text-decoration: none;
  }
`