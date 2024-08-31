// c.	Interface Named ICategory, which has: ID, Name.
// d.	Enum named DiscountOffers with values: (“No Discount”, “10%”, “15%”). [Bonus]
export enum Offer {
  offer1 = 'No Discount',
  offer2 = '10%',
  offer3 = '15%',
}
export interface ICategory {
  id: number;
  name: string;
  DiscountOffers?: Offer;
}
