import { apiClient } from './client';

export const setupInterceptors = () => {
  apiClient.interceptors.request.use(
    config => {
      return config;
    },
    error => Promise.reject(error),
  );

  apiClient.interceptors.response.use(
    response => {
      return response;
    },
    error => Promise.reject(error),
  );
};
