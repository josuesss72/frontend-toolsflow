import { ProductRepository } from "@/application/repositories/product/product.repository";
import { PayloadProduct } from "@/domain/entities/product/product.entity";

export class CreateProductUseCase {
	constructor(private readonly productRepository: ProductRepository) {}

	async execute(data: PayloadProduct, token: string, companyId: string) {
		return await this.productRepository.create(data, token, companyId);
	}
}
