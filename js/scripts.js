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
  var roll =  Math.floor((Math.random() * 6) +1);
  return roll;
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
  };
};

Game.prototype.resetTurn = function(){
  this.rollValue = 0;
  this.turnScore = 0;
}

//Player object logic.  Player objects hold total scrores and active status
function Player(playerName) {
  this.playerName = playerName,
  this.playerScore = 0,
  this.playerId = 0,
  this.isActive = false
}


$(document).ready(function(){

var game = new Game();
var player1 = new Player("Dustin");
var player2 = new Player("Marc");
var player3 = new Player("Stacey");
game.addNewPlayer(player1);
game.addNewPlayer(player2);
game.addNewPlayer(player3);
console.log(game.players);
game.players[0].isActive = true;
console.log(game.getActiveIndex());
game.nextPlayer();
console.log(game.getActiveIndex());
game.nextPlayer();
console.log(game.getActiveIndex());














//end of document.ready ---------------------------//
})
