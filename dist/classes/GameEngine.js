"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameEngine = void 0;
const Zombie_1 = require("./Zombie");
const Creature_1 = require("./Creature");
const Board_1 = require("./Board");
// Class to start the game
class GameEngine {
    start(zombiePosition, creaturePositions, dimension, moves) {
        // Create zombies array and pass instance of zombies into array
        let zombies = [];
        const zombie = new Zombie_1.Zombie(zombiePosition, moves.split(""), 0);
        zombies.push(zombie);
        // Create creatures array and pass instance of creatures into array
        let creatures = [];
        for (let i = 0; i < creaturePositions.length; i++) {
            const creature = new Creature_1.Creature(creaturePositions[i]);
            creatures.push(creature);
        }
        // Create board
        const board = new Board_1.Board(zombies, creatures, dimension);
        board.initializeBoard();
    }
}
exports.GameEngine = GameEngine;
