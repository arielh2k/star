function findParent(el, className) {
  let check = el.parentNode.classList.contains(className);

  if (check === true) {
    return el.parentNode;
  } else {
    return findParent(el.parentNode, className);
  }
}

function bindingTabEvent(wrap) {
  let wrapEl = document.querySelectorAll(wrap);
  console.log(wrap);

  wrapEl.forEach(function (tabArea) {
    let btn = tabArea.querySelectorAll(".btn_tab");
    console.log(btn);
    btn.forEach(function (item) {
      item.addEventListener("click", function () {
        let parent = findParent(this, "tab_area");
        let idx = this.dataset["idx"];
        let depth = this.dataset["depth"];
        let btnArr = parent.querySelectorAll(
          '.btn_tab[data-depth="' + depth + '"]'
        );
        let contentArr = parent.querySelectorAll(
          '.content_area[data-depth="' + depth + '"]'
        );

        btnArr.forEach(function (btn) {
          btn.classList.remove("act");
        });
        this.classList.add("act");
        contentArr.forEach(function (content) {
          content.classList.remove("act");
        });
        parent
          .querySelector(
            '.content_area[data-idx="' + idx + '"][data-depth="' + depth + '"]'
          )
          .classList.add("act");
      });
    });
  });
}

bindingTabEvent(".tab_wrap");
