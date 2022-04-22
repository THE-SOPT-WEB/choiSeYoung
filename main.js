import pic1 from "./assets/강하늘.jpg";
import pic2 from "./assets/권지용.jpg";
import pic3 from "./assets/옹성우.jpg";
import pic4 from "./assets/이수혁.jpg";
import pic5 from "./assets/이재욱.jpg";

const $ = (selector) => document.querySelector(selector);

let currentStep = 0;

const quizList = [
  {
    src: pic1,
    answer: "강하늘",
  },
  {
    src: pic2,
    answer: "권지용",
  },
  {
    src: pic3,
    answer: "옹성우",
  },
  {
    src: pic4,
    answer: "이수혁",
  },
  {
    src: pic5,
    answer: "이재욱",
  },
];

function initGame({score,answer,image}){
  currentStep=0;
  score.innerText=0;

  image.src=quizList[currentStep].src;
}
function gameManager(gameInfo){
  initGame(gameInfo);
}
window.onload = () => {
  gameManager(
   {
    score:$('.scoreBoard__score'),
    answer:$('ul,answer__list'),
    image:$('.imageBoard > img'),
   }

  );
}

