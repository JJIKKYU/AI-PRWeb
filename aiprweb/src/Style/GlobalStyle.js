import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Arial', sans-serif;
    background-color: #f9f9f9;
    padding: 20px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  input, button {
    padding: 10px;
    font-size: 16px;
  }

  button {
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  button:hover {
    background-color: #0056b3;
  }

  input {
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  label {
    font-size: 16px;
  }

  @media (min-width: 768px) {
    body {
      padding: 40px;
    }
  }
`;

export default GlobalStyle;