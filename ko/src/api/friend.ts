import api from './axios';

export interface Friend {
  id: number;
  name: string;
  email: string;
  profileImage?: string;
}

export const friendApi = {
  addFriend: async (userId: number, friendId: number): Promise<void> => {
    await api.post(`/friends/${userId}/add/${friendId}`);
  },

  getFriends: async (userId: number): Promise<Friend[]> => {
    const response = await api.get<Friend[]>(`/friends/${userId}`);
    return response.data;
  },

  getMutualFriends: async (userId1: number, userId2: number): Promise<Friend[]> => {
    const response = await api.get<Friend[]>(`/friends/${userId1}/mutual/${userId2}`);
    return response.data;
  },
}; 