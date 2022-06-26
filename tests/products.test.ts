import { calcAverageProductPrice } from "../src/products";

describe("calcAverageProductPrice", () => {
  test("three products", () => {
    const value: number = calcAverageProductPrice([
      { name: "Towel", price: 15 },
      { name: "Sweatshirt", price: 40 },
      { name: "Shampoo", price: 20 }
    ]);
    expect(value).toBe(25);
  });
  test("two products", () => {
    const value: number = calcAverageProductPrice([
      { name: "Sweatshirt", price: 40 },
      { name: "Shampoo", price: 20 }
    ]);
    expect(value).toBe(30);
  });
  test("one product", () => {
    const value: number = calcAverageProductPrice([
      { name: "Towel", price: 15 }
    ]);
    expect(value).toBe(15);
  });
  test("zero products", () => {
    const value: number = calcAverageProductPrice([]);
    expect(value).toBe(0);
  });
});