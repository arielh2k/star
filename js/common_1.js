var isMobile = /Android|iPhone|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
let bodyWidth = window.innerWidth;
if (isMobile) {
    let orDim = document.querySelector(".orientation-dim");
    let bodysec = document.querySelector("body");

    if (orDim) {
        window.addEventListener("resize", () => {
            let newWidth = window.innerWidth;

            if (newWidth !== bodyWidth) {
                bodyWidth = newWidth;
                landscapeDim();
            }
            if (bodyWidth > 1000) {
                orDim.classList.remove("is-show");
            }
        });

        function landscapeDim() {
            if (window.matchMedia("(orientation: landscape)").matches) {
                orDim.classList.add("is-show");
                bodysec.style.overflow = "hidden";
            } else if (window.matchMedia("(orientation: portrait)").matches) {
                orDim.classList.remove("is-show");
                bodysec.removeAttribute("style");
            }
        }
        landscapeDim();
    }
}

// 가로모드 dim layer test
// const orDim = document.createElement("div");
// window.addEventListener("resize", () => {
//     if (window.matchMedia("(orientation: Landscape)").matches) {
//         orDim.classList.add("orientation-dim");
//         document.body.prepend(orDim);
//         orDim.innerHTML = `
//             <span>버터타임은<br><strong>모바일 가로모드 화면<strong>을<br>지원하지 않습니다</span>`;
//     } else if (window.matchMedia("(orientation: portrait)").matches) {
//         document.body.removeChild(orDim);
//     }
// });

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

function resizeDelay() {
    let delay = 100;
    let timer = null;
    clearTimeout(timer);
    timer = setTimeout(function () {
        document.location.reload();
    }, delay);
}
// mobile Fullmenu
const openBtn = document.querySelector(".btn-drawer-open");
const closeBtn = document.querySelector(".btn-drawer-close");
const fullMenu = document.querySelector(".header-response");

window.addEventListener("resize", () => {
    let newWidth = window.innerWidth;

    if (newWidth !== bodyWidth) {
        bodyWidth = newWidth;
        activeFullMenu();
    }
});

function activeFullMenu() {
    const dim = document.createElement("div");
    dim.classList.add("fullmenu-dim");

    openBtn.addEventListener("click", () => {
        fullMenu.classList.add("active");
        fullMenu.prepend(dim);
    });
    closeBtn.addEventListener("click", () => {
        fullMenu.classList.remove("active");
        fullMenu.removeChild(dim);
    });
}
activeFullMenu();
// function activeFullMenu() {
//     const dim = document.createElement("div");
//     dim.classList.add("fullmenu-dim");

//     openBtn.addEventListener("click", () => {
//         fullMenu.classList.add("active");
//         fullMenu.prepend(dim);
//     });
//     closeBtn.addEventListener("click", () => {
//         fullMenu.classList.remove("active");
//         fullMenu.removeChild(dim);
//     });
// }
// activeFullMenu();

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

    inputItem.addEventListener("keydown", () => {
        clear.style.display = "block";
        clear.classList.remove("is-hide");
    });
    clear.addEventListener("click", () => {
        inputItem.value = "";
        clear.classList.add("is-hide");
    });
});
