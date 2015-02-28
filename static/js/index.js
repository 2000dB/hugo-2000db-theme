loadContent = function(href) {
}


(function ($) {
    "use strict";
    $(document).ready(function(){


        // Hide / Show menu on scroll
        $("#sidebar" ).scroll(function() {
            var scrollPos = $("#sidebar").scrollTop();
            var researchButtonPosition = $("#researchButton").position();
            $("#jsDebug").html("scroll: " + scrollPos + "name: " + researchButtonPosition.top);

        });


        // on click, load entry - add that this happens on load too
        $(function() {

            var $main = $("main"),

            init = function() {
                var href = $("latest").attr("href");
                $main.load(href + ' #project');
            };

            init();

            $(".link").click(function() {
                var href = $(this).attr("href");
                history.pushState({}, '', href);
                $main.load(href + ' #project');
                return false;
            });
        });
        
    });
}(jQuery));
