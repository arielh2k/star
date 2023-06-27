// var isMobile = /Android|iPhone|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;

// if (isMobile) {
//     let bodyWidth = window.innerWidth;
//     let orDim = document.querySelector(".orientation-dim");
//     let bodysec = document.querySelector("body");
//     const formControl = document.querySelectorAll("input");

//     if (orDim) {
//         window.addEventListener("resize", () => {
//             let newWidth = window.innerWidth;
//             if (newWidth !== bodyWidth) {
//                 bodyWidth = newWidth;
//                 landscapeDim();
//             }
//             if (bodyWidth > 1000) {
//                 orDim.classList.remove("is-show");
//             }
//         });

//         function landscapeDim() {
//             if (window.matchMedia("(orientation: landscape)").matches) {
//                 orDim.classList.add("is-show");
//                 bodysec.style.overflow = "hidden";
//                 formControl.forEach((inp) => {
//                     inp.blur();
//                     console.log(inp);
//                 });
//             } else if (window.matchMedia("(orientation: portrait)").matches) {
//                 orDim.classList.remove("is-show");
//                 bodysec.removeAttribute("style");
//             }
//         }
//         landscapeDim();
//     }
// }

/* 2023-04-26 */
function checkTouchable() {
    document.body.dataset.touchable = !!window.ontouchstart;
}
checkTouchable();

/* 2023-04-20 */
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
            window.scrollTo(0, 0);
            window.document.body.scrollTop = 0;
        }
    });
}

var aos = /Android|iPhone|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
if (aos) {
    window.addEventListener("resize", () => {
        let newWidth = window.innerWidth;
        if (newWidth !== bodyWidth) {
            bodyWidth = newWidth;
            if (window.matchMedia("(orientation: landscape)").matches) {
                orDim.style.display = "block";
                formControl.forEach((inp) => {
                    inp.blur();
                });
            } else if (window.matchMedia("(orientation: portrait)").matches) {
                orDim.style.display = "none";
            }
        }
    });
}

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
// PP11021025-5500 추가
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
    document.body.style.overflow = "hidden";
}
function fullMenuClose() {
    if (dim.classList.contains("fullmenu-dim")) {
        fullMenu.classList.remove("active");
        fullMenu.removeChild(dim);
        document.body.removeAttribute("style");
    }
}

// tab
const tabWrap = document.querySelector(".tab-wrap");
const tabs = document.querySelector(".tabs");
const tabBtns = document.querySelectorAll(".tabs .tab-btn");
const tabPanel = document.querySelectorAll(".tab-wrap .tab-content");
if (tabWrap) {
    tabs.addEventListener("click", (e) => {
        const id = e.target.dataset.id;
        if (id) {
            tabBtns.forEach((btn) => {
                btn.classList.remove("active");
            });
            e.target.classList.add("active");
            tabPanel.forEach((panel) => {
                panel.classList.remove("active");
            });
            const el = document.getElementById(id);
            el.classList.add("active");
        }
    });
}

// accordian
const accordianWrap = document.querySelector(".type-accordian");
const accordians = document.querySelectorAll(".bbs-list.type-accordian .list-item");
if (accordianWrap) {
    accordians.forEach((accordian) => {
        const accBtn = accordian.querySelector(".acc-toggle");
        accBtn.addEventListener("click", () => {
            // accordians.forEach((item) => {
            //     if(item !== accordian) {
            //         item.classList.remove('active')
            //     }
            // })
            accordian.classList.toggle("active");
        });
    });
}

const selectContainer = document.querySelector(".custom-select");
const selectBox = document.querySelector(".custom-select");
const selectBtn = document.querySelector(".select-btn");
const options = document.querySelectorAll(".option-item");
if (selectContainer) {
    const handleSelect = (item) => {
        selectBtn.innerHTML = item.textContent;
        selectBox.classList.remove("active");
    };
    options.forEach((option) => {
        option.addEventListener("click", () => {
            handleSelect(option);
        });
    });

    selectBtn.addEventListener("click", () => {
        if (selectBox.classList.contains("active")) {
            selectBox.classList.remove("active");
        } else {
            selectBox.classList.add("active");
        }
    });
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

// 로그인 팝업 clear 2023-03-29
const loginField = document.querySelectorAll(".form-item");
loginField.forEach((field) => {
    const inputItem = field.querySelector(".inp-unset");
    const value = inputItem.value;
    const clear = field.querySelector(".btn-input-clear");

    inputItem.addEventListener("keydown", (e) => {
        clear.style.display = "block";
        clear.classList.remove("is-hide");
        if (e.target.value == "" || e.target.value == null || e.target.value == undefined) {
            clear.style.display = "none";
        }
    });

    inputItem.addEventListener("input", function (e) {
        if (e.target.value == "" || e.target.value == null || e.target.value == undefined) {
            clear.style.display = "none";
        }
    });

    clear.addEventListener("click", () => {
        inputItem.value = "";
        clear.classList.add("is-hide");
    });
});
