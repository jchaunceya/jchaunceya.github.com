/**
 * Created by john-atherton on 8/14/17.
 */

$(document).foundation();


$(document).ready(function() {
        var height = $("#navbar").outerHeight() ;
        height = height * 2;
        $("#navbar-spacer").css("height", height);
        $("#announcer").innerHTML(String(height));
    }
);