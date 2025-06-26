import { Entity } from "../entity";

export interface Company {
  id: string;
  name: string;
  nit: string;
  address: string;
  city: string;
  phone: string;
  email: string;
}

export interface PayloadCompany {
  name: string;
  email: string;
  nit: string;
  career: string;
  street: string;
  number: string;
  city: string;
  phone: string;
  indicative: string;
}
export interface FetchCompany extends Entity {
  id: string;
}

export interface ResponseCompany extends Entity {
  id: string;
}

export interface FetchAllCompanies extends Entity {
  companies: Company[] | boolean;
}
