$(document).ready(function() {
     //Set up the initial 16x16 grid.
    for(var i = 0; i < 256; i++)
    {
        $("#grid").append('<div class="square"></div>');
    }
    
    //If the mouse enters a square, assign a random color with a random hue and opacity. 
    $(".square").mouseenter(function() {
         var $color = "#" + (Math.random()*0xFFF000<<0).toString(16);
         var $hue = Math.floor(Math.random() * 360);
         var $op = Math.floor(Math.random() * 100);

        $(this).css({'background-color': $color, 'hue-rotate': $hue, 'opacity': $op});
     });
     
     //If a user clicks this button, all squares are cleared.
     $('#clear').click(function(){
         var $clear = confirm("Are you sure you want to clear? ");
                  
         if ($clear) {
         $(".square").css("background-color", "transparent");
         }
     });

     //Change number of squares based on user input.
     $('#change-size').click(function() {
         var $numRows = prompt("How many rows do you want to use? ");
         var $numCol = prompt("How many columns do you want to use? ");
         
         //Verify that the user entered numbers.
         if ($numRows == "" || $numCol == "" ||            //No empty input
	     isNaN($numRows) || isNaN($numCol))            //Inputs are numbers
         {      
             alert("Oops! You can only input numbers! ");
         }

         var $squareHeight = Math.round(720 / $numRows);
         var $squareWidth = Math.round(720 / $numCol);

         $('.square').css({'height': $squareHeight, 'width': $squareWidth});

         //Clear current sketch
         $(".square").css("background-color", "transparent");
         
         //Create a new set of squares
         for (var i = 0; i < $numRows; i++)
         {
             if (i != 0) 
             {
                 $('#grid').append('<br><div class="square"></div>');
             }
             else 
             {
                   $('#grid').append('<div class="square"></div>');
             }
             
             for (var j = 0; j < $numCol; j++)
             {
                   $('#grid').append('<div class="square"></div>');
             }
         }

     });  

});


