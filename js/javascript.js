


$(document).ready(function() {
     checkSize();
     $(window).resize(checkSize);
});



function checkSize() {
     if ($(document).width() <= 543) // hide collapse show button
     {
          $(".large-lg").removeClass("large-lg-css");            // toggles larger font sizes OFF
          $(".small-lg").removeClass("small-lg-css");
          $("#navigation-column").css("height", "auto");         // resets nav-height to
          $("#img-box").hide();
          $("#navigation-column").prependTo("#info-segment");
          $("#li-target").removeClass("padding-top-target");
     }
     else
     {
          if ($(document).width() >= 768)
               $("#img-box").show();
          else
               $("#img-box").hide();

          $(".large-lg").addClass("large-lg-css");               // toggles larger font sizes ON
          $(".small-lg").addClass("small-lg-css");
          $("#li-target").addClass("padding-top-target");
          var $heightOfInfo = $("#info-segment").height();
          $("#navigation-column").css("height", $heightOfInfo);
          $("#collapsing-content").collapse("show");
          $("#navigation-column").appendTo("#info-segment");
     }
}
