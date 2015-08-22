


var Player1 = new Player();
var Player2 = new Player();



// OOP Racing Game example boilerplate code

function Game(player1, player2) {
  //Create a new instance of player 1
  this.player1 = Player1;

  //Do the same for a player 2
  this.player2 = Player2;

  //Create the track
  //this.track = ...
}

// `Game.prototype.init` kicks off a new game with a board and two players
Game.prototype.init = function() {
  //
};

// A starter Player constructor.
function Player(name, position) {
  this.name = name;
  this.position = position;
};

// Remember: prototypes are shared functions between all game instances
Player.prototype.move = 

      $(document).on('keydown', function(e) { 
        if (e.keyCode === 65) {
              console.log('A was pressed');
              // this.count ++;
              player1Clicks ++;
              $('#A' + (player1Clicks + 1)).attr('class', 'player1');
              $('#A' + (player1Clicks)).removeClass('player1');
              $('#A' + (player1Clicks)).attr('class', 'lanes'); 
              score();              
        } else if (e.keyCode === 76) {
              console.log('L was pressed');
              // this.count ++;
              player2Clicks ++;
              $('#B' + (player2Clicks + 1)).attr('class', 'player2');
              $('#B' + (player2Clicks)).removeClass('player2');
              $('#B' + (player2Clicks)).attr('class', 'lanes');
              score();   
        }  
      }); 


// A starter Track constructor.
function Track() {
    $('.racetrack table tr td').removeClass('player1 player2');
    $('#A1').attr('class', 'player1');
    $('#B1').attr('class', 'player2');
    player1Clicks = 0;
    player2Clicks = 0;
  //Tracks the cells of the board instance
  //this.$cells = ...

  //Store any other properties that board may have below, such as a reset option
};


function score() {
  if (player1Clicks >= clicksToWin) {
        player1Score ++;
        window.alert("player 1 wins this round!");
        $('#player1Score').text(player1Score);                              /* Scoreboard update not working yet */
        console.log('scoreboard test');
        Track();
  } else if (player2Clicks >= clicksToWin) {
        player2Score ++;
        window.alert('player 2 wins this round!');                          /* Scoreboard update not working yet */
        $('#player2Score').text(player2Score);
        Track();
  }
}





// Start the game!
var game = new Game();
game.init();





var player1Clicks = 0;
var player2Clicks = 0;
var clicksToWin = 10;
var player1Score = 0;
var player2Score = 0;


var player1 = new Player('Darragh', $('#A1').attr('class', 'player1'));
var player2 = new Player('Bob', $('#B1').attr('class', 'player2'));




