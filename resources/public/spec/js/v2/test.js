define([], function() {
  console.log("in test");
  describe("does soemthing", function() {
    it ("should fail", function() {
      console.log("in it");
      expect(true).toBe(true);
    });
  });
});
