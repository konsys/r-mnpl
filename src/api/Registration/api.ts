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
  registrationCode,
  email,
}: {
  registrationCode: string;
  email: string;
}): Promise<boolean> => {
  const res = await client.post(`/users/register/code`, {
    registrationCode,
    email,
  });
  return res ? await res.data : false;
};

export const sendRegistrationEmailFetch = async (
  email: string
): Promise<boolean> => {
  const res = await client.post(`/users/register/code/resend`, {
    email,
  });
  return res ? await res.data : false;
};
