import { React, useState, useEffect, useRef } from "react";
import styled from "styled-components";
import winner from '../img/민트초콜릿칩.png';
import 왕관 from "../img/왕관.png";
const ResultContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  background-color: #2a2a2a;
  padding-top:1rem;
  gap:30px;
`;
const CrownImg = styled.img`
  width: 130px;
  position:absolute;
  top: 25%;
`;
const WinnerImg=styled.img`
  width:100vw;
  height:350px;
  object-fit: cover;

`;
//게임 시작 후 결과화면
function Result({ src, name }) {
  return (
    <ResultContainer>
      <p style={{ fontSize: "1.5rem" }}>우승자!</p>
      <h1  style={{ fontSize: "3rem", fontWeight:'bold' }}>민트 초콜렛 칩</h1>
      <WinnerImg src={winner} alt="우승자"/>
      <CrownImg src={왕관} alt="왕관" />
    </ResultContainer>
  );
}
export default Result;
