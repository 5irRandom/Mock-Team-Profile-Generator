const Manager = require("../lib/Manager");

fdescribe("Manager", () => {
    it("should return the inputted strings as an object", () => {
        const man = {
            name: "Dave Man",
            id: 14,
            email: "DaveMan2385934@example.net",
            officeNumber: 238
        }
        const result = new Manager("Dave Man", 14, "DaveMan2385934@example.net", 238);
        expect(result).toEqual(man);
    })
    describe("getRole", () => {
        it("Should return string Manager", () => {
            const correct = "Manager";
            const result = new Manager("Dave Man", 14, "DaveMan2385934@example.net", 238);
            expect(result.getRole()).toEqual(correct);
        })
    })
})