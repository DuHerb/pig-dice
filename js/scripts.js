// Game object logic.  Game handles turn rolls and scores. ----------/
function Game() {
  this.players = [],
  this.currentId = -1,
  this.rollValue = 0,
  this.turnScore = 0
}

Game.prototype.addNewPlayer = function(player){
    player.playerId = this.assignId();
    this.players.push(player);
}

Game.prototype.assignId = function(){
  this.currentId += 1;
  return this.currentId;
}

Game.prototype.rollDice = function(){
  var id = this.getActiveIndex();
  var roll =  Math.floor((Math.random() * 6) +1);
  $("#rollResult").text(roll);
  // return roll;
}

Game.prototype.hold = function(){
  var id = this.getActiveIndex();
  this.players[id].playerScore += this.turnScore;
  this.players[id].showScore();
}

Game.prototype.getActiveIndex = function(){
  for(i=0; i<this.players.length; i++){
    if (this.players[i].isActive){
      return i;
      break;
    }
  }
}

// reset active player to player1
Game.prototype.resetActiveIndex = function(){
  this.players.forEach(function(player){
    isActive = false;
  })
  this.players[0].isActive = true;
}

//moves active status to next player.  if last player is active, player1 becomes active again.
Game.prototype.nextPlayer = function () {
  var activeIndex = this.getActiveIndex();
  if (this.players[this.players.length-1].isActive === true ){
    this.resetActiveIndex();
  } else {
    this.players.forEach(function(player){
      player.isActive = false;
    })
    this.players[activeIndex + 1].isActive = true;
    addActive(activeIndex);
  };
};

Game.prototype.resetTurn = function(){
  this.rollValue = 0;
  this.turnScore = 0;
}

//Build player score areas for each player entered.
Game.prototype.buildGameArea = function(){
  this.players.forEach(function(player){
    var id = player.playerId;
    var html = "<div id ='" + id + "'><h2>" + player.playerName + "</h2>"
                + "<h3>Total Score: <span class='totalScore" + id + "'></span></h3>"
                + "</div>";
    $("#gameArea").append(html);
  })
}

//Player object logic.  Player objects hold total scrores and active status
function Player(playerName) {
  this.playerName = playerName,
  this.playerScore = 0,
  this.playerId = 0,
  this.isActive = false
}

Player.prototype.showScore = function(){
  var queryId = ".totalScore"+this.playerId;
  $(queryId).text(this.playerScore);
}

//add functionality to roll and hold buttons
function attachEventListeners(game){
  $("#rollButton").on("click",function(){
    game.rollDice();
  })
}

// display functions ------------------------------------//
function addActive (id){
  var queryId = "#"+id;
  $(queryId).addClass("isActive");
}

//document.ready starts here ----------------------------//
$(document).ready(function(){

var game = new Game();
var player1 = new Player("Dustin");
var player2 = new Player("Marc");
var player3 = new Player("Stacey");
game.addNewPlayer(player1);
game.addNewPlayer(player2);
game.addNewPlayer(player3);
game.players[0].isActive = true;
attachEventListeners(game);
game.buildGameArea();
console.log(game.players);
game.nextPlayer();
game.nextPlayer();








//end of document.ready ---------------------------//
})
