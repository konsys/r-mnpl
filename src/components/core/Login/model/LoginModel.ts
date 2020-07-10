import { createDomain } from "effector";

const AuthDomain = createDomain("AuthDomain");

export const LoginEffect = AuthDomain.effect();
