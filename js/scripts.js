function Game(){
  this.currentId = -1,
  this.players = [];
}

Game.prototype.addNewPlayer = function(player) {
  this.currentId ++;
  player.playerId = this.currentId;
  this.players.push(player);
}

Game.prototype.changeStatus = function() {
  var length = this.players.length;
  // console.log(this.players);
  // console.log(this.players[0].status);
  // console.log(length);
    // if(this.players[length - 1 ].status === true) {
    //   this.players[length - 1].status = false;
    //   this.players[0].status = true;
    // } else {

  //     for(var i=0; i < length; i++){
  //       if (this.players[i].status === true){
  //         this.players[i].status = false;
  //         this.players[i + 1].status = true;
  //         break;
  //     };
  //   };
  // }
  if(this.players[0].status === true){
    $('#playerOne').removeClass("hidden");
    $('#playerTwo').addClass("hidden");
  } else {
    $('#playerTwo').removeClass("hidden");
    $('#playerOne').addClass("hidden");
  }
}


// Busi
  function Player(playerName) {
    this.playerId = 0,
    this.playerName = playerName,
    this.diceRoll = 0,
    this.turnScore = 0,
    this.totalScore = 0,
    this.status = false
  }

  // Player.prototype.turn = function(){
  //   var turnScore = 0;
  //   var roll =  Math.floor((Math.random() * 6) +1);
  //   if(roll === 1) {
  //
  //   }
  // }

  Player.prototype.rollDice = function() {

    var roll =  Math.floor((Math.random() * 6) +1);
    if (roll === 1) {
      this.diceRoll = 1;
      this.turnScore = 0;
      alert("you rolled a one. Turn Over")
      this.endTurn();
    } else {
      this.diceRoll = roll;
      this.turnScore += roll;
    };
  }

  Player.prototype.endTurn = function(){
    this.totalScore += this.turnScore;
    this.turnScore = 0;
    // alert("turn is over");
    this.status = false;
    this.scoreCheck();
    // game.changeStatus();

  }

  Player.prototype.scoreCheck = function() {
    if (this.totalScore >= 100) {
      alert("Winner Winner Bacon Dinner");
      this.status = false;
      //playAgain = true
    };
  }



var player1 = new Player("Dustin");
var player2 = new Player("Marc");
// var player3 = new Player("admin");


// on rollDiceClick

$(function() {
  var game = new Game();
  game.addNewPlayer(player1);
  game.addNewPlayer(player2);
  // game.addNewPlayer(player3);
  player1.status = true;
  console.log(player1.status);
  // game.changeStatus();
  // console.log(player1.status);
  // console.log(player2.status);
  // console.log(player3.status);
  // game.changeStatus();
  // console.log(player1.status);
  // console.log(player2.status);
  // console.log(player3.status);
  $("#rollDice1").on("click", function(event){
    // event.StopImmediatePropagation();
    // event.StopPropagation();
    player1.rollDice();
    $(".diceScore1").text(player1.diceRoll);
    $(".turnScore1").text(player1.turnScore);
  })
  $("#rollDice2").on("click", function(event){
    player2.rollDice();
    $(".diceScore2").text(player2.diceRoll);
    $(".turnScore2").text(player2.turnScore);
  })
// hold on click
  $("#hold1").on("click", function(event){
    // event.StopImmediatePropagation();
    // event.StopPropagation();
    player1.endTurn();
    $(".totalScore1").text(player1.totalScore);
    game.changeStatus();
    console.log(player1.status);
    console.log(player2.status);
  });
  $("#hold2").on("click", function(event){
    player2.endTurn();
    $(".totalScore2").text(player2.totalScore);
    game.changeStatus();
    console.log(player1.status);
    console.log(player2.status);
  })
});
