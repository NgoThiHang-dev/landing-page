$(document).ready(function () {
  $(".content").waypoint(
    function (a) {
      "down" == a
        ? $(".glo-top-header").addClass("sticky")
        : $(".glo-top-header").removeClass("sticky");
    },
    { offset: "600px" }
  ),
    //scroll
    $("a").click(function (a) {
      $("html, body").animate(
        { scrollTop: $($.attr(this, "href")).offset().top },
        700
      ),
        a.preventDefault();
    }),
    // mobile navigation
    $(".mobile-nav-icon").click(function () {
      $(".glo-main-nav").slideToggle(300);

      if ($(".mobile-nav-icon").hasClass("fa-bars")) {
        $(".mobile-nav-icon").addClass("fa-times");
        $(".mobile-nav-icon").removeClass("fa-bars");
      } else {
        $(".mobile-nav-icon").addClass("fa-bars");
        $(".mobile-nav-icon").removeClass("fa-times");
      }
    });
});
