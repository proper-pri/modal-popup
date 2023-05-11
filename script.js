const popup = document.querySelector(".pop-container")
const open = document.querySelector("#open-btn")
const close = document.querySelector("#close-btn")
const darkModeBtn = document.querySelector('#dark-mode-btn');

open.addEventListener('click',()=>{
    popup.classList.add("show-popup")
});

close.addEventListener('click',()=>{
    popup.classList.remove("show-popup")
})
// When the user clicks outside of the popup, hide it
window.addEventListener('click', function(event) {
    if (event.target === popup) {
      popup.classList.remove('show-popup');
    }
  });
  // When the user clicks the dark mode button, toggle the dark mode class on and off
darkModeBtn.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
  });