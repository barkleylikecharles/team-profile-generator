const Engineer = require("../lib/Engineer");


test("Ability to set GitHub username", () => {
    const github = "barkleylikecharles";
    const employee = new Engineer("Nicole", 5, "barkleylikecharles@gmail.com", github);
    expect(employee.github).toBe(github);
});

test("getRole function should return Engineer", () => {
    const role = "Engineer";
    const employee = new Engineer("Nicole", 5, "barkleylikecharles@icloud.com", "barkleylikecharles");
    expect(employee.getRole()).toBe(role);
  });