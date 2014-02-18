function FooLib (ID) {

    var testValue;

    this.id = ID;

    //Matchers

    //To demonstrate toBe()
    this.testToBe = function () {
        return true;
    }

    //ToDemonstrate toEqual()
    this.testToEqual = function () {
        return {};
    }

    //To demonstrate toMatch()
    this.testToMatch = function (message) {
        return message;
    }

    //To demonstrate toBeNull
    this.testToBeNull = function () {
        return null;
    }

    //To demonstrate toBeTruthy
    this.testToBeTruthy = function () {
        return true;
    }

    //To demonstrate toBeFalsy
    this.testToBeFalsy = function () {
        return false;
    }

    //To demonstrate toContain
    this.testToContain = function () {
        return ["foo", "bar", "lib"];
    }

    //To demonstrate toBeLessThan
    this.testToBeLessThan = function () {
        return 2;
    }

    //To demonstrate toBeLessThan
    this.testToBeGreaterThan = function () {
        return 5;
    }

    //To demonstrate toBeCloseTo
    this.testToBeCloseTo = function () {
        return 2.5378;
    }

    //To demonstrate toThrow
    this.testToThrow = function () {
        return a + 1;
    }

    //To demonstrate spyOn
    this.testSpyOn = function (val) {
        return val;
    }

    //To demonstrate spyOn().and.callThrough();
    this.setTestValue = function (val) {
        testValue = val;
    }

    this.getTestValue = function () {
        return testValue;
    }
};