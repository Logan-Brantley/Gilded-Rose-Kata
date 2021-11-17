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

  it("Sulfuras Check", () => {
    const gildedRose = new GildedRose([
      new Item("Sulfuras, Hand of Ragnaros", 5, 80),
    ]);

    const items = gildedRose.updateQuality();

    expect(items[0].name).toBe("Sulfuras, Hand of Ragnaros");
    expect(items[0].sellIn).toBe(5);
    expect(items[0].quality).toBe(80);
  });

  it("Backstage Passes Check", () => {
    const gildedRose = new GildedRose([
      new Item("Backstage passes to a TAFKAL80ETC concert", 15, 1),
    ]);

    const items = gildedRose.updateQuality();

    expect(items[0].name).toBe("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).toBe(14);
    expect(items[0].quality).toBe(2);
  });

  it("Backstage Passes Double-Quality-Increase Check", () => {
    const gildedRose = new GildedRose([
      new Item("Backstage passes to a TAFKAL80ETC concert", 9, 1),
    ]);

    const items = gildedRose.updateQuality();

    expect(items[0].name).toBe("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).toBe(8);
    expect(items[0].quality).toBe(3);
  });

  it("Backstage Passes Triple-Quality-Increase Check", () => {
    const gildedRose = new GildedRose([
      new Item("Backstage passes to a TAFKAL80ETC concert", 4, 1),
    ]);

    const items = gildedRose.updateQuality();

    expect(items[0].name).toBe("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).toBe(3);
    expect(items[0].quality).toBe(4);
  });

  it("Backstage Passes Quality-To-Zero Check", () => {
    const gildedRose = new GildedRose([
      new Item("Backstage passes to a TAFKAL80ETC concert", -1, 12),
    ]);

    const items = gildedRose.updateQuality();

    expect(items[0].name).toBe("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).toBe(-2);
    expect(items[0].quality).toBe(0);
  });

  it("Backstage Passes Fifty-Quality Check", () => {
    const gildedRose = new GildedRose([
      new Item("Backstage passes to a TAFKAL80ETC concert", 5, 50),
    ]);

    const items = gildedRose.updateQuality();

    expect(items[0].name).toBe("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).toBe(4);
    expect(items[0].quality).toBe(50);
  });
});
