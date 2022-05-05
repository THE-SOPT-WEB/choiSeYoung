import { React, useState, useEffect, useRef } from "react";
import styled from "styled-components";

const ImgContainer = styled.div`
  display: relative;
  margin: auto;
`;
const StyledImg = styled.img`
  width: 45vw;
`;
const Desc = styled.h1`
  position: absolute;
  top: 30px;
  right: 20px;
  color: red;
  font: 1em "Noto Serif KR", serif;
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
