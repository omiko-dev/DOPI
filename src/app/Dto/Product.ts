export interface IProduct {
  Id: number;
  ProductName: string;
  Description: string;
  Brand: string;
  Price: number;
  CocoaParcentage: number;
  Ingredients: string[];
  Allergens: string[];
  ImageURL: string[];
  Flavor: number;
}

enum Flavor {
  dark,
  milk,
  white
}
