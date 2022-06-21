"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
const styled_reset_1 = __importDefault(require("styled-reset"));
//글로벌 스타일
const GlobalStyle = (0, styled_components_1.createGlobalStyle) `
${styled_reset_1.default}
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
exports.default = GlobalStyle;
//# sourceMappingURL=GlobalStyle.js.map