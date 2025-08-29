import { AuthRepository } from "@/application/repositories/auth/auth.repository";
import { PayloadLogin } from "@/domain/entities/auth/login.entity";

export class LoginUseCase {
	constructor(private authRepository: AuthRepository) {}

	async execute(data: PayloadLogin) {
		return await this.authRepository.login(data);
	}
}
