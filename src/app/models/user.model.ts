export interface User {
  id: number;
  username: string;
  email: string;
  password?: string;
  nni: string;
  phoneNumber: string;
  firstName: string;
  lastName: string;
  gender: string;
  address: string;
  enabled: boolean;
  birthDate: string;
  role: {
    id: number;
    name: string;
  };
  createdAt: string;
  updatedAt: string;
}
