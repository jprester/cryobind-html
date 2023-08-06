// Menu
jQuery(document).ready(function ($) {
  $(".nav-mobile").html($(".site-nav").html());
  $("#hamb").show();
  $("#nav-trigger span").click(function () {
    if ($("nav.nav-mobile ul").hasClass("expanded")) {
      $("nav.nav-mobile ul.expanded").removeClass("expanded").slideUp(250);
      $(this).removeClass("open");
      $("#hamb").show();
      $("#x").hide();
    } else {
      $("nav.nav-mobile ul").addClass("expanded").slideDown(250);
      $(this).addClass("open");
      $("#hamb").hide();
      $("#x").show();
    }
  });
});

// Scroll to top
jQuery(document).ready(function ($) {
  //Check to see if the window is top if not then display button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".scroller").fadeIn();
    } else {
      $(".scroller").fadeOut();
    }
  });

  //Click event to scroll to top
  $(".scrollToTop").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 800);
    return false;
  });
});
