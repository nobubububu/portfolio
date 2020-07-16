$(() => {
  $(".slide").slick({
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    pauseOnHover: false,
    arrows: false,
  });
  /*ハンバーガーメニュー*/
  $("#nav-open").on("click", function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $("#nav-content").removeClass("open").fadeOut(100);
    } else {
      $(this).addClass("active");
      $("#nav-content").fadeIn(100).addClass("open");
    }
  });
  /*ボタン押した時のスクロール*/
  $(".self-button").on("click", function () {
    $("html,body").animate({
      scrollTop: $("#profile-title").offset().top,
    });
    $("#nav-content").removeClass("open").fadeOut(100);
    $("#nav-open").removeClass("active");
  });
  $(".history-button").on("click", function () {
    $("html,body").animate({
      scrollTop: $("#history-title").offset().top,
    });
    $("#nav-content").removeClass("open").fadeOut(100);
    $("#nav-open").removeClass("active");
  });
  $(".form-button").on("click", function () {
    $("html,body").animate({
      scrollTop: $("#form-title").offset().top,
    });
    $("#nav-content").removeClass("open").fadeOut(100);
    $("#nav-open").removeClass("active");
  });
  $("#page_top").hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#page_top").fadeIn();
    } else {
      $("#page_top").fadeOut();
    }
  });
});
