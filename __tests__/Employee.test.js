const Employee = require("../lib/Employee");

describe("Employee", () => {
    it("should return the inputted strings as an object", () => {
        const man = {
            name: "Dave Man",
            id: 14,
            email: "DaveMan2385934@example.net"
        };
        const result = new Employee("Dave Man", 14, "DaveMan2385934@example.net");
        expect(result).toEqual(man);
    });
    describe("getName", () => {
        it("Should return string Dave Man", () => {
            const correct = "Dave Man";
            const result = new Employee("Dave Man", 14, "DaveMan2385934@example.net");
            expect(result.getName()).toEqual(correct);
        });
    });
    describe("getId", () => {
        it("Should return number 14", () => {
            const correct = 14;
            const result = new Employee("Dave Man", 14, "DaveMan2385934@example.net");
            expect(result.getId()).toEqual(correct);
        });
    });
    describe("getEmail", () => {
        it("Should return string DaveMan2385934@example.net", () => {
            const correct = "DaveMan2385934@example.net";
            const result = new Employee("Dave Man", 14, "DaveMan2385934@example.net");
            expect(result.getEmail()).toEqual(correct);
        });
    });
    describe("getRole", () => {
        it("Should return string Manager", () => {
            const correct = "Employee";
            const result = new Employee("Dave Man", 14, "DaveMan2385934@example.net");
            expect(result.getRole()).toEqual(correct);
        });
    });
});