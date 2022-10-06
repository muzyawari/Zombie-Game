# Zombie Apocalyse:

Hi, this is the zombie game, I have created. When you start the game, the game greets you, and shows you the position of the first zombie and the creatures on the board.

When the zombie moves and infects a creature, this is printed in the terminal.

## Run the Application:

You can place your inputs in the index.ts file by changing the variable inputs and run it by compiling the code with:

```
npm i

tsc

cd dist

node index.js

```

## What I Am Proud Of:

I feel the game has a very good flow and the user can see the first original board and where the zombies/creatures are located.
I can expand the game further, by asking the user for an input each time and they can make the necessary steps to infect the creatures based on their decision and make it a turn based game with a winner.

## Things I would improve:

1. Separate the board class functions to separate classes.
2. Create tests for each class and function of classes and edge cases.
3. Show the board each time, the zombie moves and make it a turn based game.
4. Make zombie positions and index fields private and call them with public getters and setters.
