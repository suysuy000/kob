import api from './axios';

export interface BusinessCard {
  id: number;
  userId: number;
  name: string;
  company?: string;
  position?: string;
  email: string;
  phone?: string;
  address?: string;
}

export interface BusinessCardRequest {
  name: string;
  company?: string;
  position?: string;
  email: string;
  phone?: string;
  address?: string;
}

export interface ShareRequest {
  userId: number;
}

export const businessCardApi = {
  createBusinessCard: async (data: BusinessCardRequest): Promise<BusinessCard> => {
    const response = await api.post<BusinessCard>('/business-cards', data);
    return response.data;
  },

  getBusinessCards: async (): Promise<BusinessCard[]> => {
    const response = await api.get<BusinessCard[]>('/business-cards');
    return response.data;
  },

  getBusinessCard: async (id: number): Promise<BusinessCard> => {
    const response = await api.get<BusinessCard>(`/business-cards/${id}`);
    return response.data;
  },

  updateBusinessCard: async (id: number, data: BusinessCardRequest): Promise<BusinessCard> => {
    const response = await api.put<BusinessCard>(`/business-cards/${id}`, data);
    return response.data;
  },

  deleteBusinessCard: async (id: number): Promise<void> => {
    await api.delete(`/business-cards/${id}`);
  },

  shareBusinessCard: async (id: number, data: ShareRequest): Promise<void> => {
    await api.post(`/business-cards/${id}/share`, data);
  },

  generateQRCode: async (id: number): Promise<string> => {
    const response = await api.get(`/business-cards/${id}/qr`);
    return response.data;
  },
}; 