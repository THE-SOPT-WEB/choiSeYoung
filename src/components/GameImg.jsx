import { React, useState, useEffect, useRef } from "react";
import styled from "styled-components";

const ImgContainer = styled.div`
  display:flex;
  flex-direction:column;
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
  color: white;
  text-shadow: 3px 3px 3px black; //글자 잘 안 보여서 shadow 설정
`;
function GameImg({ src, name }) {
  //src: 이미지 , name: 사진에 대한 이름

  return (
    <ImgContainer>
      <StyledImg src={src} name={name} />
      <Desc>{name}</Desc>
    </ImgContainer>
  );
}
export default GameImg;
