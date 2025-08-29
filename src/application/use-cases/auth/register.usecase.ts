import { AuthRepository } from "@/application/repositories/auth/auth.repository";
import { PayloadRegister } from "@/domain/entities/auth/register.entity";

export class RegisterUseCase {
	private authRepository;

	constructor(authRepository: AuthRepository) {
		this.authRepository = authRepository;
	}

	async execute(data: PayloadRegister) {
		return await this.authRepository.register(data);
	}
}
