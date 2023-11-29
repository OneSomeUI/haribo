// Initialize Swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  breakpoints: {
    780: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },

});
document.addEventListener('scroll', () => {

  let offsetY = window.scrollY;
  if (offsetY > 100) document.querySelector('header').classList.add('hidden');
  else document.querySelector('header').classList.remove('hidden');
});


// 영양정보/원재료명 탭구조
let tabButtons = document.querySelectorAll('.information-top > button'); // 탭버튼 선언
let tabBoxs = document.querySelectorAll('.food-nutrition-information'); // 탭박스 선언
Array.from(tabButtons).forEach((eachButton, index) => {
  eachButton.addEventListener('click', function () {
    for (const eachButton of [...tabButtons]) eachButton.classList.remove("on");
    for (const eachBox of [...tabBoxs]) eachBox.classList.remove("on");
    // 모든 버튼과 박스에서 on제거
    tabBoxs[index].classList.add("on");
    // 내가 누른 탭버튼과 인덱스번호가 같은 탭박스에 class on추가
    this.classList.add("on");
  });
});
tabButtons[0].click(); //첫번째 버튼 눌림