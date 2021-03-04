const score = require('../src/gradeReport')


describe("Report", () => {
    it("Returns true if a string in passed", ()=> {
        expect(typeof score ).toBe('function')
    })

    it("Return 'no result given' if an empty string is passed", ()=> {
        expect(score("")).toEqual('No result given')
    })
})