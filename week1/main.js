const $ = (selector) => document.querySelectorAll(selector);

const burger = $(".burger__card");
const totalPrice = document.querySelector(".finalPrice__value");
const orderCancel=document.querySelector('.modal__cancel');
const orderBtn=document.querySelector('.cart__orderBtn');
const allCancel=document.querySelector('.cart__cancelBtn');
const cartArea = document.querySelector(".cart__title");
function burgerClick(idx) {
  burger[idx].addEventListener("click", (e) => {
    cart_item(idx);
  });
}
const parsePriceToNumber = (price) => {
   const removedComma = price.split(',').join("");
    return +removedComma;
  };

function priceCal(input,price){
   let sum=0;
   for(let i =0;i<input.length;i++){
      const calculprice = parseInt(parsePriceToNumber(price[i].textContent.replace("원", "")));
      sum+=calculprice*Number(input[i].value);
   }
   totalPrice.innerText = sum.toLocaleString() + "원";
}
for (let i = 0; i < burger.length; i++) {
  burgerClick(i);
}

function cart_item(idx) {
  const burgerName = $(".burger__name");
  const burgerPrice = $(".burger__price");
  const cartBurger = $(".cart_burger");
  const cartInput = $(".cart_input");
  const cartPrice=$('.cart_price');


 
  console.log(burgerName[idx].textContent);
  for (let k = 0; k < cartBurger.length; k++) {
    if (cartBurger[k].textContent === burgerName[idx].textContent.replace("버거","")) {
      cartInput[k].value=Number(cartInput[k].value)+1;
      let curPrice = parseInt(parsePriceToNumber(totalPrice.textContent.replace("원", "")));
curPrice=curPrice+Number(parsePriceToNumber(burgerPrice[idx].textContent.replace("원", "")));
totalPrice.innerText=curPrice.toLocaleString()+"원";
      return;
    }
}
cartArea.innerHTML += `
<div>
<span class="cart_burger" style="font-size:10px;font-weight: bold;">${burgerName[
  idx
].textContent.replace("버거", "")}</span>
<div style="display:inline-block;position:absolute;right:10px">
<input class="cart_input" type="number" name="count" value="1" min="1" style="width:30px; height:20px;text-align:center">
<span class="cart_price" style="font-size:10px;font-weight: bold;">${
  burgerPrice[idx].textContent
}</span>
<span class="itemDelete" style="display:inline-block;border-radius:30px;color:white;background-color:black;cursor:pointer;width:14px;height:14px;font-size:5px;text-align:center">X</span>
</div>
</div>
`;
let curPrice = parseInt(parsePriceToNumber(totalPrice.textContent.replace("원", "")));
curPrice=curPrice+Number(parsePriceToNumber(burgerPrice[idx].textContent.replace("원", "")));
totalPrice.innerText=curPrice.toLocaleString()+"원";

  //삭제
  const deleteBtn = $(".itemDelete");
  function deleteBtnClick(deleteIdx) {
    deleteBtn[deleteIdx].addEventListener("click", (e) => {
      const curElement = e.currentTarget.parentElement.parentElement;
      var parent = curElement.parentElement;
      parent.removeChild(curElement);

      curPrice = parseInt(parsePriceToNumber(totalPrice.textContent.replace("원", "")));
      curPrice=curPrice-Number(parsePriceToNumber(burgerPrice[deleteIdx].textContent.replace("원", "")));
      totalPrice.innerText=curPrice.toLocaleString()+"원";
    });
  }
  for (let i = 0; i < deleteBtn.length; i++) {
    deleteBtnClick(i);
  }
}



   orderBtn.addEventListener('click',(e)=>{
     
   const modal=document.querySelector('.modal');
   
     modal.classList.remove('hide');
     
   });

   orderCancel.addEventListener('click',(e)=>{
      const modal=document.querySelector('.modal');
   
      modal.classList.add('hide');
   });

   allCancel.addEventListener('click',(e)=>{
      while (cartArea.hasChildNodes()) {
         cartArea.removeChild(cartArea.firstChild);
     }
     cartArea.innerHTML="장바구니";
     totalPrice.innerText=0+"원";
   });

 