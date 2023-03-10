
var colourButtons = ["red", "blue", "green", "yellow"];
var gamepattern = [];
var userUnlickedPattern = [];
var level = 0;
var start = false;
var clickNo=0;


$(".btn").click(function () {
    userChosenColour = this.id;
    userUnlickedPattern.push(userChosenColour);
    var result=checkSequence(clickNo);

    if(!result){
        wrongClick();

        
     
        
    }
    else if(clickNo==gamepattern.length){
        clickNo=0;
        userUnlickedPattern=[];
       setTimeout(gameSequence,1500) ;
    }
    else{

    }


});





// console.log("entered inside function");

$("body").keypress(function (event) {
    if (start == false) {

        var pressedKey = event.key;

        start = true;
        
        gameSequence();

        // console.log("inner:"+ start);

    }

 
});
// console.log("exited from keypress function");


function checkSequence(i){


    

console.log(clickNo);
    if(userUnlickedPattern[i]!=gamepattern[i]){
        //show warning
        //reset game

        userUnlickedPattern=[];
        return false;
    }

    playSound(userChosenColour);
    clickNo++;
    return true;
}





function gameSequence() {

    level++;
    $("h1")[0].innerHTML = "level " + level;



    var i = Math.floor(Math.random() * 4);
    var randomChosenColour = colourButtons[i];

    gamepattern.push(randomChosenColour);;
    playSound(randomChosenColour);



};



function playSound(colour) {

    var id = '#' + colour;
    // $(id).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    var audio = new Audio("sounds/" + colour + ".mp3");
    audio.play();
    animatepress(colour);


}


function animatepress(colour) {
    var id = '#' + colour;
    $(id).addClass("pressed");
    setTimeout(function () {
        $(id).removeClass("pressed");
    }, 100)
}

function resetGame(){

    // $("h1")[0].innerHTML = "Press A Key to Start";
    start=false;
    clickNo=0;
    level=0; 
    gamepattern=[];
    userUnlickedPattern=[];
    

}


function wrongClick(){
    $("h1")[0].innerHTML = "Game Over, Press Any Key to Restart";
    var wrongAudio= new Audio("sounds/wrong.mp3");

    $("body").css("background-color","red");

    setTimeout(function(){
        $("body").css("background-color","#011F3F");

    },300);
    wrongAudio.play();

    resetGame();

}