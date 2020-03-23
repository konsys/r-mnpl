export interface User {
  firstName: string;
  lastName: string;
  patronymic: string;
  loggedIn: boolean;
  permissions?: any;
}

export interface LogInRequest {
  username: string;
  password: string;
  saveCredentials: boolean;
}
