// Q1: Player Object
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
  
  // Q2: User Class
  class User {
    constructor(name, email) {
      this.name = name;
      this.email = email;
    }
  
    viewData() {
      console.log(`Viewing data for ${this.name} (${this.email})`);
    }
  }
  
  // Q3: Admin Class
  class Admin extends User {
    constructor(name, email) {
      super(name, email);
    }
  
    editData() {
      console.log(`Editing data for ${this.name} (${this.email})`);
    }
  }
  
  // Example usage
  const player1 = new Player('Alice');
  player1.gainXp(5);
  player1.describe();
  player1.gainXp(6);
  player1.describe();
  
  const user1 = new User('John Doe', 'john@example.com');
  user1.viewData();
  
  const admin1 = new Admin('Jane Smith', 'jane@example.com');
  admin1.viewData();
  admin1.editData();
  