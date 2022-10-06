// Zombie class to store zombie, number of zombies and moves and moves
export class Zombie {
  // Original zombie position
  zombieXPosition: number;
  zombieYPosition: number;
  // New zombie position after moves
  newZombieXPosition: number;
  newZombieYPosition: number;
  moves: string[];
  index: number;

  constructor(zombiePosition: number[], moves: string[], index: number) {
    this.zombieXPosition = zombiePosition[0];
    this.zombieYPosition = zombiePosition[1];
    this.newZombieXPosition = 0;
    this.newZombieYPosition = 0;
    this.moves = moves;
    this.index = index;
  }

  public setNewZombieYPosition(newZombieYPosition: number) {
    this.newZombieYPosition = newZombieYPosition;
  }

  public setNewZombieXPosition(newZombieXPosition: number) {
    this.newZombieXPosition = newZombieXPosition;
  }
}
