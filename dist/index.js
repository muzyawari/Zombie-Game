"use strict";
// Ask user to start game and ask for grid size
Object.defineProperty(exports, "__esModule", { value: true });
// Separate classes --> game engine - runs everything, board, zombie, creature
// Create the grid with hashmap and each location of zombies and creaturemarked with x,y
// zombie: [{x:1, y: 1}]
const GameEngine_1 = require("./classes/GameEngine");
// Define your dimension
const dimension = 4;
// Define your zombie position
const zombiePosition = [3, 1];
// Define your creature positions
const creaturesList = [
    [0, 1],
    [1, 2],
    [1, 1],
];
// Define your moves
const moves = "RDRU";
// Starts game
const gameEngine = new GameEngine_1.GameEngine();
gameEngine.start(zombiePosition, creaturesList, dimension, moves);
//Function to create Grid
// Function for Zombie Moves
// Function for Infect Creatures
// Function to translate the moves - R, U, D, L
// Show console ouput of zombie position, and nuber of
// Things to keep in mind: console.log when zombie moves, when zombie infects
// Need to make a test file with the edge cases
// Good readme
