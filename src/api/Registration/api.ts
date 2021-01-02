import { client } from "http/client";
import { IRegistrationForm } from "stores/Game/Login/RegistrationModel";

export const registrationFetch = async (
  params: IRegistrationForm
): Promise<any> => {
  const res = await client.post(`/users/register`, params);

  const out = res ? await res.data : null;
  return out;
};

export const registrationCodeFetch = async ({
  code,
  email,
}: {
  code: string;
  email: string;
}): Promise<boolean> => {
  const res = await client.post(`/users/register/code`, { code, email });
  return res ? await res.data : false;
};
