import { Item, GildedRose } from "@/gilded-rose";

describe("Gilded Rose", () => {
  it("Normal Item Check", () => {
    const gildedRose = new GildedRose([new Item("Snacks", 5, 10)]);

    const items = gildedRose.updateQuality();

    expect(items[0].name).toBe("Snacks");
    expect(items[0].sellIn).toBe(4);
    expect(items[0].quality).toBe(9);
  });
});
