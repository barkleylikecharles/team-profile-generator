const Employee = require("../lib/Employee");
// Test - New employee creation
test("Can create a new employee.", () => {
    const employee = new Employee ('Verona', 13, 'verona@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    // done();
});

// test("Can add a name to employee object."), () => {
//     const name = "Verona"
//     const employee = new Employee(name);
//     expect(employee.name).toBe(name);
// }