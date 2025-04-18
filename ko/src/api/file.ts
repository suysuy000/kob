import api from './axios';

export interface File {
  id: number;
  userId: number;
  name: string;
  size: number;
  type: string;
  url: string;
  createdAt: string;
}

export const fileApi = {
  uploadFile: async (file: globalThis.File): Promise<File> => {
    const formData = new FormData();
    formData.append('file', file);
    const response = await api.post<File>('/files/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },

  getFiles: async (): Promise<File[]> => {
    const response = await api.get<File[]>('/files');
    return response.data;
  },

  downloadFile: async (id: number): Promise<Blob> => {
    const response = await api.get(`/files/${id}`, {
      responseType: 'blob',
    });
    return response.data;
  },

  deleteFile: async (id: number): Promise<void> => {
    await api.delete(`/files/${id}`);
  },
}; 