import { calcInventoryValue } from "../src/inventory";

describe("calcInventoryValue", () => {
  test("three products", () => {
    const value: number = calcInventoryValue([
      { product: { name: "motor", price: 10 }, quantity: 10 },
      { product: { name: "sensor", price: 12.50 }, quantity: 4 },
      { product: { name: "LED", price: 1 }, quantity: 20 }
    ]);
    expect(value).toBe(170);
  });
  test("two products", () => {
    const value: number = calcInventoryValue([
      { product: { name: "Motor", price: 10 }, quantity: 10 },
      { product: { name: "LED", price: 1 }, quantity: 20 }
    ]);
    expect(value).toBe(120);
  });
  test("one product", () => {
    const value: number = calcInventoryValue([
      { product: { name: "sensor", price: 12.50 }, quantity: 4 }
    ]);
    expect(value).toBe(50);
  });
  test("zero products", () => {
    const value: number = calcInventoryValue([]);
    expect(value).toBe(0);
  });
});