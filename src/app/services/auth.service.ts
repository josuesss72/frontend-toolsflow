import { AuthRepository } from "@/application/repositories/auth/auth.repository";
import { LoginUseCase } from "@/application/use-cases/auth/login.usecase";
import { RegisterUseCase } from "@/application/use-cases/auth/register.usecase";

const instancia = new AuthRepository(process.env.NEXT_PUBLIC_BASE_URL);

export const authService = {
  login: new LoginUseCase(instancia),
  register: new RegisterUseCase(instancia),
}