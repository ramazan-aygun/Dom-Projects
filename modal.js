"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnShowModal = document.querySelectorAll(".show-modal");
const close = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
const open = function () {
  console.log("Button clicked");
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  // modal.style.display = "block";  yukarıdaki 2 satırla aynı işi yapar.
};

console.log(btnShowModal);

//open the modal
for (let i = 0; i < btnShowModal.length; i++) {
  btnShowModal[i].addEventListener("click", open);
}

//close the modal
btnCloseModal.addEventListener("click", close);
overlay.addEventListener("click", close);

// keydown -> Tuşa bastığın anda çalışır.
// keypress -> Tuşa belli bir süre basınca çalışır.
// keyup -> Bas-çek yapınca çalışır.

//close modal with ESC
document.addEventListener("keydown", function (e) {
  console.log(e.key);
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    close();
  }
});
