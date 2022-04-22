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

function showModal(modalContent){
  const modal=$('.modal');
  const modalBody = $('p.modal__body');
  modalBody.innerText = modalContent;
  
  modal.classList.remove('hide');
  //1.5초 뒤에 모달 클래스에 hide 추가! --> 이렇게 하면 모달 자동적으로 없어짐
  setTimeout(()=>{
    modal.classList.add('hide');
  },1500);
}
function attachEvent({score,answer, image}){
  answer.addEventListener('click',(e)=>{
    
    //뒤에 있는 요소에 속하는가?
    if(e.target instanceof HTMLElement){
      const currentAnswer = e.target.innerText;
      const realAnswer = quizList[currentStep].answer;
      if(currentAnswer ===realAnswer){
        //정답인 경우 처리~~
        showModal('나를 알아주다니 고마웡');
      }
      else{
        //오답인 경우~~

        showModal('아니얌')
      }
    }
  });
}

function goNextStep(){
  // 점수 올리기, 이미지 바꿔주기
  
}
function gameManager(gameInfo){
  initGame(gameInfo);
  attachEvent(gameInfo);
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

