function Employee(name = '') {
    this.name = name;
    this.id = id;
    this.email = email;
}
Player.prototype.getName = function () {
    return {
        name: this.name
    };
};
Player.prototype.getId = function () {
    return {
        id: this.id
    };
};
Player.prototype.getEmail = function () {
    return {
        email: this.email
    };
};
Player.prototype.getRole = function () {
    return {
        employee: this.Employee
    };
};

module.exports = Employee;