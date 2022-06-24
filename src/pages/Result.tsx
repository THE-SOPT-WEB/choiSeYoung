import React from "react";
import styled from "styled-components";
import 왕관 from "../img/왕관.png";
import { Icecream } from '../types/type';
const ResultContainer = styled.div`
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
const CrownImg = styled.img`
  width: 130px;
  position: absolute;
  top: 25%;
`;
const WinnerImg = styled.img`
  width: 100vw;
  height: 350px;
  object-fit: cover;
`;
const StyledButton = styled.button< { color : string} >`
  width: 100px;
  height: 50px;
  color: white;
  font-size: 12px;
  border: none;
  border-radius: 8px;
  background: ${(props) => props.color || "black"}; //props에 따라 버튼 색깔 다르게
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction:row;
  gap:1rem;
`;
const Winner=styled.p`
font-size: 1.5rem;
`;
const WinnerName=styled.h1`
font-size: 3rem;
font-weight: bold;
`;
interface IcecreamProps{
  winner:Icecream;
}
//게임 시작 후 결과화면
function Result( { winner} :IcecreamProps) {
  const {name, img}=winner;
  return (
    <ResultContainer>
      <Winner>우승자!</Winner>
      <WinnerName>{name}</WinnerName>
      <WinnerImg src={img} alt="우승자" />
      <CrownImg src={왕관} alt="왕관" />
      <ButtonContainer>
        <StyledButton color="#FFA500" onClick={()=>{ window.location.reload();}}>다시하기</StyledButton>
        <StyledButton color="#8A2BE2">공유하기</StyledButton>
      </ButtonContainer>
    </ResultContainer>
  );
}
export default Result;
