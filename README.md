

<img width="1350" height="690" alt="Screenshot 2025-11-20 094728" src="https://github.com/user-attachments/assets/48dc2a57-f3ff-4afd-b892-72055f822404" />


# How to play 

1- first the game starts when the start game button is clicked which is using an addlesetenter funcation 
2- when you click the box ( which is the whole point of the game ) the randompostion function runs and generates the random the postions for the box using the math.random()
3 - the score is updated and stored. 



# User stroy : 

As a casual user
I want to click a moving box within a limited time
So that I can challenge my reaction speed and try to achieve a higher score.

As a player
I want to see my score and remaining time while playing
So that I can track my progress and stay motivated.


As a user
I want to start the game by pressing a button
So that I clearly control when the game begins.

As a player
I want to be notified when the timer ends
So that I understand the game is over and see my final score.

As a new user
I want the game to load instantly in the browser
So that I can play without installation or complex setup.


# descrption of the methods 

 1. getRandomPosition()
This function calculates a random position for the box inside the game area. It:
•	Checks how much space is available inside the game area.
•	Subtracts the box size so it stays fully visible.
•	Generates a random x and y value.
•	Returns the new position.
Basically: It chooses a new random spot for the box without letting it go outside the screen.

2. moveBox()
This function moves the box to a new random location. It:
•	Calls getRandomPosition().
•	Places the box at the returned position.
In simple words: It makes the box "jump" to a new location.

3. box.addEventListener("click", ...)
This is what happens when the player clicks the box:
•	The score increases by 1.
•	The displayed score updates.
•	The box moves to another random location.
•	A sound effect plays.


4. startBtn.addEventListener("click", ...)
This function starts the game when the player presses the Start button.
It:
•	Resets the score and timer.
•	Shows the box.
•	Starts the countdown timer.
•	Starts the box movement interval.
•	When time reaches 0, it stops everything and shows a "Game Over" message.


5. setInterval()
There are two intervals in the game:
Timer interval
Runs every 1 second to decrease the time.
Box movement interval
Runs every 1 second to move the box automatically.


6. clearInterval()
This stops the repeating loops (timer and box movement).
Simple explanation: It freezes time and stops box movement once the game ends.

7. localStorage.setItem()
The game stores the high score in the browser.



8. Audio()
Creates an audio object so the game can play the quack sound.


9. Styling and Visibility Control
•	box.style.left and box.style.top move the box.
•	box.style.display shows or hides the box.
•	textContent updates on screen numbers and messages.

# whats next?

1- add diffculity

2- better style
