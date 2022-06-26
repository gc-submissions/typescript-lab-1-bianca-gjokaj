import {Product} from './products';
export interface InventoryItem {
  product: Product,
  quantity: number
}

export const inventory: InventoryItem[] = [
  {
    product: {
      name: 'motor',
      price: 10
    },
    quantity: 10
  },

  {
    product: {
      name: 'sensor',
      price: 12.50
    },
    quantity: 4
  },

  {
    product: {
      name: 'LED',
      price: 1
    },
    quantity: 20
  },
];

export const calcInventoryValue = (inventoryItems: InventoryItem[]): number => {
  if(inventoryItems === null) {
    return 0;
  }

  let sum: number = 0;
  for(let i = 0; i < inventoryItems.length; i++) {
    sum += inventoryItems[i].product.price * inventoryItems[i].quantity;
  }
  return sum;
}

const sum = calcInventoryValue(inventory);
console.log(sum);