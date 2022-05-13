import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
 ${reset} //아니 이거 하면 되는  거 아녜요?
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
