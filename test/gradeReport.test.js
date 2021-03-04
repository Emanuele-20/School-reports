const score = require('../src/gradeReport')


describe("Report", () => {
    it("Returns true if a string in passed", ()=> {
        expect(typeof score ).toBe('function')
    })

    it("Returns 'no result given' if an empty string is passed", ()=> {
        expect(score("")).toEqual('No result given')
    })

    it("Return 'Green: 1' when a single green value is passed", () => {
        expect(score("Green")).toBe("Green: 1")
    })

    it("Return 'Amber: 1' when a single green value is passed", () => {
        expect(score("Amber")).toBe("Amber: 1")
    })

    it("Return 'Red: 1' when a single green value is passed", () => {
        expect(score("Red")).toBe("Red: 1")
    })

    it("Return 'Green: 2' when a single green value is passed", () => {
        expect(score("Green, Green")).toBe("Green: 2")
    })




})