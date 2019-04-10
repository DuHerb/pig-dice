$(function() {



  // player logic
  function Player(playerName) {
    this.playerId = 0,
    this.playerName = playerName,
    this.diceRoll = 0,
    this.turnScore = 0,
    this.totalScore = 0
  }

  Player.prototype.rollDice = function() {
    var roll =  Math.floor((Math.random() * 6) +1);
    if (roll === 1) {
      this.diceRoll = 1;
      this.turnScore = 0;
    } else {
      this.diceRoll = roll;
      this.turnScore += roll;
    };
  }

  Player.prototype.hold = function() {
    this.totalScore += this.turnScore;
  }

var player1 = new Player("Dino");


// on rollDiceClick
  $("#rollDice").on( "click", function(){

    player1.rollDice();
    $("#diceScore").text(player1.diceRoll);
    $("#turnScore").text(player1.turnScore);
  })

// hold on click
  $("#hold").on( "click", function(){

    player1.hold();
    $("#totalScore").text(player1.totalScore);
  })

  $()

});
