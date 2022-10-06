"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Zombie = void 0;
// Zombie class to store zombie, number of zombies and moves and moves
class Zombie {
    constructor(zombiePosition, moves, index) {
        this.zombieXPosition = zombiePosition[0];
        this.zombieYPosition = zombiePosition[1];
        this.newZombieXPosition = 0;
        this.newZombieYPosition = 0;
        this.moves = moves;
        this.index = index;
    }
    setNewZombieYPosition(newZombieYPosition) {
        this.newZombieYPosition = newZombieYPosition;
    }
    setNewZombieXPosition(newZombieXPosition) {
        this.newZombieXPosition = newZombieXPosition;
    }
}
exports.Zombie = Zombie;
