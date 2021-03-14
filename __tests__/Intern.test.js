const Intern = require("../lib/Intern");

describe("Intern", () => {
    it("should return the inputted strings as an object", () => {
        const man = {
            name: "Dave Man",
            id: 14,
            email: "DaveMan2385934@example.net",
            school: "a school"
        };
        const result = new Intern("Dave Man", 14, "DaveMan2385934@example.net", "a school");
        expect(result).toEqual(man);
    });
    describe("getRole", () => {
        it("Should return string Manager", () => {
            const correct = "Intern";
            const result = new Intern("Dave Man", 14, "DaveMan2385934@example.net", "a school");
            expect(result.getRole()).toEqual(correct);
        });
    });
    describe("getSchool", () => {
        it("should return string a school", () => {
            const correct = "a school";
            const result = new Intern("Dave Man", 14, "DaveMan2385934@example.net", "a school");
            expect(result.getSchool()).toEqual(correct);
        });
    });
});