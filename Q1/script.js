function Player(name) {
    this.name = name;
    this.lvl = 1;
    this.points = 0;
  }
  
  Player.prototype.gainXp = function(xp) {
    if (xp < 1 || xp > 10) {
      console.log('XP must be between 1 and 10.');
      return;
    }
  
    this.points += xp;
    
    while (this.points >= 10) {
      this.lvl += 1;
      this.points -= 10;
    }
  };
  
  Player.prototype.describe = function() {
    console.log(`Name: ${this.name}, Level: ${this.lvl}, Points: ${this.points}`);
  };
  
  // Example usage
  const player1 = new Player('Alice');
  player1.gainXp(5);
  player1.describe();
  player1.gainXp(6);
  player1.describe();
  