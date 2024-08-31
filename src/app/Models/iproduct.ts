// b.	Interface named IProduct, which has:
// i)	ID – of type number.
// ii)	Name – of type string
// iii)	Quantity – Of type number.
// iv)	Price – of type number.
// v)	Img – of type string
// vi)	CateogryID – of type Number
export enum Offer {
  offer1 = 'No Discount',
  offer2 = '10%',
  offer3 = '15%',
}
export interface IProduct {
  id: number;
  name: string;
  quantity: number;
  price: number;
  PrdimgURL: string;
  categoryID: number;
  Material: string;
  discount?: Offer;
  isPurchased?: boolean;
}
