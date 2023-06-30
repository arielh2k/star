const containerArea = document.querySelector(".contents-wrapper");
const fixedBtn = document.querySelector(".fixed-btn");
const fixedOption = document.querySelector(".fixed-btn-option");
const footerWrap = document.querySelector(".footer-wrap");

if (fixedBtn) {
    containerArea.classList.add("fixed-area");
}
if (fixedOption) {
    containerArea.classList.add("fixed-option");
}
if (footerWrap) {
    containerArea.style.paddingBottom = 10.5 + "rem";
}

// modal
const modalSection = document.querySelector("body");
const modals = document.querySelectorAll(".modal");
if (modals) {
    modalSection.addEventListener("click", (e) => {
        const modalId = e.target.dataset.modal;
        if (modalId) {
            const modalLayer = document.getElementById(modalId);
            modalLayer.classList.add("is-show");
            modalSection.style.overflow = "hidden";
        }
    });
    const modalClose = document.querySelectorAll(".modal-close");
    modalClose.forEach((btn) => {
        btn.addEventListener("click", () => {
            modals.forEach((modal) => {
                modal.classList.remove("is-show");
                modalSection.removeAttribute("style");
            });
        });
    });
}

function toastMsg(msg) {
    let removeToast;
    const toast = document.querySelector(".toast");

    if (toast.classList.contains("active")) {
        clearTimeout(removeToast);
        removeToast = setTimeout(() => {
            toast.classList.remove("active");
        }, 2000);
    } else {
        removeToast = setTimeout(() => {
            toast.classList.remove("active");
        }, 2000);
    }
    toast.classList.add("active");
    toast.textContent = msg;
}

const snsBtnGroup = document.querySelector(".sns-btn-group");
const snsBtnItem = document.querySelectorAll(".btn-item");
if (snsBtnGroup) {
    snsBtnItem.forEach((btn) => {
        if (btn.classList.contains("active")) {
            const tooltip = document.createElement("span");
            tooltip.classList.add("log-tooltip");
            tooltip.textContent = "최근로그인";
            btn.append(tooltip);
        }
    });
}

const inpField = document.querySelectorAll(".inp-field");
inpField.forEach((field) => {
    const inputItem = field.querySelector(".c-inp");
    const clear = field.querySelector(".i-clear");
    if (clear) {
        inputItem.addEventListener("keydown", (e) => {
            field.classList.add("is-clear");
            if (
                e.target.value == "" ||
                e.target.value == null ||
                e.target.value == undefined
            ) {
                field.classList.remove("is-clear");
            }
        });
        clear.addEventListener("click", () => {
            inputItem.value = "";
            field.classList.remove("is-clear");
        });
    }
});

// tab
const tabWrap = document.querySelector(".tab-wrap");
const tabs = document.querySelector(".tabs");

const tabBtns = document.querySelectorAll(".tabs .tab-btn");
const tabPanel = document.querySelectorAll(".tab-wrap .tab-content");
if (tabWrap) {
    tabs.addEventListener("click", (e) => {
        const id = e.target.dataset.id;
        console.log(id);
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
const accordians = document.querySelectorAll(
    ".board-list.type-accordian .list-item"
);
if (accordianWrap) {
    accordians.forEach((accordian) => {
        const accBtn = accordian.querySelector(".item-head");
        accBtn.addEventListener("click", () => {
            const label = accBtn.querySelector(".flag-label").classList;
            accordians.forEach((item) => {
                if (item !== accordian) {
                    item.classList.remove("active");
                    item.classList.remove("waiting");
                    item.classList.remove("complete");
                }
            });

            if (label.contains("waiting")) {
                accordian.classList.add("waiting");
            } else if (label.contains("complete")) {
                accordian.classList.add("complete");
            }

            accordian.classList.toggle("active");
        });
    });
}

// product list type switch
const sortSwitchWrap = document.querySelector(".list-switch");
const productList = document.querySelector(".product-list");

if (sortSwitchWrap) {
    sortSwitchWrap.addEventListener("click", (e) => {
        const targetType = e.target;
        const btnList = targetType.classList.contains("icon-list");
        const switchBtns = sortSwitchWrap.querySelectorAll(".switch-btn");
        switchBtns.forEach((btn) => {
            btn.classList.remove("active");
        });

        if (btnList) {
            targetType.classList.add("active");
            productList.classList.remove("type-tile");
            productList.classList.add("type-list");
        } else {
            targetType.classList.add("active");
            productList.classList.remove("type-list");
            productList.classList.add("type-tile");
        }
    });
}
// switch-toggle
const switchToggle = document.querySelectorAll(".switch-toggle");
if (switchToggle) {
    switchToggle.forEach((item) => {
        const switchBtn = item.querySelector(".switch-button");
        const isChecked = switchBtn.checked;
        const switchTxt = item.querySelector(".switch-txt");
        console.log(switchTxt);
        if (isChecked) {
            switchTxt.textContent = "켜짐";
        } else {
            switchTxt.textContent = "꺼짐";
        }
    });
}
