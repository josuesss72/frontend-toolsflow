import { AuthRepository } from "@/application/repositories/auth/auth.repository";

export class RegisterUseCase {
	private authRepository;
	data = {
		name: "",
		email: "",
		password: "",
	};

	constructor(authRepository: AuthRepository, data) {
		this.authRepository = authRepository;
		this.data = data;
	}

	async execute() {
		return await this.authRepository.register(this.data);
	}
}
