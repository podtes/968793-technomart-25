var contactLink = document.querySelector(".contact-link");
var miniMap = document.querySelector(".iframe-map-small");
var popUpForm = document.querySelector(".modal-contact");
var form = popUpForm.querySelector(".contact-form");
var popUpMap = document.querySelector(".modal-map");
var overlay = document.querySelector(".modal-position");
var closeFormButton = popUpForm.querySelector(".modal-close");
var closeMapButton = popUpMap.querySelector(".modal-close");
var userName = form.querySelector("[name=name]");
var email = form.querySelector("[name=email]");
var message = form.querySelector("[name=message]");
var buyButtons = document.querySelectorAll(".buy");
var buyForm = document.querySelector(".modal-cart-add");
var closeBuyFormButton = buyForm.querySelector(".modal-close");
var continueBuyFormButton = buyForm.querySelector(".continue-button"); 


contactLink.addEventListener("click", function(evt) {
  evt.preventDefault();
  popUpForm.classList.add("modal-show");
  overlay.classList.add("modal-position-show");
  userName.focus();
});
 
closeFormButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  popUpForm.classList.remove("modal-show");
  overlay.classList.remove("modal-position-show");
});
      
miniMap.addEventListener("click", function(evt) {
  evt.preventDefault();
  popUpMap.classList.add("modal-show");
  overlay.classList.add("modal-position-show");
});
      
closeMapButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  popUpMap.classList.remove("modal-show");
  overlay.classList.remove("modal-position-show");
});
      
form.addEventListener("submit", function(evt) {
  if (!userName.value || !email.value || !message.value) {
    evt.preventDefault();
    popUpForm.classList.add("modal-contacts-wrong");
    console.log("Введите свои данные или текст!");
  } else {
    popUpForm.classList.remove("modal-show");
    overlay.classList.remove("modal-position-show");
    console.log("Все ок, отправляем форму!");
  }
});

for (var i = 0; i < buyButtons.length; i++) {
    buyButtons[i].addEventListener("click", function (evt) {
      evt.preventDefault();
      buyForm.classList.add("modal-show");
      overlay.classList.add("modal-position-show");
  }
)};
      
closeBuyFormButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  buyForm.classList.remove("modal-show");
  overlay.classList.remove("modal-position-show");
});
      
continueBuyFormButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  buyForm.classList.remove("modal-show");
  overlay.classList.remove("modal-position-show");
});

