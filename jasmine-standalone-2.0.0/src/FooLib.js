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
};