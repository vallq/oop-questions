const VendingMachine = require("./VendingMachine");
// beforeEach(() => {
//   const Freshie = new VendingMachine();
// });
describe("Testing", () => {
  describe("Level 0", () => {
    it(`should return ["OJ"] and no change when input is OJ and 200`, () => {
      const Freshie = new VendingMachine();
      Freshie.receiveJuiceTypeAndCash("OJ", [], [200]);
      const expectedOutput = ["OJ"];
      expect(Freshie.changeToDispense).toEqual(0);
      expect(Freshie.sendOutput()).toEqual(expectedOutput);
    });

    it(`should return ["OJ", 100, 50] when input is OJ and 350`, () => {
      const Freshie = new VendingMachine();
      Freshie.receiveJuiceTypeAndCash("OJ", [50, 100], [200]);
      const expectedOutput = ["OJ", 100, 50];
      expect(Freshie.changeToDispense).toEqual(150);
      expect(Freshie.sendOutput()).toEqual(expectedOutput);
    });

    it(`should return ["OJ", 200, 200, 50, 20, 10] when input is OJ and 680`, () => {
      const Freshie = new VendingMachine();
      Freshie.receiveJuiceTypeAndCash("OJ", [50, 100], [200]);
      const expectedOutput = ["OJ", 100, 50];
      expect(Freshie.changeToDispense).toEqual(150);
      expect(Freshie.sendOutput()).toEqual(expectedOutput);
    });

  });
});

//   Input: ([10, 20, 50, 100], [500])
// Output: ["OJ", 200, 200, 50, 20, 10]
