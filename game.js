
var colourButtons = ["red", "blue", "green", "yellow"];
var gamepattern = [];
var userUnlickedPattern=[];
var level=0;
var start=false;


$(".btn").click(function(){
 
    userChosenColour=this.id;
    userUnlickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    

});

console.log("upper: " +start);


$("body").keypress(function(event){
        if(!start){
        
            var pressedKey=event.key;
    
            start=true;
            gameSequence();
        
            console.log("inner:"+ start);
        }

});


console.log("outer: " +start);





function gameSequence() {
    
    level++;
    $("h1")[0].innerHTML="level "+level;



    var i = Math.floor(Math.random() * 4);
    var randomChosenColour = colourButtons[i];
   
    gamepattern.push(randomChosenColour);;
    playSound(randomChosenColour);



};



function playSound(colour){

    var id = '#'+colour;
    // $(id).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    var audio = new Audio("sounds/" + colour + ".mp3");
    audio.play();
    animatepress(colour);

   
}


function animatepress(colour){
    var id = '#'+colour;
   $(id).addClass("pressed");
    setTimeout(function(){
        $(id).removeClass("pressed");
    },100)
}

