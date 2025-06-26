import { getConfig } from "@/application/config/token";
import {
  FetchAllCompanies,
  FetchCompany,
  PayloadCompany,
} from "@/domain/entities/company/company.entity";
import { Entity } from "@/domain/entities/entity";
import axios from "axios";

export class CompanyRepository {
  apiUrl: string;

  constructor(url: string) {
    this.apiUrl = `${url}/company`;
  }

  async create(data: PayloadCompany, token: string) {
    const { name, career, street, number, phone, indicative, ...res } = data;
    return await axios
      .post<FetchCompany>(
        `${this.apiUrl}`,
        {
          name: name,
          address: `carrera ${career} #${street}-${number}`,
          phone: `${indicative}${phone}`,
          ...res,
        },
        getConfig(token)
      )
      .then((response) => response.data);
  }

  async getAll(token: string) {
    return await axios
      .get<FetchAllCompanies>(`${this.apiUrl}`, getConfig(token))
      .then((response) => response.data);
  }

  async areThereCompanies(token: string) {
    return await axios
      .get<FetchAllCompanies>(`${this.apiUrl}?verify=true`, getConfig(token))
      .then((response) => response.data);
  }
}
