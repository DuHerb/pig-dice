# _{Application Name}_

#### _{Brief description of application}, {Date of current version}_

#### By _**Marc Davies**_

## Description

_{This is a detailed description of your application. Its purpose and usage.  Give as much detail as needed to explain what the application does, and any other information you want users or other developers to have. }_

## Setup/Installation Requirements

* _Clone from GitHub_
* _Open index.html_
* _Alternatively, launch marclignarius.github.io/projectname_

## Specs

| Behavior | Input | Output |
| ------------- |:-------------:| -----:|
| The Program allows for multiple Players | 2 | 2 Players |
| The Program allows for play in Turns | Player 1 ends Turn | Player 2 begins turn |
| Player roll a Dice which returns a random number from 1 to 6 | Click Dice | 1 to 6 |
| If the Dice roll doesn't return a 1, the program assigns the dice number as the Player's Dice Score | Click Dice | Dice Score: 1 to 6 |
| If the Dice roll doesn't return a 1, the player can roll the Dice again | Click Dice | 1 to 6 |
| If the Dice roll doesn't return a 1, the Program records the Dice Score and assigns it as the Player's Turn Score | Roll : 3 | Turn Score 3
| If the Dice roll doesn't return a 1, the Player can Hold their Turn Score and end turn| Player 1 click Hold | Player 2 begins Turn|
| If the player rolls the Dice again, the Program adds up the scores of consecutive Dice rolls | Roll 1: 6, Roll 2: 4 | Turn Score 10
| If any Dice roll returns a 1, the Player's Turn ends | Player 1 Roll 1: 6, Roll 2: 4, Roll 3: 1 | Player 2 begins turn
| If any Dice roll returns a 1, the Player's Turn Score is reset to 0 and their Turn ends | Roll 1: 6, Roll 2: 4, Roll 3: 1 | Turn Score 0
| The Program adds the scores of each Player's Turn Score and assigns it as the Player's Total Score | Round 1: 24, Round 2: 18 | Total Score: 42
| The Program declares a winner when one Player reaches a Total Score of 100 | Player 1 Total Score: 100 | Player 1 Winner

## Known Bugs

_None as of last update_

## Support and contact details

_Please contact me at marcdaviesriot@gmail.com if you run into any issues or have questions, ideas or feedback._

## Technologies Used

_HTML, CSS, JS, Bootstrap, jQuery, Atom._

### License

*This software is licensed under the GPL license.*

Copyright (c) 2019 **_Marc Davies and Dustin H_**
