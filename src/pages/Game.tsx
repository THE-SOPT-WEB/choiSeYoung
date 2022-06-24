import React from "react";
import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import 민초 from "../img/민트초콜릿칩.png";
import 베리 from "../img/베리베리스트로베리.png";
import 외계인 from "../img/엄마는외계인.png";
import 초코남숲 from "../img/초코나무숲.png";
import GameImg from "../components/GameImg";
import Result from "./Result";
import { Icecream } from '../types/type';
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
  width: 100vw;
  height: 100vh;
`;
const Versus = styled.h1`
  position: absolute;
  top: 45vh;
  right: 45vw;
  color: white;
  font-size: 80px;
  font-weight: 500;
  text-shadow: 3px 3px 3px #ffa500; //글자 잘 안 보여서 shadow 설정
`;

const selectArr:Icecream[] = [
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
  const [fighterList, setFighterList] = useState<Icecream[]>([]); //처음에 세팅되는 모든 참가자 배열
  const [winners, setWinners] = useState<Icecream[]>([]); //해당 라운드 승리자 저장 배열
  const round = useRef<number>(1); //지금 진행한 경기 횟수
  const [gameEnd, setGameEnd] = useState<boolean>(false); //게임이 끝났는지 여부
  const remain = useRef<number>(0); //남아있는 경기 횟수
  const [realWinner, setRealWinner] = useState<Icecream>({img:"",name:""}); //최종 승리자
  function shuffle(array:Icecream[]) {
    //매 게임마다 대결 순서 무작위로 섞기
    array.sort(() => Math.random() - 0.5);
  }
  function imgOnClick(fighter:Icecream) {
    //게임에서 이미지 클릭될 때 실행되는 함수
    setWinners([...winners, fighter]);
    round.current += 1; //진행한 횟수 늘려주기
    fighterList.length >= 2 && setFighterList(fighterList.slice(2));
  }
  useEffect(() => {
    shuffle(selectArr);
    setFighterList(selectArr); //대결자 초기화
    round.current = 1;
    remain.current = selectArr.length / 2;
  }, []);

  useEffect(() => {
    if (fighterList.length === 0) {
      //참가자 전부 비었을 때
      if (winners.length !== 0 && winners.length % 2 === 0) {
        //winner 배열에 진행해야 하는 경기가 남았다면
        setFighterList([...fighterList, ...winners]);
        setWinners([]);
        remain.current = winners.length / 2;
        round.current = 1;
      } else if (winners.length === 1) {
        //길이가 1인 것은 최종 승리자만 남았다는 뜻
        setGameEnd(true);
        setRealWinner(winners[winners.length - 1]);
      }
    }
  }, [fighterList, winners]);

  return !gameEnd ? ( //게임이 끝났을 때는  Result 페이지 보여주도록
    <Main>
      <GameHeader>
        <h1>🍦베라개취🍦 월드컵 준결승</h1>
        <h1>
          {round.current}/{remain.current}
        </h1>
      </GameHeader>
      <GameContent>
        {fighterList &&
          fighterList.map((fighter : Icecream, idx:number) => {
            if (idx < 2) {
              return (
                <GameImg
                  src={fighter.img}
                  title={fighter.name}
                  key={idx}
                  onClick={() => {
                    imgOnClick(fighter);
                  }}
                />
              );
            }
          })}
        <Versus>VS</Versus>
      </GameContent>
    </Main>
  ) : (
    <Result winner={realWinner} />
  );
}
export default Game;
