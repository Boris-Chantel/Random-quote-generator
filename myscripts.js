$(document).ready (function() {
    var r = ["You have to learn the rules of the game. And then you have to play better than anyone else", "Look deep into nature, and then you will understand everything better.", "Try not to become a man of success, but rather try to become a man of value."];
    var temp = -1;
    
   
        $("button").on('click', function() {
            
            var x = Math.floor(Math.random() * 3);
                
                while (x === temp) {
                        x = Math.floor(Math.random() * 3);
                    }
                    var output = r[x];
                        output += "<br><br><a href='http://twitter.com/home/?status=" + r[x] + "' target=;_blank'><i class= 'fa fa-twitter fa-3x'></i></a>"                        
                $("#quote").html(output);
                
                temp = x;
         
        });
    
    
}); //end ready


















/*
var r = ["You have to learn the rules of the game. And then you have to play better than anyone else"];
var r2 = ["Look deep into nature, and then you will understand everything better.Albert Einstein"]
var r3 = ["Try not to become a man of success, but rather try to become a man of value."]
*/

//document.getElementById('quote').innerHTML = r[0];


//$("#whatever").text(r2);