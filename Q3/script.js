class Admin extends User {
    constructor(name, email) {
      super(name, email);
    }
  
    editData() {
      console.log(`Editing data for ${this.name} (${this.email})`);
    }
  }
  
  // Example usage
  const admin1 = new Admin('Jane Smith', 'jane@example.com');
  admin1.viewData();
  admin1.editData();
  