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
// $(document).ready(function () {});
// _bindSubPageEvents: function() {
//     var self = this;
//     var beforeScrollTop = 0,
//     scrollTimer = null,
//     setSubBGPosition = function( y ) {
//         var $subBG = $('.ui_sub_bg');
//         var marginTop = Math.max($subBG.children().outerHeight(true), $subBG.outerHeight(true))-self.$header.outerHeight(true);
//         marginTop += y || 0;
//         $subBG.next().css( {'margin-top':marginTop} );
//     }();

//     var $headerPage = self.$headerPage;
//     var eventNames = { scrollstart:'scrollstart'+(this.eventNS), scroll:'scroll.'+(this.eventNS) };
//     var checkHeader = function(_beforeScrollTop, $obj) {
//         var isScrollDown = ( $obj.scrollTop() > _beforeScrollTop ) ? true: false;
//         if(!$('#wrap').is('.main')){
//             if( isScrollDown ) {
//                 $headerPage.removeClass('head_down').addClass('head_up');
//             } else {
//                 $headerPage.removeClass('head_up').addClass('head_down');
//             }
//         }
//     };

//     $(window).on( eventNames.scrollstart, function( e ) {
//         beforeScrollTop = $(window).scrollTop();
//     }).on( eventNames.scroll, function() {
//         clearTimeout( scrollTimer );
//         scrollTimer = setTimeout( function() {
//             checkHeader( beforeScrollTop, $(window) );
//         }, 20 );
//     });
//     self.winOff( eventNames.scrollstart+' '+eventNames.scroll );
// }

// function active() {
//   scroll = window.scrollY;
//   htmlEl.classList.add("keyboard--on");
//   bodyEl.style.top = `${-scroll}px`;
// }

// function reset() {
//   htmlEl.classList.remove("keyboard--on");
//   bodyEl.style.removeProperty("top");
//   window.scrollTo(0, scroll);
// }

// let iosAsideGap = 0;
// let scroll;
// const bodyEl = document.body;
// const htmlEl = document.getElementsByTagName("html")[0];

// function handleVisualViewportResize() {
//   const currentVisualViewport = window.visualViewport.height;
//   if (htmlEl.classList.contains("keyboard--on")) {
//     const scrollHeight = window.document.documentElement.scrollHeight;
//     iosAsideGap = scrollHeight - currentVisualViewport;
//     window.scrollTo(0, iosAsideGap);
//     bodyEl.style.top = `${-(scroll - iosAsideGap)}px`;
//   }
// }
// window.visualViewport.onresize = handleVisualViewportResize;

let iosAsideGap = 0;
let scroll;
let scrollDetail;
const bodyEl = document.body;
const htmlEl = document.getElementsByTagName("html")[0];
const headerEl = document.querySelector(".member-header");
function scrollMove() {
  let currentVisualViewport = window.visualViewport.height;
  let windowViewport = window.innerHeight;
  //   console.log(currentVisualViewport);
  //   console.log(windowViewport);
  if ((currentVisualViewport = windowViewport)) {
    bodyEl.style.position = "fixed";
  }
  //   if (htmlEl.classList.contains("keyboard--on")) {
  //     const scrollHeight = window.document.scrollingElement.scrollHeight;
  //     iosAsideGap = scrollHeight - currentVisualViewport;
  //     window.scrollTo(0, iosAsideGap);
  //     bodyEl.style.top = `${-(scroll - iosAsideGap)}px`;
  //   }
}
window.visualViewport.onresize = scrollMove;

function active() {
  scroll = window.scrollY;
  htmlEl.classList.add("keyboard--on");
  bodyEl.style.top = `${-scroll}px`;
}
function reset() {
  htmlEl.classList.remove("keyboard--on");
  bodyEl.style.removeProperty("top");
  window.scrollTo(0, scroll);
}
