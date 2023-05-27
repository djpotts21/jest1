const addition = require("../calc")
const subtraction = require("../calc")

describe("Calculator", () => {
    describe("Addition function", () => {
        test("Should return 42 for 20 + 22", () =>{
            expect(addition(20, 22)).toBe(42)
        })
        test("Should return 73 for 42 + 31", () =>{
            expect(addition(42, 31)).toBe(73)
        })
        test("Should return for donkey42 when 'donkey + 42", () =>{
            expect(addition('donkey', 42)).toBe('donkey42')
        })
        test("Should return for NaN when 42 is only passed", () =>{
            expect(addition(42)).toBeNaN()
        })
        test("Should return for NaN when no numbers are passed", () =>{
            expect(addition()).toBeNaN()
        })
    });
    describe("Subtraction function", () => {
       
    })
    describe("Multiply function", () => {
        
    })
    describe("Division function", () => {
        
    })
})