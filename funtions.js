$(function() {
  $(".rslides").responsiveSlides();
});
$(function () {
  $("#slider4").responsiveSlides({
    auto: false,
    pager: false,
    nav: true,
    speed: 500,
    namespace: "callbacks",
    before: function () {
      $('.events').append("<li>before event fired.</li>");
    },
    after: function () {
      $('.events').append("<li>after event fired.</li>");
    }
  });
});
    ///MENU
$("#iconomenu").click(function () {
  $("#contenedormenu").toggleClass("abrirmenu")
})
