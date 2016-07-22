$(document).ready(function() {
     checkSize();
     $(window).resize(checkSize);
});

function checkSize() {
     if ($(window).width() <= 543)
     {
          // $("#collapsing-content").collapse("hide");
          $("#img-box").hide();
          $("#navigation-column").prependTo("#info-segment");
          $("#li-target").removeClass("padding-top-target");
     }
     else
     {
          $("#collapsing-content").collapse("show");
          $("#img-box").show();
          $("#navigation-column").appendTo("#info-segment");
          $("#li-target").addClass("padding-top-target");
     }
}
