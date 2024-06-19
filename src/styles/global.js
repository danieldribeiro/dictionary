import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

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
    overflow-x: hidden;
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

    i, a, svg{
      color: ${({ theme }) => theme.COLORS.WHITE} !important;
    }

    .player{
      background-color: ${({ theme }) => theme.COLORS.PURPLE};
    }
  }

  .source{
    margin-top: 35px;
    color: ${({ theme }) => theme.COLORS.GRAY_400};
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;

    a{
      color: ${({theme}) => theme.COLORS.GRAY_700};
      text-decoration: underline;
    }

    svg{
      color: ${({theme}) => theme.COLORS.GRAY_700};
    }
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