import { Zombie } from "./Zombie";
import { Creature } from "./Creature";
import { Board } from "./Board";

// Class to start the game
export class GameEngine {
  start(
    zombiePosition: number[],
    creaturePositions: number[][],
    dimension: number,
    moves: string
  ) {
    // Create zombies array and pass instance of zombies into array
    let zombies = [];
    const zombie = new Zombie(zombiePosition, moves.split(""), 0);
    zombies.push(zombie);

    // Create creatures array and pass instance of creatures into array
    let creatures = [];
    for (let i = 0; i < creaturePositions.length; i++) {
      const creature = new Creature(creaturePositions[i]);
      creatures.push(creature);
    }

    // Create board
    const board = new Board(zombies, creatures, dimension);
    board.initializeBoard();
  }
}
