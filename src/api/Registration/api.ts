import { client } from "http/client";
import { IRegistrationForm } from "stores/Game/Login/RegistrationModel";

export const registrationFetch = async (
  params?: any
): Promise<IRegistrationForm> => {
  const res = await client.post(`/users/register`, params);
  return res ? await res.data : null;
};

export const registrationCodeFetch = async ({
  code,
}: {
  code: string;
}): Promise<boolean> => {
  const res = await client.post(`/users/register/code`, code);
  return res ? await res.data : false;
};
