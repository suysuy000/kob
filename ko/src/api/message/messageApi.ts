import {
  Chat,
  ChatSettings,
  CreateChatRequest,
  CreateChatResponse,
  DeleteMessageRequest,
  GetChatsResponse,
  GetMessagesRequest,
  GetMessagesResponse,
  LeaveChatRequest,
  LeaveChatResponse,
  Message,
  MessageStatus,
  SearchChatsRequest,
  SendMessageRequest,
  UpdateChatSettingsRequest,
  UpdateMessageRequest,
  UploadResponse,
} from './types';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8080/api';

/**
 * 메시지 관련 API를 제공하는 객체
 */
export const messageApi = {
  /**
   * 채팅방 목록을 조회합니다.
   * @returns 채팅방 목록과 총 개수
   */
  getChats: async (): Promise<GetChatsResponse> => {
    const response = await fetch(`${API_BASE_URL}/chats`);
    if (!response.ok) {
      throw new Error('Failed to fetch chats');
    }
    return response.json();
  },

  /**
   * 특정 채팅방의 메시지 목록을 조회합니다.
   * @param params 조회 파라미터 (채팅방 ID, 페이지, 제한 개수, 시간 범위)
   * @returns 메시지 목록과 총 개수
   */
  getMessages: async (params: GetMessagesRequest): Promise<GetMessagesResponse> => {
    const { chatId, page = 1, limit = 20, before, after } = params;
    const queryParams = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
      ...(before && { before }),
      ...(after && { after }),
    });
    
    const response = await fetch(
      `${API_BASE_URL}/chats/${chatId}/messages?${queryParams}`
    );
    if (!response.ok) {
      throw new Error('Failed to fetch messages');
    }
    return response.json();
  },

  /**
   * 새로운 메시지를 전송합니다.
   * @param data 메시지 데이터 (채팅방 ID, 텍스트, 첨부 파일)
   */
  sendMessage: async (data: SendMessageRequest): Promise<void> => {
    const response = await fetch(`${API_BASE_URL}/messages`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error('Failed to send message');
    }
  },

  /**
   * 메시지를 삭제합니다.
   * @param data 삭제할 메시지 정보 (메시지 ID, 채팅방 ID)
   */
  deleteMessage: async (data: DeleteMessageRequest): Promise<void> => {
    const response = await fetch(
      `${API_BASE_URL}/chats/${data.chatId}/messages/${data.messageId}`,
      {
        method: 'DELETE',
      }
    );
    if (!response.ok) {
      throw new Error('Failed to delete message');
    }
  },

  /**
   * 메시지를 수정합니다.
   * @param data 수정할 메시지 정보 (메시지 ID, 채팅방 ID, 새로운 텍스트)
   */
  updateMessage: async (data: UpdateMessageRequest): Promise<void> => {
    const response = await fetch(
      `${API_BASE_URL}/chats/${data.chatId}/messages/${data.messageId}`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: data.text }),
      }
    );
    if (!response.ok) {
      throw new Error('Failed to update message');
    }
  },

  /**
   * 새로운 채팅방을 생성합니다.
   * @param data 채팅방 생성 데이터 (참여자 ID 목록, 이름, 그룹 여부)
   * @returns 생성된 채팅방 정보
   */
  createChat: async (data: CreateChatRequest): Promise<CreateChatResponse> => {
    const response = await fetch(`${API_BASE_URL}/chats`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error('Failed to create chat');
    }
    return response.json();
  },

  /**
   * 채팅방에서 나갑니다.
   * @param data 채팅방 나가기 요청 데이터 (채팅방 ID)
   * @returns 나가기 결과 메시지
   */
  leaveChat: async (data: LeaveChatRequest): Promise<LeaveChatResponse> => {
    const response = await fetch(`${API_BASE_URL}/chats/${data.chatId}/leave`, {
      method: 'POST',
    });
    if (!response.ok) {
      throw new Error('Failed to leave chat');
    }
    return response.json();
  },

  /**
   * 채팅방을 검색합니다.
   * @param params 검색 파라미터 (검색어, 페이지, 제한 개수, 필터)
   * @returns 검색된 채팅방 목록
   */
  searchChats: async (params: SearchChatsRequest): Promise<GetChatsResponse> => {
    const { query, page = 1, limit = 20, filters } = params;
    const queryParams = new URLSearchParams({
      query,
      page: page.toString(),
      limit: limit.toString(),
      ...(filters && { filters: JSON.stringify(filters) }),
    });
    
    const response = await fetch(
      `${API_BASE_URL}/chats/search?${queryParams}`
    );
    if (!response.ok) {
      throw new Error('Failed to search chats');
    }
    return response.json();
  },

  /**
   * 메시지의 읽음 상태를 조회합니다.
   * @param messageId 메시지 ID
   * @returns 메시지 상태 정보
   */
  getMessageStatus: async (messageId: number): Promise<MessageStatus> => {
    const response = await fetch(`${API_BASE_URL}/messages/${messageId}/status`);
    if (!response.ok) {
      throw new Error('Failed to get message status');
    }
    return response.json();
  },

  /**
   * 채팅방 설정을 조회합니다.
   * @param chatId 채팅방 ID
   * @returns 채팅방 설정 정보
   */
  getChatSettings: async (chatId: number): Promise<ChatSettings> => {
    const response = await fetch(`${API_BASE_URL}/chats/${chatId}/settings`);
    if (!response.ok) {
      throw new Error('Failed to get chat settings');
    }
    return response.json();
  },

  /**
   * 채팅방 설정을 업데이트합니다.
   * @param data 업데이트할 설정 정보
   */
  updateChatSettings: async (data: UpdateChatSettingsRequest): Promise<void> => {
    const response = await fetch(
      `${API_BASE_URL}/chats/${data.chatId}/settings`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data.settings),
      }
    );
    if (!response.ok) {
      throw new Error('Failed to update chat settings');
    }
  },

  /**
   * 파일을 업로드합니다.
   * @param file 업로드할 파일
   * @returns 업로드된 파일 정보
   */
  uploadFile: async (file: File): Promise<UploadResponse> => {
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch(`${API_BASE_URL}/upload`, {
      method: 'POST',
      body: formData,
    });
    if (!response.ok) {
      throw new Error('Failed to upload file');
    }
    return response.json();
  },

  /**
   * 메시지에 반응을 추가합니다.
   * @param messageId 메시지 ID
   * @param emoji 반응 이모지
   */
  addReaction: async (messageId: number, emoji: string): Promise<void> => {
    const response = await fetch(
      `${API_BASE_URL}/messages/${messageId}/reactions`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ emoji }),
      }
    );
    if (!response.ok) {
      throw new Error('Failed to add reaction');
    }
  },

  /**
   * 메시지의 반응을 제거합니다.
   * @param messageId 메시지 ID
   * @param emoji 제거할 이모지
   */
  removeReaction: async (messageId: number, emoji: string): Promise<void> => {
    const response = await fetch(
      `${API_BASE_URL}/messages/${messageId}/reactions/${encodeURIComponent(emoji)}`,
      {
        method: 'DELETE',
      }
    );
    if (!response.ok) {
      throw new Error('Failed to remove reaction');
    }
  },
}; 