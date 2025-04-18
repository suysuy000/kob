import api from './axios';

export interface Resume {
  id: number;
  userId: number;
  title: string;
  careerYears?: number;
  techStack?: string[];
  workLocation?: string;
  portfolioUrl?: string;
  content?: string;
  isPublic: boolean;
}

export interface ResumeRequest {
  title: string;
  careerYears?: number;
  techStack?: string[];
  workLocation?: string;
  portfolioUrl?: string;
  content?: string;
}

export interface VisibilityRequest {
  isPublic: boolean;
}

export interface ResumeTemplate {
  id: number;
  name: string;
  description: string;
  previewUrl: string;
}

export const resumeApi = {
  createResume: async (data: ResumeRequest): Promise<Resume> => {
    const response = await api.post<Resume>('/resumes', data);
    return response.data;
  },

  getResumes: async (): Promise<Resume[]> => {
    const response = await api.get<Resume[]>('/resumes');
    return response.data;
  },

  getResume: async (id: number): Promise<Resume> => {
    const response = await api.get<Resume>(`/resumes/${id}`);
    return response.data;
  },

  updateResume: async (id: number, data: ResumeRequest): Promise<Resume> => {
    const response = await api.put<Resume>(`/resumes/${id}`, data);
    return response.data;
  },

  deleteResume: async (id: number): Promise<void> => {
    await api.delete(`/resumes/${id}`);
  },

  updateVisibility: async (id: number, data: VisibilityRequest): Promise<void> => {
    await api.put(`/resumes/${id}/visibility`, data);
  },

  getTemplates: async (): Promise<ResumeTemplate[]> => {
    const response = await api.get<ResumeTemplate[]>('/resumes/templates');
    return response.data;
  },
}; 