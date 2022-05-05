import { React, useState, useEffect, useRef } from "react";
import styled from "styled-components";
import 민초 from "../img/민트초콜릿칩.png";
import 베리 from "../img/베리베리스트로베리.png";
import 외계인 from "../img/엄마는외계인.png";
import 초코남숲 from "../img/초코나무숲.png";
import GameImg from "../components/GameImg";

const Main = styled.div`
  display: flex;
  flex-direction: column;
`;
const GameHeader = styled.header`
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
const GameContent = styled.main`
  display: flex;
  text-align: center;
  height: 100vh;
`;
const Versus = styled.h1`
  position: absolute;
  top: 45vh;
  right: 43vw;
  color: white;
  font-size: 80px;
  font-weight: 500;

  text-shadow: 3px 3px 3px #ffa500; //글자 잘 안 보여서 shadow 설정
`;

const selectArr = [
  {
    img: 민초,
    name: "민트 초콜릿 칩",
  },
  {
    img: 베리,
    name: "베리베리 스트로베리",
  },
  {
    img: 외계인,
    name: "엄마는 외계인",
  },
  {
    img: 초코남숲,
    name: "초코나무 숲",
  },
];

//메인 게임 페이지
function Game() {
  const [fighterList, setFighterList] = useState([]); //처음에 세팅되는 모든 참가자 배열
  let matchWinners = useRef([]); //해당 라운드 승리자 저장 배열
  let round; //몇번 경기가 남았는지 -> 후에 저장  let round = useRef(winner / 2);

  function shuffle(array) { //매 게임마다 대결 순서 무작위로 섞기
    array.sort(() => Math.random() - 0.5);
  }

  useEffect(() => {
    shuffle(selectArr); 
    setFighterList(selectArr); //대결자 초기화
  }, []);

 
  return (
    <Main>
      <GameHeader>
        <h1>🍦베라개취🍦 월드컵 준결승</h1>
        <h1>1/2</h1>
      </GameHeader>
      <GameContent>
        <GameImg src={초코남숲} name={"초코나무 숲"} />
        <GameImg src={민초} name={"민트"} />
        <Versus>VS</Versus>
        {/* foreach 랑 map 함수 차이 */}
      </GameContent>
    </Main>
  );
}
export default Game;
