// Busi
  function Player(playerName) {
    this.playerId = 0,
    this.playerName = playerName,
    this.diceRoll = 0,
    this.turnScore = 0,
    this.totalScore = 0,
    this.status = true
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
    this.status = false;
    // alert("turn is over");
    this.scoreCheck();
  }

  Player.prototype.scoreCheck = function() {
    if (this.totalScore >= 20) {
      alert("Winner Winner Bacon Dinner");
      this.status = false;
      //playAgain = true
    };
  }

var player1 = new Player("Dino");


// on rollDiceClick

$(function() {
  $(".rollDice").on("click", function(event){
    // event.StopImmediatePropagation();
    // event.StopPropagation();
    player1.rollDice();
    $(".diceScore").text(player1.diceRoll);
    $(".turnScore").text(player1.turnScore);
  })
// hold on click
  $(".hold").on( "click", function(event){
    // event.StopImmediatePropagation();
    // event.StopPropagation();
    player1.endTurn();
    $(".totalScore").text(player1.totalScore);
  })
});
