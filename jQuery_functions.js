$(document).ready(function (){
    
     //click the first button to make it disapear and make the paragraph red
    $("button:first").click(function(){
        $(this).hide();
    }); 
    $("button:first").click(function(){
        $("p:first").addClass("red");
    });

    // click the second button and it will make the image apear and disapear
    $("#slide").click(function(){
        $("#hero").slideToggle("slow");
    });

    // click the 3rd button to append a paragraph
    $("button:third").click(function(){
        $("p:third").append("Appended text");
    });
    //hover over and change the text color
    $("span").hover(function(){
        $(this).css("color", "yellow");
        }, function(){
        $(this).css("color", "pink");
        });
    //$("#hide").click(function(){
    //    $(this).hide();
    //});
    //$("#show").click(function(){
    //    $(this).show();
    //});
    
    //
});
