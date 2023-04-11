// const searchEl = document.querySelector('.search');
// const searchInputEl = searchEl.querySelector('input');

// searchEl.addEventListener('click', function(){

//     searchInputEl.focus();
// });

// searchInputEl.addEventListener('focus', function(){
//     searchEl.classList.add('focused');
//     searchInputEl.setAttribute('placeholder', '통합검색');
// });

// searchInputEl.addEventListener('blur', function(){
//     searchEl.classList.remove('focused');
//     searchInputEl.setAttribute('placeholder', '');
// });

// $(document).ready(function () {
//   $("input").each(function () {
//     $(this).bind("focus", function () {
//       $(".member-header").css("position", "absolute");
//       console.log("absolute");
//     });
//     $(this).bind("blur", function () {
//       $(".member-header").css("position", "fixed");
//       console.log("fixed");
//     });
//   });
// });

// if ("VisualViewport" in window) {
//   visualViewport.addEventListener("resize", handleResize);
//   function handleResize(event) {
//     const { height: visualViewportHeight } = event.target;
//     const eventName =
//       Math.ceil(visualViewportHeight) < window.innerHeight
//         ? "keyboardopen"
//         : "keyboardclose";
//     emitEvent.call(event, eventName);
//   }
//   function emitEvent(name) {
//     window.dispatchEvent(
//       new CustomEvent(name, {
//         detail: {
//           originalEvent: this,
//         },
//       })
//     );
//   }
// }
// if ("VisualViewport" in window) {
//   const debouncedHandleResize = debounce(handleResize, 100);
//   visualViewport.addEventListener("resize", debouncedHandleResize);
//   function handleResize(event) {
//     const { height: visualViewportHeight } = event.target;
//     const eventName =
//       Math.ceil(visualViewportHeight) < window.innerHeight
//         ? "keyboardopen"
//         : "keyboardclose";
//     emitEvent.call(event, eventName);
//   }
//   function emitEvent(name) {
//     window.dispatchEvent(
//       new CustomEvent(name, {
//         detail: {
//           originalEvent: this,
//         },
//       })
//     );
//   }
//   function debounce(fn, wait) {
//     let cancelId = null;
//     return function debounced(...args) {
//       clearTimeout(cancelId);
//       cancelId = setTimeout(fn.bind(this, ...args), wait);
//     };
//   }
// }

// 문서의 viewport 크기
let view1 = document.documentElement.clientHeight;
// 브라우저 viewport 의 스크롤 포함 크기
let view2 = window.innerHeight;
// 브라우저 창 크기
let view3 = window.outerHeight;
// window.addEventListener("resize", () => {
//   console.log(view1);
//   console.log(view2);
//   console.log(view3);
// });

const inputItem = document.querySelectorAll("input");
const header = document.querySelector(".member-header");

// inputItem.forEach((item) => {
//   item.addEventListener("focus", () => {
//     window.addEventListener("resize", () => {
//       let location = header.offsetTop;
//       let newViewport = view3 - view2;
//       if (view3 > view2) {
//         header.classList.add("active");
//       }
//     });
//   });
// });
visualViewport.addEventListener("resize", handleResize);
function handleResize(event) {
  const { height: visualViewportHeight } = event.target;
  const eventName =
    Math.ceil(visualViewportHeight) < window.innerHeight
      ? "keyboardpen"
      : "keyboardclose";
  emitEvent.call(event, eventName);

  function emitEvent(name) {
    window.dispatchEvent(
      new CustomEvent(name, {
        detail: {
          originalEvent: this,
        },
      }),
      //어떤 행동을 할지
      header.classList.add("active")
    );
  }
}
