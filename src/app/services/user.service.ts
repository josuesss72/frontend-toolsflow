import { UserRepository } from "@/application/repositories/user/user.repository";
import { GetUserMeUseCase } from "@/application/use-cases/user/get-user-me.usecase";

const instancia = new UserRepository(process.env.NEXT_PUBLIC_BASE_URL);

export const userService = {
	getUserInfo: new GetUserMeUseCase(instancia),
};
