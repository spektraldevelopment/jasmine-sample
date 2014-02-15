describe("TestLib", function() {

    it("TestLib should be defined", function() {
        expect(TestLib).toBeDefined();
    });

    it("Add a and b", function() {
        var sum = TestLib.add(1, 2);
        expect(sum).toEqual(3);
    });

    it("Subtracts b from a", function() {
        var sum = TestLib.subtract(20, 5);
        expect(sum).toEqual(15);
    });

    it("Message is \"This test worked!\"", function() {
        var message = TestLib.message("This message worked!");
        expect(message).toMatch("This message worked!");
    });
});


