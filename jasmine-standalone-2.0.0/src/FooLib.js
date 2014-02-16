function FooLib (ID) {

    this.id = ID;

    //Matchers

    //To demonstrate toBe()
    this.testToBe = function () {
        return true;
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
};