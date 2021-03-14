const { it, expect } = require("@jest/globals");
const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    it("should return the inputted strings as an object", () => {
        const man = {
            name: "Dave Man",
            id: 14,
            email: "DaveMan2385934@example.net",
            github: "DaveMan2385934"
        };
        const result = new Engineer("Dave Man", 14, "DaveMan2385934@example.net", "DaveMan2385934");
        expect(result).toEqual(man);
    });
    describe("getRole", () => {
        it("Should return string Engineer", () => {
            const correct = "Engineer";
            const result = new Engineer("Dave Man", 14, "DaveMan2385934@example.net", "DaveMan2385934");
            expect(result.getRole()).toEqual(correct);
        });
    });
    describe("getGithub", () => {
        it("Should return string: DaveMan2385934", () => {
            const correct = "DaveMan2385934";
            const result = new Engineer("Dave Man", 14, "DaveMan2385934@example.net", "DaveMan2385934");
            expect(result.getGithub()).toEqual(correct);
        });
    });
});