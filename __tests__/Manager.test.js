const Manager = require("../lib/Manager");


test("Ability to set office phone number", () => {
    const officeNumber = "800-555-5555";
    const employee = new Manager("Peter", 3, "petenelson@testemail.com", officeNumber);
    expect(employee.officeNumber).toBe(officeNumber);
});

test("getRole function should return Manager", () => {
    const role = "Manager";
    const employee = new Manager("Peter", 3, "petenelson@testemail.com", role);
    expect(employee.getRole()).toBe(role);
  });