import { AuthRepository } from "@/application/repositories/auth/auth.repository";

export class LoginUseCase {
	private authRepository;
	data = {
		email: "",
		password: "",
	};

	constructor(authRepository: AuthRepository, data) {
		this.authRepository = authRepository;
		this.data = data;
	}

	async execute() {
		return await this.authRepository.login(this.data);
	}
}
