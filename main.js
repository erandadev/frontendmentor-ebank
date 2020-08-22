// const openBtn = document.getElementById("menu-btn");
const navList = document.querySelector(".nav-list");
const openBtn = document.getElementById("open");
const overlay = document.querySelector(".overlay");
let isOpen = false;

openBtn.addEventListener("click", () => {
  //   if (!isOpen) {
  //     hamBurger.classList.add("rotate-out");
  //     menu.classList.add("fade-in");

  //     setTimeout(() => {
  //       hamBurger.src = "./images/icon-close.svg";
  //     }, 300);
  //     isOpen = true;
  //   } else {
  //     hamBurger.classList.remove("rotate-out");
  //     menu.classList.remove("fade-in");
  //     isOpen = false;

  //     setTimeout(() => {
  //       hamBurger.src = "./images/icon-hamburger.svg";
  //     }, 300);
  //   }

  openBtn.classList.remove("rotate");

  if (!isOpen) {
    openBtn.classList.add("rotate");
    overlay.style.display = "block";
    navList.classList.add("fade-in");

    setTimeout(() => {
      openBtn.src = "./images/icon-close.svg";
    }, 100);

    openBtn.addEventListener("animationend", () =>
      openBtn.classList.remove("rotate")
    );
    isOpen = true;
  } else {
    openBtn.classList.add("rotate");
    overlay.style.display = "none";
    navList.classList.remove("fade-in");

    setTimeout(() => {
      openBtn.src = "./images/icon-hamburger.svg";
    }, 100);

    openBtn.addEventListener("animationend", () =>
      openBtn.classList.remove("rotate")
    );

    isOpen = false;
  }
});

// const openBtn = document.querySelector("#open");
// const overlay = document.querySelector(".overlay");
// const navList = document.querySelector(".nav-list");
// let isOpen = false;

// const hammertime = new Hammer(myElement, myOptions);
// hammertime.on("pan", function (ev) {
//   console.log(ev);
// });
