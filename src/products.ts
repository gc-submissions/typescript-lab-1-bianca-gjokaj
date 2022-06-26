export interface Product {
  name: string;
  price: number;
}

export const products: Product[] = [
  {name: 'Towel', price: 15},
  {name: 'Sweatshirt', price: 40},
  {name: 'Shampoo', price: 20}
];

export const calcAverageProductPrice = (items: Product[]): number => {
  if(items.length === 0) {
    return 0;
  }

  let sum: number = 0;
  for(let product of items) {
    sum += product.price;
  }
  return sum / items.length;
}
const averageProductPrice = calcAverageProductPrice(products);
console.log(averageProductPrice);