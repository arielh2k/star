/* 2023-04-20 */
const orDim = document.body.querySelector(".orientation-dim");

function checkTouchable() {
  orDim.dataset.touchable = !!window.ontouchstart;
}
checkTouchable();

// let bodyWidth = window.innerWidth;
// let orDim = document.querySelector(".orientation-dim");
// let bodysec = document.querySelector("body");
// const formControl = document.querySelectorAll("input");
// var ios = navigator.userAgent.match(/(iPod|iPhone)/);
// if (ios) {
//   window.addEventListener("orientationchange", () => {
//     if (window.matchMedia("(orientation: landscape)").matches) {
//       formControl.forEach((inp) => {
//         inp.blur();
//       });
//     } else if (window.matchMedia("(orientation: portrait)").matches) {
//       window.scrollTo(0, 0);
//       window.document.body.scrollTop = 0;
//     }
//   });
// }

// var aos = /Android|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)
//   ? true
//   : false;
// if (aos) {
//   window.addEventListener("resize", () => {
//     if (window.matchMedia("(orientation: landscape)").matches) {
//       orDim.style.display = "block";
//       formControl.forEach((inp) => {
//         inp.blur();
//       });
//     }
//   });
// }

// GNG
const headerLayout = document.querySelector(".header-layout");
const gnbItems = document.querySelectorAll(".gnb-item");

gnbItems.forEach((item) => {
  const dropdown = item.classList.contains("dropdown");
  if (window.matchMedia("(max-width: 540px)").matches) {
    item.addEventListener("click", () => {
      gnbItems.forEach((menu) => {
        menu.classList.remove("active");
      });
      if (dropdown) {
        item.classList.toggle("active");
      }
    });
  } else {
    item.addEventListener("mouseover", () => {
      gnbItems.forEach((menu) => {
        menu.classList.remove("active");
      });
      if (dropdown) {
        item.classList.add("active");
      }
    });
    headerLayout.addEventListener("mouseleave", () => {
      item.classList.remove("active");
    });
  }
});

// mobile Fullmenu
const openBtn = document.querySelector(".btn-drawer-open");
const closeBtn = document.querySelector(".btn-drawer-close");
const fullMenu = document.querySelector(".header-response");
const dim = document.createElement("div");

openBtn.addEventListener("click", fullMenuOpen);
closeBtn.addEventListener("click", fullMenuClose);

function fullMenuOpen() {
  dim.classList.add("fullmenu-dim");
  fullMenu.classList.add("active");
  fullMenu.prepend(dim);
}
function fullMenuClose() {
  if (dim.classList.contains("fullmenu-dim")) {
    fullMenu.classList.remove("active");
    fullMenu.removeChild(dim);
  }
}

// modal
const modalSection = document.querySelector("body");
const modals = document.querySelectorAll(".modal");
const modalClose = document.querySelectorAll(".modal-close");
if (modalSection) {
  modalSection.addEventListener("click", (e) => {
    const modalId = e.target.dataset.modal;
    if (modalId) {
      const modalLayer = document.getElementById(modalId);
      modalLayer.classList.add("is-show");
      modalSection.style.overflow = "hidden";
    }
  });

  modalClose.forEach((btn) => {
    btn.addEventListener("click", () => {
      modals.forEach((modal) => {
        modal.classList.remove("is-show");
        modalSection.removeAttribute("style");
      });
    });
  });
}
