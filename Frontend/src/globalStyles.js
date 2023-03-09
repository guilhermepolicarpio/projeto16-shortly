import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    display: flex;
    justify-content: center;
    background: #ffffff;
    min-height: 100vh;
    width: 100%;
    padding: 3vh;
  }
`;

export default GlobalStyle;