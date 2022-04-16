const Intern = require("../lib/Intern");


test("Ability to set school name", () => {
    const school = "MIT";
    const employee = new Intern("Lincoln", 15, "lincolnbarkley@testemail.com", school);
    expect(employee.school).toBe(school);
});

test("getRole function should return Engineer", () => {
    const role = "Intern";
    const employee = new Intern("Lincoln", 15, "lincolnbarkley@testemail.com");
    expect(employee.getRole()).toBe(role);
  });