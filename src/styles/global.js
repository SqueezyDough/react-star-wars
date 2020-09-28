import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 3rem 0 0;
    font-family: ${({ theme }) => theme.fontDescription};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${({ theme }) => theme.primaryColor};
    font-size: ${({ theme }) => theme.fontSizeXS};
    color: ${({ theme }) => theme.secondaryColorDark};
  }

  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.secondaryColorDark};
  }

  ul {
    list-style-type: none;
  }

  .content-wrapper {
    margin: 0 auto;
    max-width: 65rem;
  }
`

export default GlobalStyle
