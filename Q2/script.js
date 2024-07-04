class User {
    constructor(name, email) {
      this.name = name;
      this.email = email;
    }
  
    viewData() {
      console.log(`Viewing data for ${this.name} (${this.email})`);
    }
  }
  
  // Example usage
  const user1 = new User('John Doe', 'john@example.com');
  user1.viewData();
  