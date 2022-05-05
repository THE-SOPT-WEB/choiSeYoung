import { React, useState, useEffect, useRef } from "react";
import styled from "styled-components";
import 민초 from "../img/민트초콜릿칩.png";
import 베리 from "../img/베리베리스트로베리.png";
import 외계인 from "../img/엄마는외계인.png";
import 초코남숲 from "../img/초코나무숲.png";
import GameImg from "../components/GameImg";

const Main = styled.div`
  display:flex;
`;
const GameHeader = styled.header`
  background-color: black;
`;
const GameContent = styled.main`
  display: flex;
`;
//메인 게임 페이지
function Game() {
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
  return (
    <Main>
      <GameHeader />
      <GameContent>
        <GameImg src={초코남숲} name={"초코나무 숲"} />
        <GameImg src={초코남숲} name={"초코나무 숲"} />
        {/* foreach 랑 map 함수 차이 */}
      </GameContent>
    </Main>
  );
}
export default Game;
