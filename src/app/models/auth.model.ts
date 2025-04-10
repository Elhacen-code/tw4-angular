export interface User {
  id: number;
  username: string;
  email: string;
  password: string | null;
  nni: string;
  phoneNumber: string;
  firstName: string;
  lastName: string;
  gender: string;
  address: string;
  enabled: boolean;
  birthDate: string | null;
  role: string | null;
  createdAt: string;
  updatedAt: string | null;
}

export interface LoginResponse {
  token: string;
  user: User;
}
