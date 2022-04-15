function Employee(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
}
Employee.prototype.getName = function () {
    return this.name
    };

Employee.prototype.getId = function () {
    return {
        id: this.id
    };
};
Employee.prototype.getEmail = function () {
    return {
        email: this.email
    };
};
Employee.prototype.getRole = function () {
    return {
        employee: this.Employee
    };
};

module.exports = Employee;