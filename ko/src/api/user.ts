import api from './axios';

export interface User {
  id: number;
  email: string;
  name: string;
  phone?: string;
  bio?: string;
}

export interface ProfileUpdateRequest {
  name?: string;
  phone?: string;
  bio?: string;
}

export interface PasswordChangeRequest {
  currentPassword: string;
  newPassword: string;
}

export const userApi = {
  getUsers: async (): Promise<User[]> => {
    const response = await api.get<User[]>('/users');
    return response.data;
  },

  getUser: async (id: number): Promise<User> => {
    const response = await api.get<User>(`/users/${id}`);
    return response.data;
  },

  updateProfile: async (data: ProfileUpdateRequest): Promise<User> => {
    const response = await api.put<User>('/users/profile', data);
    return response.data;
  },

  changePassword: async (data: PasswordChangeRequest): Promise<void> => {
    await api.put('/users/password', data);
  },
}; 