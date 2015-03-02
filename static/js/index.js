(function ($) {
    "use strict";
    $(document).ready(function(){

        // Hide / Show menu on scroll
        $("#sidebar" ).scroll(function() {
            var scrollPos = $("#sidebar").scrollTop();
            var researchButtonPosition = $("#researchButton").position();
            $("#jsDebug").html("scroll: " + scrollPos + "name: " + researchButtonPosition.top);

        });

        $(function() {
            var $main = $("main");
            var $posts = $("#postItems"),

            init = function() {
                //var href = $("latest").attr("href");
                //$main.load(href + ' #project');
                                
            };
            init();

            // Entry links
            // $(".projectEntry a").click(function() {
            //     var href = $(this).attr("href");
            //     history.pushState({}, '', href);
            //     $main.load(href + ' #project');
            //     return false;
            // });

            // // Menu links
            // $("#buttons a").click(function() {
            //     var href = $(this).attr("href");
            //     history.pushState({}, '', href);
            //     if(href.indexOf("/info") >= 0) {
            //         $main.load(href + ' #project');
            //     } else {
            //         $posts.load(href + ' #menu');
            //     }
            //     return false;
            // });

        });
        
    });
}(jQuery));
