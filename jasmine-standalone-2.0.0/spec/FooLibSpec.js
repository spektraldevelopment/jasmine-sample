describe("FooLib", function() {

    var fooLib;

    beforeEach(function() {
        fooLib = new FooLib("foobar");
    });

    it("New instance of FooLib should be defined(fooLib).", function() {
        expect(fooLib).toBeDefined();
    });

    it("Instance should have an id of \"foobar\".", function() {
        expect(fooLib.id).toMatch("foobar");
    });

    it("testToBe() should be true.", function() {
        expect(fooLib.testToBe()).toBe(true);
    });

    it("testToBe() should not be false.", function() {
        expect(fooLib.testToBe()).not.toBe(false);
    });

    it("testToMatch(\"Match\") should return a match.", function() {
        expect(fooLib.testToMatch("Match")).toMatch("Match");
    });

    it("fooLib.bar should be undefined.", function() {
        expect(fooLib.bar).toBeUndefined();
    });

    it("testToBeNull should return null.", function() {
        expect(fooLib.testToBeNull()).toBeNull();
    });

//    Included matchers:
//        The 'toBe' matcher compares with ===

//        The 'toEqual' matcher
//        works for simple literals and variables
//        should work for objects

//        The 'toMatch' matcher is for regular expressions
//        The 'toBeDefined' matcher compares against `undefined`
//        The `toBeUndefined` matcher compares against `undefined`
//        The 'toBeNull' matcher compares against null
//        The 'toBeTruthy' matcher is for boolean casting testing
//        The 'toBeFalsy' matcher is for boolean casting testing
//        The 'toContain' matcher is for finding an item in an Array
//        The 'toBeLessThan' matcher is for mathematical comparisons
//        The 'toBeGreaterThan' is for mathematical comparisons
//        The 'toBeCloseTo' matcher is for precision math comparison
//        The 'toThrow' matcher is for testing if a function throws an exception
});