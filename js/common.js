let bodyWidth = window.innerWidth;
let orDim = document.querySelector(".orientation-dim");
let bodysec = document.querySelector("body");
const formControl = document.querySelectorAll("input");

var ios = navigator.userAgent.match(/(iPod|iPhone)/);
if (ios) {
  window.addEventListener("orientationchange", () => {
    if (window.matchMedia("(orientation: landscape)").matches) {
      formControl.forEach((inp) => {
        inp.blur();
      });
    } else if (window.matchMedia("(orientation: portrait)").matches) {
      resizeDelay();
      // window.scrollTo(0, 0);
      // window.document.body.scrollTop = 0;
    }
  });
}
var aos = /Android|iPod|BlackBerry/i.test(navigator.userAgent);
if (aos) {
  window.addEventListener("resize", () => {
    if (window.matchMedia("(orientation: landscape)").matches) {
      formControl.forEach((inp) => {
        inp.blur();
      });
    }
  });
}

function resizeDelay() {
  let delay = 100;
  let timer = null;
  clearTimeout(timer);
  timer = setTimeout(() => {
    document.location.reload();
  }, delay);
}

// if (isMobile) {
//     if (orDim) {
//       window.addEventListener("resize", () => {
//         let newWidth = window.innerWidth;
//         if (newWidth !== bodyWidth) {
//           bodyWidth = newWidth;
//           landscapeDim();
//         }
//         if (bodyWidth > 1000) {
//           orDim.classList.remove("is-show");
//         }
//       });

//       function landscapeDim() {
//         if (window.matchMedia("(orientation: landscape)").matches) {
//           orDim.classList.add("is-show");
//           bodysec.style.overflow = "hidden";
//           formControl.forEach((inp) => {
//             inp.blur();
//             console.log(inp);
//           });
//         } else if (window.matchMedia("(orientation: portrait)").matches) {
//           orDim.classList.remove("is-show");
//           bodysec.removeAttribute("style");
//         }
//       }
//       landscapeDim();
//     }
//   }
// function resizeDelay() {
//   let delay = 100;
//   let timer = null;
//   clearTimeout(timer);
//   timer = setTimeout(() => {
//     document.location.reload();
//   }, delay);
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
