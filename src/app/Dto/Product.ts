export interface IProduct {
  id: number;
  productName: string;
  description: string;
  brand: string;
  price: number;
  cocoaParcentage: number;
  ingredients: string[];
  allergens: string[];
  imageURL: string[];
  flavor: number;
}

enum Flavor {
  dark,
  milk,
  white
}
