import { Zombie } from "./Zombie";
import { Creature } from "./Creature";

// Define all the actions of the zombie
export class Board {
  // Get instance of the classes
  zombies: Zombie[];
  creatures: Creature[];
  dimension: number;

  constructor(zombies: Zombie[], creatures: Creature[], dimension: number) {
    this.zombies = zombies;
    this.creatures = creatures;
    this.dimension = dimension;
  }

  public initializeBoard = () => {
    console.log("Hi Welcome to Zombie Game!");
    console.log("---------------------------");

    let boardMap = new Map<number, string[]>();
    let dimensionArray = [];

    // Create the board with "x"
    for (let i = 0; i < this.dimension; i++) {
      for (let j = 0; j < this.dimension; j++) {
        dimensionArray.push("x");
      }
      boardMap.set(i, dimensionArray);
      dimensionArray = [];
    }

    // Place Creatures on board
    for (let i = 0; i < this.creatures.length; i++) {
      const position = this.creatures[i].position;
      let row: any = boardMap.get(position[1]);
      row[position[0]] = `C`;
    }

    // Print Board to terminal
    console.log(
      "Here is the board with the Zombie and Creature positions:",
      boardMap
    );
    console.log("------------------------------------------------");

    // Get zombie instance from zombie array
    for (let i = 0; i < this.zombies.length; i++) {
      const zombie = this.zombies[i];
      this.moveZombie(zombie.moves, boardMap, zombie);
    }

    // Print final output
    this.finalOutput();
  };

  private moveZombie(
    moves: string[],
    boardMap: Map<number, string[]>,
    zombie: Zombie
  ) {
    for (let i = 0; i < moves.length; i++) {
      // Loop through array of moves
      this.translateMovesToCoodinates(moves[i], boardMap, zombie);
    }
  }

  private translateMovesToCoodinates(
    move: string,
    boardMap: Map<number, string[]>,
    zombie: Zombie
  ) {
    // translate RUDL into coordinates
    if (move === "R") {
      if (zombie.zombieXPosition >= this.dimension - 1) {
        // Add zombie position to new position if it crosses the dimension
        zombie.setNewZombieXPosition(0);
        zombie.setNewZombieYPosition(zombie.zombieYPosition);
        this.updatePosition(boardMap, zombie);
      } else {
        // Place the x and y coordinates for the zombie
        zombie.setNewZombieXPosition(zombie.zombieXPosition + 1);
        zombie.setNewZombieYPosition(zombie.zombieYPosition + 0);

        this.updatePosition(boardMap, zombie);
      }
    }

    if (move === "D") {
      if (zombie.zombieXPosition > this.dimension) {
        zombie.setNewZombieXPosition(zombie.zombieXPosition);
        zombie.setNewZombieYPosition(0);
        this.updatePosition(boardMap, zombie);
      } else {
        zombie.setNewZombieXPosition(zombie.zombieXPosition + 0);
        zombie.setNewZombieYPosition(zombie.zombieYPosition + 1);

        this.updatePosition(boardMap, zombie);
      }
    }

    if (move === "U") {
      if (zombie.zombieXPosition <= 0) {
        zombie.setNewZombieXPosition(zombie.zombieXPosition);
        zombie.setNewZombieYPosition(this.dimension);
        this.updatePosition(boardMap, zombie);
      } else {
        zombie.setNewZombieXPosition(zombie.zombieXPosition + 0);
        zombie.setNewZombieYPosition(zombie.zombieYPosition - 1);
        this.updatePosition(boardMap, zombie);
      }
    }

    if (move === "L") {
      if (zombie.zombieXPosition <= 0) {
        zombie.setNewZombieXPosition(this.dimension - 1);
        zombie.setNewZombieYPosition(zombie.zombieYPosition);
        this.updatePosition(boardMap, zombie);
      } else {
        zombie.setNewZombieXPosition(zombie.zombieXPosition - 1);
        zombie.setNewZombieYPosition(zombie.zombieYPosition + 0);
        this.updatePosition(boardMap, zombie);
      }
    }
  }

  private updatePosition(boardMap: Map<number, string[]>, zombie: Zombie) {
    // Check for creature
    this.checkForCreature(boardMap, zombie);

    // Update old zombie position on board
    let oldRow: any = boardMap.get(zombie.zombieYPosition);
    oldRow[zombie.zombieXPosition] = "x";
    boardMap.set(zombie.zombieYPosition, oldRow);

    // Update new zombie position on board
    let newRow: any = boardMap.get(zombie.newZombieYPosition);
    newRow[zombie.newZombieXPosition] = `Z${zombie.index}`;
    boardMap.set(zombie.newZombieYPosition, newRow);

    zombie.zombieXPosition = zombie.newZombieXPosition;
    zombie.zombieYPosition = zombie.newZombieYPosition;

    // Log zombie movement to console
    console.log("------------------------------------------");
    console.log(
      `zombie ${zombie.index} moved to (${zombie.newZombieXPosition}, ${zombie.newZombieYPosition})`
    );
  }

  private checkForCreature(boardMap: Map<number, string[]>, zombie: Zombie) {
    // Get the row in the hashmap
    let row: any = boardMap.get(zombie.newZombieYPosition);
    let creatureEncounter = row[zombie.newZombieXPosition];
    // Check for creature on board
    if (creatureEncounter.toLowerCase() === "c") {
      const newZombiePosition = [
        zombie.newZombieXPosition,
        zombie.newZombieYPosition,
      ];
      // Create new zombie if creature is spotted
      const zombieToAdd = new Zombie(
        newZombiePosition,
        zombie.moves,
        zombie.index + 1
      );

      this.zombies.push(zombieToAdd);

      console.log(
        `zombie ${zombie.index} infected creature at (${zombie.newZombieXPosition} , ${zombie.newZombieYPosition})`
      );
    }
  }

  private finalOutput() {
    // Print zombie final positions
    console.log("------------------------------------------");
    console.log("Final Output:");
    for (let i = 0; i < this.zombies.length; i++) {
      console.log(
        `zombie ${i} final positions: (${this.zombies[i].zombieXPosition},${this.zombies[i].zombieYPosition})`
      );
    }
    console.log("------------------------------------------");
  }
}
