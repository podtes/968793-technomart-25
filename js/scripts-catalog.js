var buyButtons = document.querySelectorAll(".buy");
var buyForm = document.querySelector(".modal-cart-add");
var closeBuyFormButton = buyForm.querySelector(".modal-close");
var continueBuyFormButton = buyForm.querySelector(".continue-button"); 
var overlay = document.querySelector(".modal-position");
       
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
