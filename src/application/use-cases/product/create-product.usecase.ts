import { ProductRepository } from "@/application/repositories/product/product.repository";
import { PayloadProduct } from "@/domain/entities/product/product.entity";

export class CreateProductUseCase {
	constructor(
		private readonly productRepository: ProductRepository,
		private readonly data: PayloadProduct,
		private readonly token: string,
		private readonly companyId: string
	) {}

	async execute() {
		return await this.productRepository.create(
			this.data,
			this.token,
			this.companyId
		);
	}
}
