"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const ___png_1 = __importDefault(require("../img/\uC655\uAD00.png"));
const ResultContainer = styled_components_1.default.div `
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  background-color: #2a2a2a;
  padding-top: 1rem;
  gap: 30px;
`;
const CrownImg = styled_components_1.default.img `
  width: 130px;
  position: absolute;
  top: 25%;
`;
const WinnerImg = styled_components_1.default.img `
  width: 100vw;
  height: 350px;
  object-fit: cover;
`;
const StyledButton = styled_components_1.default.button `
  width: 100px;
  height: 50px;
  color: white;
  font-size: 12px;
  border: none;
  border-radius: 8px;
  background: ${(props) => props.color || "black"}; //props에 따라 버튼 색깔 다르게
`;
const ButtonContainer = styled_components_1.default.div `
  display: flex;
  flex-direction:row;
  gap:1rem;
`;
const Winner = styled_components_1.default.p `
font-size: 1.5rem;
`;
const WinnerName = styled_components_1.default.h1 `
font-size: 3rem;
font-weight: bold;
`;
//게임 시작 후 결과화면
function Result({ winner }) {
    const { name, img } = winner;
    return (react_1.default.createElement(ResultContainer, null,
        react_1.default.createElement(Winner, null, "\uC6B0\uC2B9\uC790!"),
        react_1.default.createElement(WinnerName, null, name),
        react_1.default.createElement(WinnerImg, { src: img, alt: "\uC6B0\uC2B9\uC790" }),
        react_1.default.createElement(CrownImg, { src: ___png_1.default, alt: "\uC655\uAD00" }),
        react_1.default.createElement(ButtonContainer, null,
            react_1.default.createElement(StyledButton, { color: "#FFA500", onClick: () => { window.location.reload(); } }, "\uB2E4\uC2DC\uD558\uAE30"),
            react_1.default.createElement(StyledButton, { color: "#8A2BE2" }, "\uACF5\uC720\uD558\uAE30"))));
}
exports.default = Result;
//# sourceMappingURL=Result.js.map