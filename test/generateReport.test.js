const score = require('../src/generateReport')


describe("Report", () => {
    
    it("Returns true if a string in passed", ()=> {
        expect(typeof score ).toBe('function')
    })

    it("Returns 'no result given' if an empty string is passed", ()=> {
        expect(score("")).toEqual('No result given')
    })

    it("Returns 'no result given' if an empty string is passed", ()=> {
        expect(score("")).toEqual('No result given')
    })

    it("Return 'Amber: 1' when a single green value is passed", () => {
        expect(score("Amber")).toBe("Amber: 1")
    })

    it("Return 'Red: 1' when a single green value is passed", () => {
        expect(score("Red")).toBe("Red: 1")
    })

    it("Return 'Green: 2' when a single green value is passed (spaces in between)", () => {
        expect(score("Green, Green")).toBe("Green: 2")
    })

    it("Return 'Red: 2' when a single green value is passed (spaces in between)", () => {
        expect(score("Red, Red")).toBe("Red: 2")
    })

    it("Return 'Amber: 2' when a single green value is passed (spaces in between)", () => {
        expect(score("Amber, Amber")).toBe("Amber: 2")
    })

    it("Return 'Green: 2' when a single green value is passed", () => {
        expect(score("Green,Green")).toBe("Green: 2")
    })

    it("Return 'Red: 2' when a single green value is passed", () => {
        expect(score("Red,Red")).toBe("Red: 2")
    })

    it("Return 'Amber: 2' when a single green value is passed", () => {
        expect(score("Amber,Amber")).toBe("Amber: 2")
    })

    xit("Return Green: 2, Amber 1, Red: 2 when multiple rate colors are passed", () => {
        expect(score("Green, Green, Red, Amber, Red")).toBe("Green: 2,Amber: 1,Red: 2")
    })

    it("Return 'Green: 2\nAmber: 1\nRed: 2' when multiple rate colors are", () => {
        expect(score("Green, Green, Red, Amber, Red")).toBe("Green: 2\nAmber: 1\nRed: 2")
    })



})