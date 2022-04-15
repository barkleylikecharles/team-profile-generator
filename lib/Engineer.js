const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        // Get method from employee
        super(name, id, email);
        // Get Github Username 
        this.github = github;
}    

getGithub() {
    return this.github;
}

getRole() {     
    return "Engineer";
}
};

module.exports = Engineer;