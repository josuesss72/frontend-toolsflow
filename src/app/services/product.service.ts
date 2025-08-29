import { ProductRepository } from "@/application/repositories/product/product.repository";
import { CreateProductUseCase } from "@/application/use-cases/product/create-product.usecase";
import DeleteProductUseCase from "@/application/use-cases/product/delete-product.usecase";
import { GetAllProductsUseCase } from "@/application/use-cases/product/get-all-product.usecase";
import { GetProductUseCase } from "@/application/use-cases/product/get-product.usecase";
import { UpdateProductUseCase } from "@/application/use-cases/product/update-product.usecase";

const repository = new ProductRepository(process.env.NEXT_PUBLIC_BASE_URL);

export const productService = {
	getProduct: new GetProductUseCase(repository),
	getAllProducts: new GetAllProductsUseCase(repository),
	createProduct: new CreateProductUseCase(repository),
	deleteProduct: new DeleteProductUseCase(repository),
	updateProduct: new UpdateProductUseCase(repository),
};
