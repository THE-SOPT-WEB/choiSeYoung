import { React, useState, useEffect, useRef } from "react";
import styled from "styled-components";
import axios from "axios";

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
    font-size: 1.8rem;
    display: inline;
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
  button {
    border: 1px solid #fff;
    border-radius: 18px;
    padding: 10px;
    color: black;
    font-family: inherit;
    background: #fff;
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
    padding: 3px;
  }
  footer {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 1rem;
    justify-content: space-between;
  }
  & > a:link,
  & > a:visited,
  & > a:hover {
    color: black;
    text-decoration: none;
  }
  // 아니 styled-reset 해줬는데 나 왜 이거 해야 하는 것임?
`;
const StyledForm = styled.form`
  display: flex;
  gap: 5px;
  flex-direction: ${(props) => (props.subj === "text" ? "column" : "row")};
`;
const StyledModal = styled.div`
  background: #58fa58;
  position: absolute;
  padding: 10px 20px;
  color: #0b610b;
  top: 20px;
  border-radius: 18px;
`;
function Main() {
  const [checked, setChecked] = useState(false); //체크박스 체크 여부
  const [loading, setLoading] = useState(false); //로딩중인지 여부
  const [list, setList] = useState([]); //맥주집 리스트
  const [location, setLocation] = useState(""); //사용자가 입력한 지역

  function search() {
    setLoading(true);
    if (checked) {
      //체크박스 체크했으면 내 위치 기준
      myLocation();
    } else {
      //체크박스 체크 안 했으면 입력 기준
      inputLocation(location);
    }
  }
  function onKeyPress(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      search();
    }
  }
  async function myLocation() {
    const { x, y } = await getLocation();
    const { data } = await axios.get(
      "https://dapi.kakao.com/v2/local/search/keyword",
      {
        headers: {
          Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_AK}`,
        },
        params: {
          query: "맥주",
          x: x,
          y: y,
          radius: 1000,
        },
      }
    );
    setList(data.documents);
    setLoading(false);
  }

  async function inputLocation(location) {
    if (location) {
      const { data } = await axios.get(
        "https://dapi.kakao.com/v2/local/search/keyword",
        {
          headers: {
            Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_AK}`,
          },
          params: {
            query: `${location}맥주`,
          },
        }
      );
      setList(data.documents);
    } else setList([]); //지역 입력 안 해줬으면 아무것도 안나오는 걸루

    setLoading(false);
  }

  const getLocation = (errHandler) => {
    if ("geolocation" in navigator) {
      return new Promise((resolve) => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const {
              coords: { latitude: y, longitude: x },
            } = position;
            resolve({ x, y });
            console.log({ x, y });
          },
          (e) => {
            alert("HTTPS 연결을 확인해주세요.");
            errHandler && errHandler();
          }
        );
      });
    }

    return { x: 126.6767298, y: 37.4531135 };
  };

  return (
    <StyledBody>
      <h1>
        🍺세영이네🍺
        <br />
        맥주 보세영ㅋㅋ
      </h1>
      <hr />
      <StyledForm subj="checkBox" onKeyDown={onKeyPress}>
        <label>지역기반이세영</label>
        <input type="checkbox" onChange={() => setChecked(!checked)} />
      </StyledForm>
      <StyledForm subj="text" onKeyDown={onKeyPress}>
        <label>입력할거세영?</label>
        <input
          type="text"
          placeholder="지역을 입력해주세영"
          onChange={(e) => {
            setLocation(e.target.value);
          }}
          disabled={checked}
        />
      </StyledForm>
      <button
        onClick={() => {
          search();
        }}
      >
        검색하세영
      </button>
      <hr />
      <StyledList>
        {loading && <StyledModal>기다리세영🥱</StyledModal>}
        {list.length ? (
          list.map(
            ({ place_url, place_name, phone, distance, address_name }, idx) => {
              return (
                <StyledItem key={idx}>
                  <a href={place_url || null}>{place_name}</a>
                  <footer>
                    <button>{phone || "번호 없음"}</button>
                    <span>{distance ? distance + "미터" : address_name}</span>
                  </footer>
                </StyledItem>
              );
            }
          )
        ) : (
          <h2>결과 없는데 믿기세영?😨</h2>
        )}
      </StyledList>
    </StyledBody>
  );
}

export default Main;
