/**
 * Created by rubenvarela on 12/9/16.
 */
(function() {
    "use strict";
    var savedMoves = [];    //array for saved computer moves
    var userMoves = [];    //array for user chosen moves
    var counterHeader = document.getElementById("roundCounterHeader");  //variable that stores roundCounterHeader id for later use within roundCounter function
    var highScoreID = document.getElementById("highScore");     //variable that stores highScore id for later use within updateHighScore function
    var playButton = document.getElementById("playButton");    //variable that stores playButton id for later use in playButton function
    var counter = 1;    // counter for round number
    var highScore = 1;  //variable that stores the user's high score
    var playButtonClicked = false;  //variable that stores whether the playButton has been clicked or not
    var squareClicked = false;  //variable that tells fadeSquare function it's being called from a mouse click listener
    var selectedSquare;  //variable that stores the id of the square that was clicked

    //function for generating random number between 1 and 4
    var generateRandomNumber = function() {
        return Math.floor(Math.random() * 3) + 0;
    };

    //function for assigning square a number
    var assignSquare = function(number) {
        var colors = ['red', 'yellow', 'blue', 'green'];
        var selectedColor = colors[number];
        fadeSquare(selectedColor);
        savedMoves.push(selectedColor);
    };

    //function for fading squares and playing sound
    function fadeSquare(square) {
        $("#" + square).fadeTo(200, 0);
        $("#" + square).fadeTo(300, 1);
        if (squareClicked == true) {
            $("#clickAudio").trigger("play");
        } else {
            $("#sequenceAudio").trigger("play");
        }
    }

    //function that fades square that was clicked on
    $(".square").click(function () {
        selectedSquare = this.id;
        userMoves.push(this.id);
        compareArrays();
    });

    //function to compare savedMoves array vs userMoves array,
    //it is triggered every time the user clicks on a square
    var i = 0;
    function compareArrays() {
        if (savedMoves[i] == userMoves[i]) {
            squareClicked = true;
            fadeSquare(selectedSquare);
            squareClicked = false;
            i++;
            if(userMoves.length == savedMoves.length) {
                userMoves = [];
                i = 0;
                setTimeout(playSequence, 1000);
            }
        } else {
            $(".container > .row").hide();
            $(".container").addClass("explosion");
            $("#explosionAudio").trigger("play");
            setTimeout(function () {
                $(".container").removeClass("explosion");
                $(".gameOverDiv").show();
            }, 850)
        }
    }

    //function that plays back sequence after every round
    var playSequence = function () {
        savedMoves.forEach(function (box, index) {
            setTimeout(function () {
                fadeSquare(box);
            }, (500*index));
        });
        setTimeout(function() {
            assignSquare(generateRandomNumber());
        }, 500*(savedMoves.length - 1)+500);
        counter++;
        roundCounter();
        updateHighScore();
    };

    //function for keeping track of the round
    function roundCounter() {
        counterHeader.innerHTML = counter;
    }
    roundCounter();

    //function for storing and displaying user's high score
    function updateHighScore() {
        if(highScore <= counter) {
            highScore = counter;
            highScoreID.innerHTML = highScore
        } else if(highScore > counter) {
            highScoreID.innerHTML = highScore
        }
        // // Store
        // localStorage.lastname = "Smith";
        // // Retrieve
        // document.getElementById("result").innerHTML = localStorage.lastname;
    }
    updateHighScore();

    //function for resetting simple simon game
    function reset() {
        playButton.innerHTML = "Play";
        playButtonClicked = false;
        savedMoves = [];
        userMoves = [];
        counter = 1;
    }

    //function for the play button
    $("#playButton").click(function() {
        if (playButtonClicked == false) {
            playButton.innerHTML = "Reset";
            playButtonClicked = true;
            assignSquare(generateRandomNumber());
            roundCounter();
        } else if (playButtonClicked == true) {
            reset();
            roundCounter();
        }
    });

    //function for game over play again button
    $("#gameOverButton").click(function () {
        $(".gameOverDiv").hide();
        $(".container > .row").show();
        reset();
        roundCounter();
    })
})();