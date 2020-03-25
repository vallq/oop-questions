const VendingMachine = require("./VendingMachine");

describe("Freshie Vending Machine", () => {
  describe("Level 0", () => {
    it(`should return ["OJ"] and no change when input is OJ and 200`, () => {
      const Freshie = new VendingMachine();
      Freshie.inventory.addOranges(1);
      Freshie.inventory.addCups(1);
      Freshie.receiveJuiceTypeAndCash("OJ", [], [200]);
      const expectedOutput = ["OJ"];
      expect(Freshie.changeToDispense).toEqual(0);
      expect(Freshie.sendOutput()).toEqual(expectedOutput);
    });

    it(`should return ["OJ", 100, 50] when input is OJ and 350`, () => {
      const Freshie = new VendingMachine();
      Freshie.inventory.addOranges(1);
      Freshie.inventory.addCups(1);
      Freshie.receiveJuiceTypeAndCash("OJ", [50, 100], [200]);
      const expectedOutput = ["OJ", 100, 50];
      expect(Freshie.changeToDispense).toEqual(150);
      expect(Freshie.sendOutput()).toEqual(expectedOutput);
    });

    it(`should return ["OJ", 200, 200, 50, 20, 10] when input is OJ and 680`, () => {
      const Freshie = new VendingMachine();
      Freshie.inventory.addOranges(1);
      Freshie.inventory.addCups(1);
      Freshie.receiveJuiceTypeAndCash("OJ", [50, 100], [200]);
      const expectedOutput = ["OJ", 100, 50];
      expect(Freshie.changeToDispense).toEqual(150);
      expect(Freshie.sendOutput()).toEqual(expectedOutput);
    });
  });

  describe("Level 1", () => {
    it(`should return ["CW"] and no change when input is CW and 350`, () => {
      const Freshie = new VendingMachine();
      Freshie.inventory.addOranges(1);
      Freshie.inventory.addCups(1);
      Freshie.receiveJuiceTypeAndCash("CW", [50, 100], [200]);
      const expectedOutput = ["CW"];
      expect(Freshie.changeToDispense).toEqual(0);
      expect(Freshie.sendOutput()).toEqual(expectedOutput);
    });

    it(`should return ["CW", 200, 100, 20, 10] and no change when input is CW and 680`, () => {
      const Freshie = new VendingMachine();
      Freshie.inventory.addOranges(1);
      Freshie.inventory.addCups(1);
      Freshie.receiveJuiceTypeAndCash("CW", [10, 20, 50, 100], [500]);
      const expectedOutput = ["CW", 200, 100, 20, 10];
      expect(Freshie.changeToDispense).toEqual(330);
      expect(Freshie.sendOutput()).toEqual(expectedOutput);
    });
  });

  describe("Level 2", () => {
    it(`should return ["no cups", 500, 100, 50, 20, 10] when input is OJ and 680`, () => {
      const Freshie = new VendingMachine();
      Freshie.inventory.addOranges(1);
      Freshie.receiveJuiceTypeAndCash("OJ", [10, 20, 50, 100], [500]);
      const expectedOutput = ["no cups", 500, 100, 50, 20, 10];
      expect(Freshie.changeToDispense).toEqual(680);
      expect(Freshie.sendOutput()).toEqual(expectedOutput);
    });

    it(`should return ["no OJ", 500, 100, 50, 20, 10] when input is OJ and 680`, () => {
      const Freshie = new VendingMachine();
      Freshie.inventory.addCups(1);
      Freshie.receiveJuiceTypeAndCash("OJ", [10, 20, 50, 100], [500]);
      const expectedOutput = ["no OJ", 500, 100, 50, 20, 10];
      expect(Freshie.changeToDispense).toEqual(680);
      expect(Freshie.sendOutput()).toEqual(expectedOutput);
    });
  });
});
