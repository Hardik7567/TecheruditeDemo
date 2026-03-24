import { apiClient } from '../axios';
import { ENDPOINTS } from '../endpoints';

export const getEventsApi = () => {
  return apiClient.get(ENDPOINTS.EVENTS);
};
