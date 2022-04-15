const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        // Get method from employee
        super(name, id, email);
        // Get office number 
        this.officeNumber = officeNumber;
}    

getofficeNumber() {
    return this.officeNumber;
}

getRole() {     
    return "Manager";
}
};

module.exports = Manager;