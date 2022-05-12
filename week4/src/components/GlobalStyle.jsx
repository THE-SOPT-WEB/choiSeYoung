import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  #root, body, html {
    padding: 0;
    margin: 0;
    font-family: 'Song Myung', serif;
  }
  body{
    background-color:#8040FF;
  }
  * {
    box-sizing: border-box;
	}

  button:hover {
    cursor: pointer;
  }
`;

export default GlobalStyle;
