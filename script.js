$(document).ready(function() {
     //Set up the initial 16x16 grid.
    for(var i = 0; i < 256; i++)
    {
        $("#grid").append('<div class="square"></div>');
    }
    
    $(".square").mouseenter(function() {
         var $color = "#" + (Math.random()*0xFFF000<<0).toString(16);
         var $hue = Math.floor(Math.random() * 360);
         var $op = Math.floor(Math.random() * 100);

        /*$(this).css("background-color", $color);*/
        $(this).css({'background-color': $color, 'hue-rotate': $hue, 'opacity': $op});
     });

});

/*
$(document).ready(function() {
    
   
     
    $(".square").mouseeenter(function() {
       $(this).css("background-color": "black"); 
    });
});*/


