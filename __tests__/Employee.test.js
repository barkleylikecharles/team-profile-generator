const Employee = require("../lib/Employee");
// Test - New employee creation
test("Can create a new employee.", () => {
    const employee = new Employee ('Verona', 13, 'verona@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    // done();
});

test("Can add a name to employee object.", () => {
    const name = "Verona"
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
});

test("Can add a ID# to employee object.", () => {
    const id = 13
    const employee = new Employee("Verona", 13);
    expect(employee.id).toBe(id);
});

test("Can add a email address to employee object.", () => {
    const email = "Verona@gmail.com";
    const employee = new Employee("Verona", 13, email);
    expect(employee.email).toBe(email);
});