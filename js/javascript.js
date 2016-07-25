$(document).ready(function() {
     $(".card").removeClass("darken");
     $width = widthDeterminer();
     doSomething($width);
     $(window).resize(function() {
          heightSetter();
          var $newWidth = widthDeterminer();
          if ($newWidth != $width)
          {
               doSomething($newWidth);
               $width = $newWidth;
          }
          else
               return;
     });
});


function doSomething($size) {
     if ($size == "xs")
     {
          makeFontSmall();
          $("#img-box").hide();
          $("#li-target").removeClass("padding-top-target");
          $("#navigation-column").appendTo("#jumbo");

          $("#toggle-button").on("click", function() {
               $("#collapsing-content").on("shown.bs.collapse", function() {
                    if (widthDeterminer() == "xs")
                         $("#jumbo-row").slideUp("fast");
               });
               $("#collapsing-content").on("hidden.bs.collapse", function() {
                    $("#jumbo-row").slideDown("fast");
               });
          });
          $(".text-link").css("height", "44px");
     }
     else
     {
          if ($size == "sm")
          {
               $("#img-box").hide();
          }
          else
          {
               $("#img-box:hidden").show();
               makeFontLarge();
          }
          $("#collapsing-content:hidden").collapse("show");
          $("#jumbo:hidden").slideDown();
          $("#li-target").addClass("padding-top-target");
          $("#navigation-column").appendTo("#info-segment");
     }
     heightSetter();

};

function heightSetter() {
     var $size = widthDeterminer();
     if ($size == "xs")
     {
          $("#navigation-column").css("height", "auto");         // resets nav-height to
     }
     else {
          var $heightOfInfo = $("#info-box").height();
          $("#navigation-column").css("height", $heightOfInfo);

     }
};

function widthDeterminer() {
     var $curWidth = $(document).width();
     if ($curWidth <= 543)
          return "xs";
     if ($curWidth < 768)
          return "sm";
     else
          return "md";
};

function makeFontLarge() {
     $(".large-lg").addClass("large-lg-css");               // toggles larger font sizes ON
     $(".small-lg").addClass("small-lg-css");
};

function makeFontSmall() {
     $(".large-lg").removeClass("large-lg-css");            // toggles larger font sizes OFF
     $(".small-lg").removeClass("small-lg-css");
};
