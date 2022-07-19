// primeira forma de resolver :

function menuToggle() {
  let menuArea = document.getElementById("menu-area");

  if (menuArea.style.width == "200px") {
    menuArea.style.width = "0px";
  } else {
    menuArea.style.width = "200px";
  }
}

// segunda maneira :

/* CSS
.menu-opened {
  width: 200px !important;
}
*/

// function menuToggle() {
//   let menuArea = document.getElementById("menu-area");

//   if (menuArea.classList.contains("menu-opened") == true) {
//     menuArea.classList.remove("menu-opened");
//   } else {
//     menuArea.classList.add("menu-opened");
//   }
// }
