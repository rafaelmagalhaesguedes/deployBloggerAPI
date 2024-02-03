import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  // import poppins font
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Open-Sans, Helvetica, Sans-Serif;
    background: #f2f2f2;
  }

  h1, span {
    font-family: 'Poppins', sans-serif;
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }

  th, td {
    padding: 10px;
    border: 1px solid #ddd;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  button {
    margin-right: 5px;
  }
`;

export default GlobalStyle;