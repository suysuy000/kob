import api from './axios';

export interface Notification {
  id: number;
  userId: number;
  type: string;
  message: string;
  isRead: boolean;
  createdAt: string;
}

export interface NotificationSettings {
  emailNotifications: boolean;
  pushNotifications: boolean;
  friendRequests: boolean;
  messages: boolean;
  updates: boolean;
}

export const notificationApi = {
  getNotifications: async (): Promise<Notification[]> => {
    const response = await api.get<Notification[]>('/notifi cations');
    return response.data;
  },

  markAsRead: async (notificationId: number): Promise<void> => {
    await api.put(`/notifications/${notificationId}/read`);
  },

  deleteNotification: async (notificationId: number): Promise<void> => {
    await api.delete(`/notifications/${notificationId}`);
  },

  getNotificationSettings: async (): Promise<NotificationSettings> => {
    const response = await api.get<NotificationSettings>('/notifications/settings');
    return response.data;
  },

  updateNotificationSettings: async (settings: NotificationSettings): Promise<void> => {
    await api.put('/notifications/settings', settings);
  },
}; 