import { React, useState, useEffect, useRef } from "react";
import styled from "styled-components";

const StyledBody = styled.main`
  width: 320px;
  margin: 10px auto;
  min-height: calc(100vh - 20px);
  color: white;
  align-items: center;
  border-radius: 18px;
  border: 3px solid white;
  display: flex;
  flex-direction: column;
  gap: 10px;

  & > hr {
    width: 100%;
    height: 3px;
    background-color: white;
  }
  form > label {
    font-size: 1.5rem;
    display: inline;
  }

  form {
    display: flex;
    gap: 5px;
    flex-direction: column;
  }

  input[type="checkbox"] {
    display: inline;
  }
  & > h1 {
    font-weight: bolder;
    font-size: 2rem;
    color: rgb(245, 211, 22);
    line-height: 2.5rem;
    text-align: center;
    padding: 18px;
    margin-top: 10px;
  }
`;
const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-contnet: center;

  gap: 15px;
  padding: 10px;

  h2 {
    font-size: 1.5rem;
    height: 100%;
    transform: translate(0, 110px);
  }
`;
const StyledItem = styled.div`
  border-radius: 18px;
  background-color: #fff;
  width: 280px;
  padding: 10px;
  border-radius: 18px;
  border: 1px solid white;
  background-color: white;
  color: black;
  display: flex;
  flex-direction: column;
  gap: 15px;
  button {
    border: 1px solid black;
    border-radius: 18px;
    padding: 5px;
  }
  footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

function Main() {
  return (
    <StyledBody>
      <h1>
        🍺세영이네🍺
        <br />
        맥주 보세영ㅋㅋ
      </h1>
      <hr />
      <form subj="checkBox">
        <label>지역기반이세영</label>
        <input type="checkbox" />
      </form>
      <form subj="text">
        <label>입력할거세영?</label>
        <input type="text" placeholder="지역을 입력해주세영"/>
      </form>
      <hr />
      <StyledList>
        {/* <h2>결과 없는데 믿기세영?😨</h2> */}
        <StyledItem>
          <header>역전할머니맥주 인하대점</header>
          <footer>
            <button>010-1234-2352</button>
            <span>645미터</span>
          </footer>
        </StyledItem>
      </StyledList>
    </StyledBody>
  );
}

export default Main;
