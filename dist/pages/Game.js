"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("react");
const styled_components_1 = __importDefault(require("styled-components"));
const _______png_1 = __importDefault(require("../img/\uBBFC\uD2B8\uCD08\uCF5C\uB9BF\uCE69.png"));
const __________png_1 = __importDefault(require("../img/\uBCA0\uB9AC\uBCA0\uB9AC\uC2A4\uD2B8\uB85C\uBCA0\uB9AC.png"));
const _______png_2 = __importDefault(require("../img/\uC5C4\uB9C8\uB294\uC678\uACC4\uC778.png"));
const ______png_1 = __importDefault(require("../img/\uCD08\uCF54\uB098\uBB34\uC232.png"));
const GameImg_1 = __importDefault(require("../components/GameImg"));
const Result_1 = __importDefault(require("./Result"));
const Main = styled_components_1.default.div `
  display: flex;
  flex-direction: column;
`;
const GameHeader = styled_components_1.default.header `
  background-color: black;
  color: white;
  display: flex;
  text-align: center;
  font: 2rem "Noto Serif KR", serif;
  padding: 1rem;
  flex-direction: column;
  gap: 1rem;
  font-weight: bold;
`;
const GameContent = styled_components_1.default.main `
  display: flex;
  text-align: center;
  width: 100vw;
  height: 100vh;
`;
const Versus = styled_components_1.default.h1 `
  position: absolute;
  top: 45vh;
  right: 45vw;
  color: white;
  font-size: 80px;
  font-weight: 500;
  text-shadow: 3px 3px 3px #ffa500; //글자 잘 안 보여서 shadow 설정
`;
const selectArr = [
    {
        img: _______png_1.default,
        name: "민트 초콜릿 칩",
    },
    {
        img: __________png_1.default,
        name: "베리베리 스트로베리",
    },
    {
        img: _______png_2.default,
        name: "엄마는 외계인",
    },
    {
        img: ______png_1.default,
        name: "초코나무 숲",
    },
];
//메인 게임 페이지
function Game() {
    const [fighterList, setFighterList] = (0, react_2.useState)([]); //처음에 세팅되는 모든 참가자 배열
    const [winners, setWinners] = (0, react_2.useState)([]); //해당 라운드 승리자 저장 배열
    const round = (0, react_2.useRef)(1); //지금 진행한 경기 횟수
    const [gameEnd, setGameEnd] = (0, react_2.useState)(false); //게임이 끝났는지 여부
    const remain = (0, react_2.useRef)(0); //남아있는 경기 횟수
    const [realWinner, setRealWinner] = (0, react_2.useState)({ img: "", name: "" }); //최종 승리자
    function shuffle(array) {
        //매 게임마다 대결 순서 무작위로 섞기
        array.sort(() => Math.random() - 0.5);
    }
    function imgOnClick(fighter) {
        //게임에서 이미지 클릭될 때 실행되는 함수
        setWinners([...winners, fighter]);
        round.current += 1; //진행한 횟수 늘려주기
        fighterList.length >= 2 && setFighterList(fighterList.slice(2));
    }
    (0, react_2.useEffect)(() => {
        shuffle(selectArr);
        setFighterList(selectArr); //대결자 초기화
        round.current = 1;
        remain.current = selectArr.length / 2;
    }, []);
    (0, react_2.useEffect)(() => {
        if (fighterList.length === 0) {
            //참가자 전부 비었을 때
            if (winners.length !== 0 && winners.length % 2 === 0) {
                //winner 배열에 진행해야 하는 경기가 남았다면
                setFighterList([...fighterList, ...winners]);
                setWinners([]);
                remain.current = winners.length / 2;
                round.current = 1;
            }
            else if (winners.length === 1) {
                //길이가 1인 것은 최종 승리자만 남았다는 뜻
                setGameEnd(true);
                setRealWinner(winners[winners.length - 1]);
            }
        }
    }, [fighterList, winners]);
    return !gameEnd ? ( //게임이 끝났을 때는  Result 페이지 보여주도록
    react_1.default.createElement(Main, null,
        react_1.default.createElement(GameHeader, null,
            react_1.default.createElement("h1", null, "\uD83C\uDF66\uBCA0\uB77C\uAC1C\uCDE8\uD83C\uDF66 \uC6D4\uB4DC\uCEF5 \uC900\uACB0\uC2B9"),
            react_1.default.createElement("h1", null,
                round.current,
                "/",
                remain.current)),
        react_1.default.createElement(GameContent, null,
            fighterList &&
                fighterList.map((fighter, idx) => {
                    if (idx < 2) {
                        return (react_1.default.createElement(GameImg_1.default, { src: fighter.img, title: fighter.name, key: idx, onClick: () => {
                                imgOnClick(fighter);
                            } }));
                    }
                }),
            react_1.default.createElement(Versus, null, "VS")))) : (react_1.default.createElement(Result_1.default, { winner: realWinner }));
}
exports.default = Game;
//# sourceMappingURL=Game.js.map