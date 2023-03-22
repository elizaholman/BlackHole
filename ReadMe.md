# Black Hole - A portal themed web game

## Brief:

### Browser Game
Create a browser game based on an existing card or dice game. Model and test the game logic and then display it in the browser for a user to interact with.
Write your own MVP with some specific goals to be achieved based on the game you choose to model.
You might use persistence to keep track of the state of the game or track scores/wins. Other extended features will depend on the game you choose.


### MVP
* Develop a snakes and ladders type game
* Implement onto a JavaScript/React web-application
* 2-player/teams mongoDB database
* Diceroll to move counters
* Add a rules/how-to-play section

### Possible Extensions
* Add a scoreboard/Leaderboard
* Add sounds to the game
* Blackhole/Portal animation
* Manual toggle

***
## To Run File:
### In client folder in terminal
1. Install node module 
```sh
npm install
```
2. Run the client
```sh
npm start
```

### In server folder in terminal

1. Install node module
```sh
npm install
```
2. Seed database
```sh
npm run seeds
```
3. Run server
```sh
npm run server:dev
```

***
## Instructions:
### Players
* Create players by going to the 'players' navigation at the bottom of the screen, and submit the names of each player by clicking "Add Player"

* Press 'play' and select two players. The person rolling is highlighted and can roll the dice to move. Player 1 moves first (feel free to flip a coin for who is player 1)

* Play until a player makes it to square number 100! Orange portals will take you to a blue exit portal

* You have to roll perfectly to 100 to win

* Check your wins, losses, and percentage in the scoreboard

* Good luck and have fun!

# Images
_Home Screen:_
![homepage](/pics/homepage.png)

_Player Add/Delete:_
![playerpage](/pics/players.png)

_Game Screen:_
![gamepage](/pics/game.png)

_Scoreboard:_
![scoreboard](/pics/scoreboard.png)