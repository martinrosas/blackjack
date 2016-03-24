var turn = "Game Over";
var currentPlayerCard;
var currentDealerCard = 1;

  //counts the total score of  dealer and player
  var count = {
    player: 0,
    dealer: 0,
  }
    //object giving each card its value
    var cardValues = {
     "sA": 11,  "sK": 10, "sQ": 10, "sJ": 10, "s10": 10, "s09": 9, "s08":8, "s07": 7, "s06": 6, "s05": 5, "s04": 4, "s03": 3, "s02": 2,
     "dA": 11, "dK": 10, "dQ": 10, "dJ": 10, "d10": 10, "d09": 9, "d08": 8, "d07": 7, "d06": 6, "d05": 5, "d04": 4, "d03": 3, "d02": 2,
     "hA": 11, "hK": 10, "hQ": 10, "hJ": 10, "h10": 10, "h09": 9, "h08": 8, "h07": 7, "h06": 6, "h05": 5, "h04": 4, "h03": 3, "h02": 2,
     "cA": 11, "cK": 10, "cQ": 10, "cJ": 10, "c10": 10, "c09": 9, "c08": 8, "c07": 7, "c06": 6, "c05": 5, "c04": 4, "c03": 3, "c02": 2,
  }

  //reloads the game
  var resetGame = document.getElementById("reset-game");

    resetGame.addEventListener("click", function () {

      document.location.reload();

    });
    //an array for defining the deck of cards
    var deck = [
      "sA", "sK", "sQ", "sJ", "s10", "s09", "s08", "s07", "s06", "s05", "s04", "s03", "s02",
      "dA", "dK", "dQ", "dJ", "d10", "d09", "d08", "d07", "d06", "d05", "d04", "d03", "d02",
      "hA", "hK", "hQ", "hJ", "h10", "h09", "h08", "h07", "h06", "h05", "h04", "h03", "h02",
      "cA", "cK", "cQ", "cJ", "c10", "c09", "c08", "c07", "c06", "c05", "c04", "c03", "c02"
    ];




    // return a single, random card from the deck, removing it from the deck
    function dealRandomCard() {
      var randomCardNumber = Math.floor(Math.random() * deck.length);

      // splice a single card out of the deck
      var cardArray = deck.splice(randomCardNumber, 1);

      // since splice always returns an array, and we only got one and want one,
      // we have to access the "first"/only item in the array
      return cardArray[0];
    }

  //give player two cards and dealer one card
  var dealCards = document.getElementById("deal");

  dealCards.addEventListener("click", function () {
    currentPlayerCard = 3;
    var card1 = dealRandomCard();
    var card2 = dealRandomCard();
    var card3 = dealRandomCard();
    player1 = document.getElementById("player1");
    player2 = document.getElementById("player2");
    dealer1 = document.getElementById("dealer1");


    player1.classList.add(card1)
    player1.classList.remove("back-red")
    player2.classList.add(card2)
    player2.classList.remove("back-red")
    dealer1.classList.add(card3)
    dealer1.classList.remove("back-blue")

    count.player = cardValues[card1] + cardValues[card2]
    count.dealer = cardValues[card3]
    var objMessage = document.getElementById("messageBox");
    objMessage.innerHTML = ("You have " + count.player + " Hit or Stand?")
    document.getElementById("deal").disabled = true;
    turn = "player"
});
  //allows player to get more cards
  var addCards = document.getElementById("hit");

    addCards.addEventListener("click", function () {
    console.log(turn);
    if(turn == "player"){
    var card = dealRandomCard();
    player = document.getElementById("player" + currentPlayerCard);

    player.classList.add(card)
    player.classList.remove("back-red")
    count.player += cardValues[card]
    var objMessage = document.getElementById("messageBox");
    objMessage.innerHTML = ("You have " + count.player + " Hit or Stand?")
    //document.getElementById("deal").disabled = true;
    //document.getElementById("hit").disabled = true;

    if (currentPlayerCard < 5) {
      currentPlayerCard +=1;
      playerBust()
    }
    else{
      dealerTurn()
    }



}
});
    //allows dealer to display cards
    function dealerTurn () {
    turn = "dealer"
    while (count.dealer < 17 && currentDealerCard < 5) {
    currentDealerCard +=1;
    var card = dealRandomCard();
    dealer = document.getElementById("dealer" + currentDealerCard);
    console.log("dealer" + currentDealerCard)
    dealer.classList.add(card)
    dealer.classList.remove("back-blue")
    count.dealer += cardValues[card]

    }
      return(getScore())
}


  //switches to dealer
  var noMas = document.getElementById("stand");
    noMas.addEventListener("click", function(){
      if(turn == "player"){
        dealerTurn()
      }
    });

    //get winner function
    function getScore () {
      if  (count.dealer > 21){
        alert("Dealer bust, Player Wins");
      }
      else if (count.dealer > count.player) {
        alert("Dealer has " + count.dealer + " You Lose!");
      }
      else if (count.player > count.dealer){
        alert("You win!");
      }
      else { (count.player == count.dealer)
        alert("Game is a tie");
      }
  }

  function playerBust () {
    if (count.player > 21)
      alert("Player bust, Dealer wins!");

    //document.getElementById("hit").disabled = true;
    //document.getElementById("stand").disabled = true;

  }




