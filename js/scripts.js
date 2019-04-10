$(function() {

  // player logic
  function Player() {
    this.playerId = 0,
    this.totalScore = 0
  }

  function rollDice(){
    return Math.floor((Math.random() * 6) +1);
  }

// on rollDiceClick
  $('#rollDice').on("click", function(){
    var roll = rollDice();
    $('#diceScore').text(roll);
  })
});
