export interface LoginRequest {
  email: string;
  password: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  token: string;
}

export interface LoginResponse {
  success: boolean;
  message: string;
  data: User;
}
