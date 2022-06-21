"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const ImgContainer = styled_components_1.default.div `
  display:flex;
  width:100%;
  flex-direction:column;
  text-align:center;
`;
const StyledImg = styled_components_1.default.img `
  width: 100%;
  height:80%;
  object-fit: cover;
  &:hover {
    transform: scale(1.1); // 이미지 1.1배 확대
    cursor: pointer;
    transition: 0.5s; //부드럽게 확대
  }
`;
const Desc = styled_components_1.default.h1 `
  position: relative;
  top: -50%;
  font-size:40px;
  word-breka:keep-all;
  color: white;
  text-shadow: 3px 3px 3px black; //글자 잘 안 보여서 shadow 설정
`;
//게임에 사용되는 이미지 컴포넌트
function GameImg({ src, title, onClick }) {
    //src: 이미지 , name: 사진에 대한 이름, onCLick: 온클릭 함수
    return (react_1.default.createElement(ImgContainer, { onClick: onClick },
        react_1.default.createElement(StyledImg, { src: src, title: title }),
        react_1.default.createElement(Desc, null, title)));
}
exports.default = GameImg;
//# sourceMappingURL=GameImg.js.map