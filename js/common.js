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

$(document).ready(function () {
  var mainNotice = document.querySelectorAll(".notice-pop");
  var noticeClose = document.querySelectorAll(".notice-pop .btn-close");
  var noticePosY = $(".notice-pop").outerHeight();
  $(mainNotice).animate({
    top: "50%",
    marginTop: -noticePosY / 2,
  });

  $(noticeClose).on("click", function () {
    $(this).closest(mainNotice).hide();
    $(".mask").remove();
    $("body").removeClass("overflow");
  });

  //휴면계정팝업 - 팝업 확인을 위한 sample,  조건 수정
  var dormantPopOpen = function () {
    var dormantPop = document.querySelector("#dormantPop");
    $(dormantPop).show();
    $(dormantPop).after("<div class='mask block'></div>");
  };
  dormantPopOpen();

  //로그인
  var login = function () {
    var inputWrap = $(".input-wrap");
    var logForm = $(".input-wrap input");

    $(logForm).on("focus", function () {
      $(this).parent(inputWrap).addClass("active");
      $(this).siblings("label").fadeOut("fast");
      $(".main-copyright").addClass("blind");
    });
    $(logForm).on("focusout", function () {
      $(this).parent(inputWrap).removeClass("active");
      $(".main-copyright").removeClass("blind");
      if ($(this).val() == "") {
        $(this).siblings("label").fadeIn("fast");
      }
    });
  };
  login();

  //약관동의
  var allCheckAgree = function () {
    $(".all-check").on("click", "#allCheck", function () {
      $(".terms-list").find("input").prop("checked", $(this).is(":checked"));

      $(".btn").toggleClass("btn-disabled");
    });

    $(".terms-list").on("click", "input", function () {
      var isChecked = true;
      $(".terms-list input").each(function () {
        isChecked = isChecked && $(this).is(":checked");
      });

      $("#allCheck").prop("checked", isChecked);
      if (isChecked) {
        $(".btn").removeClass("btn-disabled");
      } else {
        $(".btn").addClass("btn-disabled");
      }
    });
  };
  allCheckAgree();

  var clearInput = function () {
    var visible = Boolean($(".j-item input").val());
    if (!visible) {
      $(".j-item input").on("input", function () {
        $(this).siblings(".data-clear").addClass("block");
      });
      $(".j-item .data-clear").on("click", function () {
        $(this).siblings("input").val("");
        $(this).removeClass("block");
      });
    } else {
      $(this).removeClass("block");
    }
  };
  clearInput();

  //tab
  var infoTab = function () {
    $(".tab-cont:first").show();
    $(".info-tab a").on("click", function () {
      $(".info-tab a").removeClass("active");
      $(this).addClass("active");
      $(".tab-cont").hide();
      var activeTab = $(this).attr("rel");
      $("#" + activeTab).fadeIn();
    });
  };
  infoTab();

  //전체메뉴
  var drawerMenu = function () {
    var fullMenu = $(".drawer-menu");
    var posX = fullMenu.width();
    $(".aside-menu").on("click", function () {
      fullMenu.animate({
        display: "block",
        left: 0,
      });
      $(".drawer-menu").after("<div class='mask'></div");
      $(".mask").fadeIn(300);
      $("body").addClass("overflow");

      $(".mask").on("click", function () {
        fullMenu.animate({
          display: "none",
          left: -posX,
        });
        $(".mask").remove();
        $("body").removeClass("overflow");
      });
    });
  };
  drawerMenu();

  //년도 선택버튼
  // var sortBtn = function(){
  //     var btnSort = document.querySelectorAll('.chart-btn .btn-sort');
  //     $(btnSort).on('click', function(){
  //         $(btnSort).removeClass('active');
  //         $(this).addClass('active');
  //     });
  // }; sortBtn();

  //tooltip
  var tooltip = function () {
    $(".icon-tooltip").on("click", function () {
      $(this).closest("div.tip, div").children(".tooltip").fadeToggle(500);
    });
  };
  tooltip();

  //tip
  var boxTip = function () {
    $(".btn-tip").on("click", function () {
      $(this).closest(".unit-box").find(".tip").slideToggle(300);
      $(this).toggleClass("up");
    });
  };
  boxTip();

  //faq-tab
  var faqTab = function () {
    $(".accordion-list:first").show();
    $(".faq-tab a").on("click", function () {
      $(".faq-tab a").removeClass("active");
      $(this).addClass("active");
      $(".accordion-list").hide();
      var activeTab = $(this).attr("rel");
      $("#" + activeTab).fadeIn();
    });
  };
  faqTab();

  //팩트체크
  var accordionList = function () {
    var acBtn = $(".accordion-list dt a"),
      acDetail = $(".accordion-list dd"),
      faqLabelQ = $(".accordion-list dt .label-q"),
      faqLabelArr = $(".label-arr");

    $(acDetail).css("display", "none");

    $(acBtn).on("click", function (e) {
      e.preventDefault();
      acDetail.slideUp(300);
      faqLabelQ.removeClass("active");
      faqLabelArr.removeClass("up");

      if ($(this).parent().next().is(":hidden") == true) {
        $(this).parent().next().slideDown(300);
        $(this).closest("dt").find(faqLabelQ).addClass("active");
        $(this).closest("dt").find(faqLabelArr).addClass("up");
      }
    });
  };
  accordionList();

  // 시간될때 작업
  var header = $(".header._main");
  var page = $(".tab-cont");
  var pageOffsetTop = page.offset().top;
  $(window).resize(function () {
    pageOffsetTop = page.offset().top;
  });

  $(window).on("scroll", function () {
    if ($(window).scrollTop() >= pageOffsetTop) {
      header.addClass("action");
    } else {
      header.removeClass("action");
    }
  });

  var scrollTab = function () {};
  scrollTab();
});
