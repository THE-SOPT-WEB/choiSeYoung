import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
${reset}
  #root, body, html {
    padding: 0;
    margin: 0;
    font-family:"Noto Serif KR", serif;, 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
    overflow:hidden;
   
  }

  * {
    box-sizing: border-box;
	}

  button:hover {
    cursor: pointer;
  }
  
`;

export default GlobalStyle;