export interface Iuser {
  fullName: string;
  email: string;
  mobiles: string[];
  address: {
    city: string;
    postalCode: string;
    street: string;
  };
  password: string;
}
