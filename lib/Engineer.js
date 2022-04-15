const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        // Get method from employee
        super(name, id, email);
        // Get office number 
        this.github = github;
}    

getgitHub() {
    return this.github;
}

getRole() {     
    return "Engineer";
}
};

module.exports = Engineer;