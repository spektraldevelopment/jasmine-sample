describe("FooLib", function() {

    var fooLib;

    beforeEach(function() {
        fooLib = new FooLib("foobar");
    });

    describe("Included matchers:", function() {

        //The 'toBeDefined' matcher compares against `undefined`
        it("New instance of FooLib should be defined(fooLib).", function() {
            expect(fooLib).toBeDefined();
        });

        it("Instance should have an id of \"foobar\".", function() {
            expect(fooLib.id).toMatch("foobar");
        });

        //The 'toBe' matcher compares with ===
        it("testToBe() should be true.", function() {
            expect(fooLib.testToBe()).toBe(true);
        });

        it("testToBe() should not be false.", function() {
            expect(fooLib.testToBe()).not.toBe(false);
        });

        //The 'toEqual' matcher works for simple literals and variables should work for objects
        it("testToEqual() should return an object.", function() {
            expect(fooLib.testToEqual()).toEqual({});
        });

        //The 'toMatch' matcher is for regular expressions
        it("testToMatch(\"Match\") should return a match.", function() {
            expect(fooLib.testToMatch("Match")).toMatch("Match");
        });

        //The 'toBeUndefined' matcher compares against 'undefined'
        it("fooLib.bar should be undefined.", function() {
            expect(fooLib.bar).toBeUndefined();
        });

        //The 'toBeNull' matcher compares against null
        it("testToBeNull() should return null.", function() {
            expect(fooLib.testToBeNull()).toBeNull();
        });

        //The 'toBeTruthy' matcher is for boolean casting testing
        it("testToBeTruthy() should return true.", function() {
            expect(fooLib.testToBeTruthy()).toBeTruthy();
        });

        //The 'toBeFalsy' matcher is for boolean casting testing
        it("testToBeFalsy() should return false.", function() {
            expect(fooLib.testToBeFalsy()).toBeFalsy();
        });

        //The 'toContain' matcher is for finding an item in an Array
        it("testToContain() returns array with value: bar.", function () {
            expect(fooLib.testToContain()).toContain("bar");
        });

        //The 'toBeLessThan' matcher is for mathematical comparisons
        it("testToBeLessThan() is less than 5.", function () {
            expect(fooLib.testToBeLessThan()).toBeLessThan(5);
        });

        //The 'toBeGreaterThan' is for mathematical comparisons
        it("testToBeGreaterThan() is greater than 2.", function () {
            expect(fooLib.testToBeGreaterThan()).toBeGreaterThan(2);
        });

        //The 'toBeCloseTo' matcher is for precision math comparison
        it("testToBeCloseTo() is close to 2.54. ", function () {
            //toBeCloseTo allows you to check if a number is close to another number, given a certain amount of decimal precision as the second argument.
            expect(fooLib.testToBeCloseTo()).toBeCloseTo(2.54, 2);
        });

        //The 'toThrow' matcher is for testing if a function throws an exception
        it("testToThrow() threw an error.", function () {
            expect(fooLib.testToThrow).toThrow();
        });
    });


    describe("Spies: ", function() {

        beforeEach(function() {
            spyOn(fooLib, 'testSpyOn');
            fooLib.testSpyOn(1234);
            fooLib.testSpyOn(5678);
            fooLib.testSpyOn("foo", "bar");
        });

        it("tracks that the spy was called", function() {
            expect(fooLib.testSpyOn).toHaveBeenCalled();
        });

        it("testSpyOn() was called with a value of 1234.", function() {
            expect(fooLib.testSpyOn).toHaveBeenCalledWith(1234);
        });

        it("testSpyOn() was called with a value of 5678.", function() {
            expect(fooLib.testSpyOn).toHaveBeenCalledWith(5678);
        });

        it("testSpyOn() was called.", function() {
            expect(fooLib.testSpyOn.calls.any()).toEqual(true);
        });

        it("testSpyOn() was called two times.", function() {
            expect(fooLib.testSpyOn.calls.count()).toEqual(3);
        });

        it("testSpyOn() third call contains foo and bar in arguments.", function() {
            expect(fooLib.testSpyOn.calls.argsFor(2)).toEqual(["foo", "bar"]);
        });

        it("all arguments passed to testSpyOn: 1234, 4567, foo, bar.", function(){
            expect(fooLib.testSpyOn.calls.allArgs()).toEqual([[1234],[5678], ["foo", "bar"]]);
        });

    });
});