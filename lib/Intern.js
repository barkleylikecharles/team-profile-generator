class Intern extends Employee {
    constructor(name, id, email, school) {
        // Get method from employee
        super(name, id, email);
        // Get school name
        this.school = school;
}    

getSchool() {
    return this.school;
}

getRole() {     
    return "Intern";
}
};

module.exports = Intern;