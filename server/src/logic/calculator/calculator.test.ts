import Calculator, { List } from "./calculator";

describe("Calculator basic tests", () => {

    const mockResponse: List = {
        noun: 0,
        verb: 0,
        adjective: 0,
        adverb: 0,
        preposition: 0,
        conjunction: 0,
        pronoun: 0,
        interjection: 0,
        determiner: 0,
        numeral: 0
    }

    it("happy scenario", () => {
        const mockRequest1 = "cat book table house run eat sleep dance happy big beautiful quickly eagerly silently in on at above and but or nor he she they we wow ouch oops yay the a this that one two three four";
        const mockResponse1: List = {
            noun: 4,
            verb: 4,
            adjective: 3,
            adverb: 3,
            preposition: 4,
            conjunction: 5,
            pronoun: 4,
            interjection: 4,
            determiner: 4,
            numeral: 4
        };
        expect(Calculator.calculate(mockRequest1)).toEqual(mockResponse1);
    })
    it("shall return all zero values for empty string", () => {
        expect(Calculator.calculate("")).toEqual(mockResponse);
    })
    it("shall not include any words outside of vocabulary but similar letters", () => {
        expect(Calculator.calculate("vigor")).toEqual(mockResponse);
    })
    it("edge case: exclude duplicates of words with similar letters", () => {
        expect(Calculator.calculate("or nor or nor")).toEqual({ ...mockResponse, conjunction: 4 });
    })
    it("edge case: newlines, punctuation and digits shall not affect correctnes of result", () => {
        expect(Calculator.calculate(`

                    or nor,
        or 123nor
            `
        )).toEqual({ ...mockResponse, conjunction: 4 });
    })
})
