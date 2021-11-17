import { Item, GildedRose } from "@/gilded-rose";

describe("Gilded Rose", () => {
  it("Normal Item Check", () => {
    const gildedRose = new GildedRose([new Item("Snacks", 5, 10)]);

    const items = gildedRose.updateQuality();

    expect(items[0].name).toBe("Snacks");
    expect(items[0].sellIn).toBe(4);
    expect(items[0].quality).toBe(9);
  });

  it("Past-Sell-In Item Check", () => {
    const gildedRose = new GildedRose([new Item("Snacks", -1, 10)]);

    const items = gildedRose.updateQuality();

    expect(items[0].name).toBe("Snacks");
    expect(items[0].sellIn).toBe(-2);
    expect(items[0].quality).toBe(8);
  });

  it("Normal Item Non-Negative Quality Check", () => {
    const gildedRose = new GildedRose([new Item("Snacks", 5, 0)]);

    const items = gildedRose.updateQuality();

    expect(items[0].name).toBe("Snacks");
    expect(items[0].sellIn).toBe(4);
    expect(items[0].quality).toBe(0);
  });

  it("Aged Brie Check", () => {
    const gildedRose = new GildedRose([new Item("Aged Brie", 5, 1)]);

    const items = gildedRose.updateQuality();

    expect(items[0].name).toBe("Aged Brie");
    expect(items[0].sellIn).toBe(4);
    expect(items[0].quality).toBe(2);
  });

  it("Aged Brie Fifty-Quality Check", () => {
    const gildedRose = new GildedRose([new Item("Aged Brie", 5, 50)]);

    const items = gildedRose.updateQuality();

    expect(items[0].name).toBe("Aged Brie");
    expect(items[0].sellIn).toBe(4);
    expect(items[0].quality).toBe(50);
  });
});
