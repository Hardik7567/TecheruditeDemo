import { apiClient } from '../axios';
import { ENDPOINTS } from '../endpoints';
import { LoginRequest, LoginResponse } from '../types/auth.types';

export const loginApi = async (
  payload: LoginRequest,
): Promise<LoginResponse> => {
  const formData = new FormData();
  formData.append('email', payload.email);
  formData.append('password', payload.password);

  const response = await apiClient.post<LoginResponse>(
    ENDPOINTS.LOGIN,
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },
  );

  return response.data;
};
