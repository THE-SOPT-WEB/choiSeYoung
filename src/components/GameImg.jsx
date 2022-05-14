import { React, useState, useEffect, useRef } from "react";
import styled from "styled-components";

const ImgContainer = styled.div`
  display:flex;
  width:100%;
  flex-direction:column;
  text-align:center;
`;
const StyledImg = styled.img`
  width: 100%;
  height:80%;
  object-fit: cover;
  &:hover {
    transform: scale(1.1); // 이미지 1.1배 확대
    cursor: pointer;
    transition: 0.5s; //부드럽게 확대
  }
`;
const Desc = styled.h1`
  position: relative;
  top: -50%;
  font-size:40px;
  word-break: keep-all;
  color: white;
  text-shadow: 3px 3px 3px black; //글자 잘 안 보여서 shadow 설정
`;
//게임에 사용되는 이미지 컴포넌트
function GameImg({ src, name, onClick }) {
  //src: 이미지 , name: 사진에 대한 이름, onCLick: 온클릭 함수

  return (
    <ImgContainer onClick={onClick}>
      <StyledImg src={src} name={name} />
      <Desc>{name}</Desc>
    </ImgContainer>
  );
}
export default GameImg;
