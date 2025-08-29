import { UserRepository } from "@/application/repositories/user/user.repository";

export class GetUserMeUseCase {
	constructor(private readonly userRepository: UserRepository) {}

	async execute(token: string) {
		return await this.userRepository.getUserInfo(token);
	}
}
