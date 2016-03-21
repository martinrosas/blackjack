# Blackjack

A project 1 game app by Martín.


### Todo List

 src="https://code.jquery.com/jquery-2.2.1.min.js"   integrity="sha256-gvQgAFzTH6trSrAWoH1iPo9Xc96QxSZ3feW6kem+O00="   crossorigin="anonymous">

For this exercise we'll build a simple to do app. A todo app is the canonical app, so much so that it is used to benchmark different front-end frameworks.  For this however, it's just you and the browser...NOTHING else. No libraries, no databases. 

Below is a wireframe that outlines what the app should look like. You can also probably glean details of it's functionality from the mockup. You will most certainly work with mockups/wireframes in your career as a developer, so this is good practice to get now. 

![to do list](http://s3.amazonaws.com/grant-wdi/to-do-list-lab/to-do-list.png )

* User should be able to enter text into the input text box, which will add a new item to the bottom of the list.
* "Items Remaining" should keep track of how many list items the user has completed. This count changes every time the user checks off an item in the "Completed" column. 
* A User should be able to remove a specified item from the list by clicking the remove button. 
* User should be able to leave the page, come back, and be presented with their app as they left it. 

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
// EXAMPLE: how to make a card you have dealt show up!
var card = dealRandomCard();

player1 = document.getElementById("player1");

player1.classList.add(card)
player1.classList.remove("back-red")
```
