function createLinks()
{
    //Entry links
    $(".projectEntry a").click(function() {
        var href = $(this).attr("href");
        history.pushState({}, '', href);
        //$main.hide();
        $main.load(href + ' #project');
        //$main.fadeIn();
        return false;
    });

}

function addZoom()
{
    $("article img").hover(function() {
        $(this).css( 'cursor', 'url(/media/zoom.png), auto' );
        $(this).click(function() {
            alert('zoom it');
        });
    });

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

        $(function() {
            var $main = $("main");
            var $posts = $("#postItems"),

            init = function() {
                var href = $("latest").attr("href");
                $main.load(href + ' #project');
                                
            };


            createLinks = function() {
                //Entry links
                $(".projectEntry a").click(function() {
                    var href = $(this).attr("href");
                    history.pushState({}, '', href);
                    //$main.hide();
                    $main.load(href + ' #project');
                    //$main.fadeIn();
                    return false;
                });
            };


            init();
            createLinks();
            addZoom();

            // Menu links
            $("#buttons a").click(function() {
                var href = $(this).attr("href");
                history.pushState({}, '', href);
                if(href.indexOf("/info") >= 0) {
                    $main.load(href + ' #project', function() {
                        createLinks();
                    });
                } else {
                    $posts.load(href + ' #menu', function() {
                        createLinks();
                    });
                }
                
                return false;
            });
            

 
        });
        
    });
}(jQuery));
