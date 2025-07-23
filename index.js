const menu = document.getElementById("icon-ham");
let isOpen = false;

menu.addEventListener("click", () => {
  const hamMenu = document.getElementsByClassName("ham-menu")[0];

  if (!hamMenu) return;
  if (!isOpen) {
    hamMenu.style.display = "flex";
    menu.src = "./images/icon-close.svg";
  } else {
    hamMenu.style.display = "none";
    menu.src = "./images/icon-hamburger.svg";
  }

  isOpen = !isOpen;
});
