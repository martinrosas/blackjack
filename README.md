# Blackjack

A project 1 game app by Martín.


### Todo List

For this exercise we'll build a simple to do app. A todo app is the canonical app, so much so that it is used to benchmark different front-end frameworks.  For this however, it's just you and the browser...NOTHING else. No libraries, no databases. 

Below is a wireframe that outlines what the app should look like. You can also probably glean details of it's functionality from the mockup. You will most certainly work with mockups/wireframes in your career as a developer, so this is good practice to get now. 

![to do list](http://s3.amazonaws.com/grant-wdi/to-do-list-lab/to-do-list.png )

* User should be able to enter text into the input text box, which will add a new item to the bottom of the list.
* "Items Remaining" should keep track of how many list items the user has completed. This count changes every time the user checks off an item in the "Completed" column. 
* A User should be able to remove a specified item from the list by clicking the remove button. 
* User should be able to leave the page, come back, and be presented with their app as they left it. 

```javascript
var reset = document.getElementById("reset");
var start = document.getElementById("start");
var pause = document.getElementById("pause");
var timer = document.getElementById("timer");
var timeElapsed = 0

reset.addEventListener("click", function () {
  clearInterval(intervalId);
  timeElapsed = 0;
  timer.innerHTML = "Stop Watch";
});

start.addEventListener("click", function () {
 intervalId = setInterval(updateTime, 1000)
});
pause.addEventListener("click", function () {
 clearInterval(intervalId);
});

function updateTime() {
  timeElapsed +=1;
  timer.innerHTML = timeElapsed;
}
```

```html
  <h1 id="timer">Stop Watch</h1>
  <div class="controls">
    <button id="reset">ResetReset</button>
    <button id="start">Start</button>
    <button id="pause">Pause</button>
  </div>

  <input type="button" value="Reset Game" name="Resetbtn" onclick="Reset_Game();" />

<script src="timers.js"></script>
</body>
</html>
```

```javascript
// EXAMPLE: how to make a card you have dealt show up!
var card = dealRandomCard();

player1 = document.getElementById("player1");

player1.classList.add(card)
player1.classList.remove("back-red")
```

"s".charCodeAt(0)
115
"0".charCodeAt(0)
48
"9".charCodeAt(0)
57
"Q".charCodeAt(0)
81
cardString = "cQ"
"cQ"
cardString.charCod
undefined
cardString.charCodeAt(cardString.length - 1)
81


var cardValues = {
     "sA": 11,  "sK": 10, "sQ": 10, "sJ": 10, "s10": 10, "s09": 9, "s08":8, "s07": 7, "s06": 6, "s05": 5, "s04": 4, "s03": 3, "s02": 2,
     "dA": 11, "dK": 10, "dQ": 10, "dJ": 10, "d10": 10, "d09": 9, "d08": 8, "d07": 7, "d06": 6, "d05": 5, "d04": 4, "d03": 3, "d02": 2,
     "hA": 11, "hK": 10, "hQ": 10, "hJ": 10, "h10": 10, "h09": 9, "h08": 8, "h07": 7, "h06": 6, "h05": 5, "h04": 4, "h03": 3, "h02": 2,
     "cA": 11, "cK": 10, "cQ": 10, "cJ": 10, "c10": 10, "c09": 9, "c08": 8, "c07": 7, "c06": 6, "c05": 5, "c04": 4, "c03": 3, "c02": 2,
  }


  deck = [
        "sA", "sK", "sQ", "sJ", "s10", "s09", "s08", "s07", "s06", "s05", "s04", "s03", "s02",
        "dA", "dK", "dQ", "dJ", "d10", "d09", "d08", "d07", "d06", "d05", "d04", "d03", "d02",
        "hA", "hK", "hQ", "hJ", "h10", "h09", "h08", "h07", "h06", "h05", "h04", "h03", "h02",
        "cA", "cK", "cQ", "cJ", "c10", "c09", "c08", "c07", "c06", "c05", "c04", "c03", "c02"
      ];
      console.log("Deck is reset!");

 dealCards.addEventListener("click", function () {
    var card1 = dealRandomCard();
    var card2 = dealRandomCard();
    var card3 = dealRandomCard();
    var card4 = dealRandomCard();
    player1 = document.getElementById("player1");
    player2 = document.getElementById("player2");
    dealer1 = document.getElementById("dealer1");
    dealer2 = document.getElementById("dealer2");

    player1.classList.add(card1)
    player1.classList.remove("back-red")
    player2.classList.add(card2)
    player2.classList.remove("back-red")
    dealer1.classList.add(card3)
    dealer1.classList.remove("back-blue")
    dealer2.classList.add(card4)
    dealer2.classList.remove("back-blue")
    count.player = cardValues[card1] + cardValues[card2]
    count.dealer = cardValues[card3] + cardValues[card4]
    var objMessage = document.getElementById("messageBox");
    objMessage.innerHTML = ("You have " + count.player + " Hit or Stand?")
    document.getElementById("deal").disabled = true;

});

var noMas = document.getElementById("stand");
   var card4 = dealRandomCard();
   dealer2 = document.getElementById("dealer2");
   dealer2.classList.add(card4)
    dealer2.classList.remove("back-blue")


ORIGNIAL GETSCORE FUNCTION

       if (count.player > 21) {
        alert("Player bust, Dealer wins!");
      }
      else if  (count.dealer > 21){
        alert("Dealer bust, Player Wins");
      }
      else if (count.dealer > count.player) {
        alert("Dealer wins");
      }
      else if (count.player > count.dealer){
        alert("Player wins");
      }
      else { (count.player == count.dealer)
        alert("Game is a tie");
      }

        currentDealerCard = 2
    var card = dealRandomCard();
    dealer = document.getElementById("dealer" + DealerPlayerCard);
    dealer.classList.add(card)
    dealer.classList.remove("back-blue")
    count.dealer += cardValues[card]

     if (currentDealerCard < 4) {
      currentDealerCard +=1;
    }
    else{
      break;
    }

    <button id="stand" class="button round">Stand</button>
