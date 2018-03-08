// const headerBackground = document.querySelector("._background-header");
//
// function displayHeaderBackground() {
//   headerBackground.classList.add("-fadeUp");
// }
// headerBackground.addEventListener("onload", displayHeaderBackground());
//
// const menuButton = document.querySelector('.navigation-button');
// const menuContainer = document.querySelector('.navigation-container')
// const menuItems = document.querySelectorAll('.navigation-container__item');
//
// function displayMenu(e) {
//   this.classList.toggle('active')
//   if (menuContainer.classList.contains('-hidden')) {
//     menuContainer.classList.toggle('-hidden');
//     window.setTimeout(function(){
//       menuItems.forEach(item => item.classList.toggle('-hidden'))
//     }, 500)
//   } else {
//     menuItems.forEach(item => item.classList.toggle('-hidden'));
//     window.setTimeout(function(){
//       menuContainer.classList.toggle('-hidden');
//     }, 500)
//   }
// }
// menuButton.addEventListener('click', displayMenu)
//
// // hide and show go-to-top button
//
// function isInViewport(element) {
//   var rect = element.getBoundingClientRect();
//   var html = document.documentElement;
//   return (
//     rect.top >= 0 &&
//     rect.left >= 0 &&
//     rect.bottom <= (window.innerHeight || html.clientHeight) &&
//     rect.right <= (window.innerWidth || html.clientWidth)
//   );
// }
// const annoncesScrollButton = document.querySelector('.discover');
// const buttonToTop = document.querySelector('.button-to-top');
//
// // set fixed height for the frame
//
// const body = document.body,
// html = document.documentElement;
// const frame = document.querySelector('.frame');
//
//
// // set fixed height for input buttons
// const contactInputAdd = document.querySelector('.contact-input.__add');
// const contactInputShow = document.querySelector('.contact-input.__show');
// const inputButtons = document.querySelectorAll('.contact-input>.contact-input__button');
//
// function expandInput() {
//   const type =  this.dataset.type;
//   if (type === "add") {
//     contactInputAdd.classList.toggle('-expand');
//     contactInputShow.classList.remove('-expand');
//   } else {
//     contactInputShow.classList.toggle('-expand');
//     contactInputAdd.classList.remove('-expand');
//   }
// };
//
// inputButtons.forEach(button =>  button.addEventListener('click', expandInput));
//
//
// function frameHeight() {
//   let height = Math.max(
//     body.scrollHeight,
//     body.offsetHeight,
//     html.clientHeight,
//     html.scrollHeight,
//     html.offsetHeight
//   );
//   frame.style.height=`${height}px`;
// };
//
// const h1 = document.querySelector("h1");
//
// function displayButtonToTop() {
//   if (isInViewport(annoncesScrollButton)) {
//     buttonToTop.classList.add('-hidden');
//   } else {
//     buttonToTop.classList.remove('-hidden');
//   }
// };
//
// window.onscroll = function(e) {
//   frameHeight();
//   displayButtonToTop();
// };
//
// const buttonsMore = document.querySelectorAll(".__button-more");
// const annoncesContainer = document .querySelector("#annonces-container");
//
// function slideAnnonceContainer() {
//   if (this.classList.contains("_right")) {
//
//   }
// }
//
// buttonsMore.forEach(button => button.addEventListener("click", slideAnnonceContainer));
//
// // when .__button-more.onclick if .annonce-item:first-of-type isInViewport buttonMoreLeft.classList.toggle('_off')
// // when .__button-more.onclick if .annonce-item:last-of-type isInViewport buttonMoreRight.classList.toggle('_off')
